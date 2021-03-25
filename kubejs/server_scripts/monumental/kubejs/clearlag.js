// Create item whitelist filter that won't be deleted with clearlag
var whitelist = ingredient.matchAny([
  'minecraft:diamond', // Adds diamond to whitelist
  'minecraft:gold_ingot',
  'minecraft:emerald',
  'extendedcrafting:elite_table',
  'extendedcrafting:ultimate_table'
])

// Create variable for last clearlag result
var lastClearLagResult = utils.newList()
// Create variable for total number of items
var lastTotalClearLagResult = utils.newCountingMap()

// Create new function that clears lag
function clearLag (server) {
  // Get a list of all entities on server with filter that only returns items
  var itemList = server.getEntities('@e[type=item]')
  // Create new local map for item counters
  var lastResult = utils.newCountingMap()
  // Clear old result lists
  lastClearLagResult.clear()
  lastTotalClearLagResult.clear()
  // Iterate over each entity in itemList and add item counters
  itemList.forEach(function (entity) {
    if (!whitelist.test(entity.item)) {
      // Get the name of item
      var key = entity.item.name
      // Add to entity count
      lastResult.add(key, 1)
      // Add to total item count
      lastTotalClearLagResult.add(key, entity.item.count)
      // Kill the item entity
      entity.kill()
    }
  })

  // Update and sort last result list
  lastClearLagResult.addAll(lastResult.entries)
  lastClearLagResult.sort(null)

  // Tell everyone how many items will be removed
  server.tell([
    text.lightPurple('[ClearLag]'),
    ' Removed ',
    lastTotalClearLagResult.totalCount,
    ' items. ',
    text.yellow('Click here').click('command:/clearlagresults'),
    ' for results.'
  ])
}

// Listen for server load event
events.listen('server.load', function (event) {
  // Log message in console
  event.server.tell([ text.lightPurple('[ClearLag]'), ' Timer started, clearing lag in 30 minutes!' ])
  // Schedule new task in 30 minutes
  event.server.schedule(MINUTE * 15, event.server, function (callback) {
    // Tell everyone on server that items will be removed
    callback.data.tell([ text.lightPurple('[ClearLag]'), ' Removing all items on ground in one minute!' ])
    // Schedule a subtask that will clear items in one minute
    callback.data.schedule(MINUTE, callback.data, function (callback2) {
      clearLag(callback2.data)
    })
    // Re-schedule this task for another 30 minutes (endless loop)
    callback.reschedule()
  })
})

// Register commands
events.listen('command.registry', function (event) {
  // Register new OP command /clearlag, that instantly runs clearlag
  event
    .create('clearlag')
    .op()
    .execute(function (sender, args) {
      clearLag(sender.server)
    })
    .add()

  // Register new non-OP command /clearlagresults, that displays stats of all removed items from previous /clearlag
  event
    .create('clearlagresults')
    .execute(function (sender, args) {
      sender.tell([ text.lightPurple('[ClearLag]'), ' Last clearlag results:' ])

      lastClearLagResult.forEach(function (entry) {
        var total = lastTotalClearLagResult.get(entry.key)

        if (entry.value == total) {
          sender.tell([ text.gold(entry.key), ': ', text.red(entry.value) ])
        } else {
          sender.tell([ text.gold(entry.key), ': ', text.red(entry.value), ' entities, ', text.red(total), ' total' ])
        }
      })
    })
    .add()
})