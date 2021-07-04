onEvent('item.tags', (event) => {
    event.add('forge:piston', [
        'minecraft:sticky_piston',
        'minecraft:piston',
        'create:mechanical_piston',
        'create:sticky_mechanical_piston'
    ]);
});
