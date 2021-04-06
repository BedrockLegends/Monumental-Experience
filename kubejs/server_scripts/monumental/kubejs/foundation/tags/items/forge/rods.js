events.listen('item.tags', (event) => {
    var items = ['quark:iron_rod'];
    var exceptions = [];

    var tags = ['forge:rods/iron'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .remove(exceptions);
    });
});
