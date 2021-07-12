onEvent('item.tags', (event) => {
    event.add('forge:tank', [
        'rftoolsutility:tank',
        'rftoolscontrol:tank',
        'create:fluid_tank',
        'quantumstorage:tank',
        'mob_grinding_utils:jumbo_tank',
        'mob_grinding_utils:tank_sink',
        'mob_grinding_utils:tank',
        'pneumaticcraft:small_tank',
        'pneumaticcraft:medium_tank',
        'pneumaticcraft:large_tank',
        'pneumaticcraft:etching_tank'
    ]);
});
