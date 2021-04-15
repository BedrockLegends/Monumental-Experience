events.listen('item.tags', (event) => {
    var items = ['naturesaura:ancient_sapling', 'byg:joshua_sapling', 'byg:yellow_spruce_sapling'];
    event.get('minecraft:saplings').add(items);
});
