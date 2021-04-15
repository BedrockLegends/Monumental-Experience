events.listen('item.tags', (event) => {
    var items = ['thermal:rubber'];
    event.get('forge:rubber').add(items);
});
