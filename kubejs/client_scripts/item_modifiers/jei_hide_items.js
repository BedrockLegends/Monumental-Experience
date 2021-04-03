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
            'omegacraft:block_' + material + 'b',
            'omegacraft:ore_' + material + 'b',
            'thermal:' + material + '_block',
            'tmechworks:' + material + '_ore',
            'tmechworks:' + material + '_ingot',
            'tmechworks:' + material + '_nugget',
            'tmechworks:' + material + '_block',
            'tconstruct:' + material + '_block',
            'tconstruct:' + material + '_ingot',
            'tconstruct:' + material + '_nugget',
            'zycraft:' + material + '_ore',
            'routerreborn:' + material + '_ore',
            'routerreborn:' + material + '_ingot',
            'iceandfire:' + material + '_ore',
            'iceandfire:' + material + '_nugget',
            'iceandfire:' + material + '_block',
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
            'tconstruct:' + material + '_ore',
            'gobber2:' + material + '_ore_nether',
            'gobber2:' + material + '_ore_end',
            'create:' + material + '_block'
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
    mobsToUnify.forEach((mobs) => {
        if (mobs == 'iesnium' || mobs == 'graphite' || mobs == 'hop_graphite') {
            return;
        }
        itemsToHide.push(
            'minecraft:' + mobs + '_spawn_egg',
            'alexsmobs:spawn_egg' + mobs,
            'doomweapon:' + mobs + '_spawn_egg',
            'druidcraft:' + mobs + '_spawn_egg',
            'exoticbirds:' + mobs + '_spawn_egg',
            'infernalexp:' + mobs + '_spawn_egg',
            'instrumentalmobs:' + mobs + '_spawn_egg',
            'good_nights_sleep:' + mobs + '_spawn_egg',
            'iceandfire:spawn_egg' + mobs
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

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression);
});
