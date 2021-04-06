events.listen('item.tags', (event) => {
    var items = [];
    var exceptions = [
        'ceramics:clay_bucket',
        'ceramics:unfired_clay_bucket'
    ];

    var tags = ['forge:buckets'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_bucket/)
            .remove(exceptions);
    });
});
