events.listen('item.tags', (event) => {
    var items = ['minecraft:hopper', 'naturesaura:grated_chute', 'quark:chute'];
    var exceptions = [
        'botaniafloating_hopperhook',
        'botaniafloating_hopperhook_chibi',
        'rsgauges:industrial_hopper_switch'
    ];

    var tags = ['forge:tools', 'forge:tools/hopper'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_hopper/)
            .remove(exceptions);
    });
});
