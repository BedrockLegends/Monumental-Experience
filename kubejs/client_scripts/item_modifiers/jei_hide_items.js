events.listen('jei.hide.items', (event) => {
    materialsToUnify.forEach((material) => {
        if (material == 'iesnium' || material == 'graphite' || material == 'hop_graphite') {
            return;
        }
        itemsToHide.push(
            'occultism:' + material + '_ingot',
            'occultism:' + material + '_ore',
            'occultism:' + material + '_dust',
            'occultism:' + material + '_nugget',
            'occultism:' + material + '_block',
            'createaddition:' + material + '_rod',
            'immersiveengineering:ingot_' + material,
            'immersiveengineering:dust_' + material,
            'immersiveengineering:nugget_' + material,
            'immersiveengineering:ore_' + material,
            'mekanism:nugget_' + material,
            'mekanism:dust_' + material,
            'mekanism:ingot_' + material,
            'mekanism:block_' + material,
            'omegacraft:plate_' + material,
            'omegacraft:ingot_' + material,
            'omegacraft:ore_' + material + 'b',
            'thermal:' + material + '_block',
            'tmechworks:' + material + '_ore',
            'tmechworks:' + material + '_ingot',
            'tmechworks:' + material + '_nugget',
            'zycraft:' + material + '_ore',
            'routerreborn:' + material + '_ore',
            'routerreborn:' + material + '_ingot',
            'iceandfire:' + material + '_ore',
            'iceandfire:' + material + '_nugget',
            'emendatusenigmatica:' + material + '_ore',
            'allthemodium:' + material + '_ore',
            'astralsorcery:' + material + '_ore',
            'appliedenergistics2:' + material + '_ore',
            'druidcraft:' + material + '_ore',
            'bigreactors:' + material + '_ore',
            'forbidden_arcanus:' + material + '_ore',
            'byg:' + material + '_ore',
            'farlanders:' + material + '_ore',
            'good_nights_sleep:' + material + '_ore',
            'undergarden:' + material + '_ore',
            'mysticalagradditions:' + material + '_ore',
            'mysticalagriculture:' + material + '_ore',
            'mana-and-artifice:' + material + '_ore',
            'gobber2:' + material + '_ore',
            'gobber2:' + material + '_ore_nether',
            'gobber2:' + material + '_ore_end'
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    disabledItems.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    colors.forEach((color) => {
        event.hide('/refinedstorage:' + color + '\\w/');
    });

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression);
    });
});
