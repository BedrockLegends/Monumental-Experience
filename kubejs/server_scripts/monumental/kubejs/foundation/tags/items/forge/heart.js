events.listen('item.tags', (event) => {
    var items = [];
    var exceptions = [
        'artifacts:crystal_heart',
        'bhc:red_heart_canister',
        'bhc:yellow_heart_canister',
        'bhc:green_heart_canister',
        'bhc:blue_heart_canister',
        'losttrinkets:broken_heart_1',
        'losttrinkets:broken_heart_2',
        'losttrinkets:broken_heart_3',
        'losttrinkets:broken_heart_4',
        'losttrinkets:broken_heart_5',
        'inventorypets:pet_heart'
    ];

    var tags = ['forge:heart'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_heart/)
            .remove(exceptions);
    });
});
