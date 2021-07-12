onEvent('item.tags', (event) => {
    event.add('forge:clock', [
        'minecraft:clock',
        'supplementaries:clock_block',
        'create:cuckoo_clock',
        'botania:cosmetic_clock_eye'
    ]);
});
