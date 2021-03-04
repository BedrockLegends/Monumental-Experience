//priority: 999
events.listen('recipes', p => {
    var idRemove = [

        //copper ingot recipes removed
        'create:blasting/copper_ingot_from_crushed',
        'create:smelting/copper_ingot_from_crushed',
        'create:crafting/materials/copper_ingot_from_decompacting',
        'create:crafting/materials/copper_ingot_from_compacting',
        'create:blasting/copper_ingot_from_ore',
        'create:smelting/copper_ingot_from_ore',
        'mekanism:processing/copper/ingot/from_dust_blasting',

        //crushed iron ore
        'create:crushing/iron_ore',
        'create:milling/iron_ore',

        //crushed gold ore
        'create:crushing/gold_ore',
        'create:milling/gold_ore',

        //crushed brass ore
        'create:crushing/brass_block',
        'create:milling/brass_block',
        'create:mixing/crushed_brass',

        //crushed osmium ore
        'create:crushed/osmium_ore',
        'create:milling/osmium_ore',

        //chunkloader removed
        'appliedenergistics2:network/blocks/spatial_anchor',

        //crafting sticks removed
        'cyclic:crafting_bag',
        'cyclic:crafting_stick',
        'routerreborn:craftonstick',

        //crafter removed
        'cyclic:crafter',
        
        //cake
        'exnihilosequentia:end_cake',

        //compressed blocks removed
        'compressium:andesite_1',
        'compressium:andesite_2',
        'compressium:andesite_3',
        'compressium:andesite_4',
        'compressium:andesite_5',
        'compressium:andesite_6',
        'compressium:andesite_7',
        'compressium:andesite_8',
        'compressium:andesite_9',
        'compressium:diorite_1',
        'compressium:diorite_2',
        'compressium:diorite_3',
        'compressium:diorite_4',
        'compressium:diorite_5',
        'compressium:diorite_6',
        'compressium:diorite_7',
        'compressium:diorite_8',
        'compressium:diorite_9',
        'compressium:endstone_1',
        'compressium:endstone_2',
        'compressium:endstone_3',
        'compressium:endstone_4',
        'compressium:endstone_5',
        'compressium:endstone_6',
        'compressium:endstone_7',
        'compressium:endstone_8',
        'compressium:endstone_9',
        'compressium:granite_1',
        'compressium:granite_2',
        'compressium:granite_3',
        'compressium:granite_4',
        'compressium:granite_5',
        'compressium:granite_6',
        'compressium:granite_7',
        'compressium:granite_8',
        'compressium:granite_9',
        'compressium:honey_1',
        'compressium:honey_2',
        'compressium:honey_3',
        'compressium:honey_4',
        'compressium:honey_5',
        'compressium:honey_6',
        'compressium:honey_7',
        'compressium:honey_8',
        'compressium:honey_9',
        'compressium:lapis_1',
        'compressium:lapis_2',
        'compressium:lapis_3',
        'compressium:lapis_4',
        'compressium:lapis_5',
        'compressium:lapis_6',
        'compressium:lapis_7',
        'compressium:lapis_8',
        'compressium:lapis_9',
        'compressium:netherite_1',
        'compressium:netherite_2',
        'compressium:netherite_3',
        'compressium:netherite_4',
        'compressium:netherite_5',
        'compressium:netherite_6',
        'compressium:netherite_7',
        'compressium:netherite_8',
        'compressium:netherite_9',
        'compressium:redsand_1',
        'compressium:redsand_2',
        'compressium:redsand_3',
        'compressium:redsand_4',
        'compressium:redsand_5',
        'compressium:redsand_6',
        'compressium:redsand_7',
        'compressium:redsand_8',
        'compressium:redsand_9',
        'compressium:soulsand_1',
        'compressium:soulsand_2',
        'compressium:soulsand_3',
        'compressium:soulsand_4',
        'compressium:soulsand_5',
        'compressium:soulsand_6',
        'compressium:soulsand_7',
        'compressium:soulsand_8',
        'compressium:soulsand_9',
        'compressium:snow_1',
        'compressium:snow_2',
        'compressium:snow_3',
        'compressium:snow_4',
        'compressium:snow_5',
        'compressium:snow_6',
        'compressium:snow_7',
        'compressium:snow_8',
        'compressium:snow_9',
        
        //diamond ingot recipes removed
        'createaddition:crushing/diamond',

        //diamond dust recipes removed.
        'thermal:earth_charge/diamond_dust_from_diamond',
        'thermal:machine/pulverizer/pulverizer_diamond',

        //gold ingot recipes removed
        'create:blasting/gold_ingot_from_crushed',
        'create:smelting/gold_ingot_from_crushed',
        'mekanism:processing/gold/ingot/from_dust_smelting',
        'appliedenergistics2:smelting/gold_ingot',
        'minecraft:gold_ingot',

        //gold nugget recipes removed
        'create:splashing/crushed_gold_ore',

        //heavy weighted pressure plate removed
        'minecraft:heavy_weighted_pressure_plate',

        //iron ingot recipes removed
        'create:blasting/iron_ingot_from_crushed',
        'create:smelting/iron_ingot_from_crushed',

        //iron nugget recipes removed
        'create:splashing/crushed_iron_ore',

        //insanium apple recipe removed
        'mysticalagradditions:insanium_apple',

        //insanium coal recipe removed
        'mysticalagradditions:insanium_coal',

        //insanium gemstone recipe removed
        'mysticalagradditions:insanium_gemstone',

        //insanium farland recipe removed
        'mysticalagradditions:insanium_farmland',

        //imperium farmland recipe removed
        'mysticalagriculture:imperium_farmland',

        //imperium apple recipe removed
        'mysticalagradditions:imperium_apple',

        //imperium coal recipe removed
        'mysticalagradditions:imperium_coal',

        //imperium gemstone recipe removed
        'mysticalagriculture:imperium_gemstone',

        //imperium watering can recipe removed
        'mysticalagriculture:imperium_watering_can',

        //iron furnace
        'ironfurnaces:upgrade_iron',
        'ironfurnaces:upgrade_gold',
        'ironfurnaces:upgrade_diamond',
        'ironfurnaces:upgrade_emerald',
        'ironfurnaces:upgrade_obsidian',
        'ironfurnaces:upgrade_crystal',
        'ironfurnaces:upgrade_netherite',
        'ironfurnaces:upgrade_copper',
        'ironfurnaces:upgrade_silver',
        'ironfurnaces:upgrade_obsidian2',
        'ironfurnaces:upgrade_iron2',
        'ironfurnaces:upgrade_gold2',
        'ironfurnaces:upgrade_silver2',

        //light weighted pressure plate recipe removed
        'minecraft:light_weighted_pressure_plate',

        //lead ingot recipes removed
        'mekanism:processing/lead/ingot/from_dust_blasting',
        'create:blasting/ingot_lead_compat_immersiveengineering',
        'immersiveengineering:crafting/ingot_lead_from_dust_from_blasting',
        'immersiveengineering:crafting/ingot_lead_from_blasting',

        //osmium ingot recipes removed
        'mekanism:processing/osmium/ingot/from_dust_smelting',
        'mekanism:processing/osmium/ingot/from_dust_blasting',

        //prosperity gemstone recipe removed
        'mysticalagriculture:prosperity_gemstone',

        //plates removed
        'mcwfurnitures:crimson_plate',
        'mcwfurnitures:oak_plate',
        'mcwfurnitures:spruce_plate',
        'mcwfurnitures:birch_plate',
        'mcwfurnitures:jungle_plate',
        'mcwfurnitures:acacia_plate',
        'mcwfurnitures:dark_oak_plate',
        'mcwfurnitures:warped_plate',
        'forbidden_arcanus:polished_darkstone_pressure_plate',
        'minecraft:stone_pressure_plate',

        //recycling gold
        'immersiveengineering:recycling/golden_shovel',
        'immersiveengineering:recycling/crook_gold',

        //supremium farmland recipe removed
        'mysticalagriculture:supremium_farmland',

        //supremium apple recipe removed
        'mysticalagradditions:supremium_apple',

        //supremium coal recipe removed
        'mysticalagradditions:supremium_coal',

        //supremium gemstone recipe removed
        'mysticalagriculture:supremium_gemstone',

        //supremium watering can recipe removed
        'mysticalagriculture:supremium_watering_can',

        //tertium farmland recipe removed
        'mysticalagriculture:tertium_farmland',

        //tertium apple recipe removed
        'mysticalagradditions:tertium_apple',

        //tertium coal recipe removed
        'mysticalagradditions:tertium_coal',

        //tertium gemstone recipe removed
        'mysticalagriculture:tertium_gemstone',

        //tertium watering can recipe removed
        'mysticalagriculture:tertium_watering_can',

        //uranium ingot recipes removed
        'mekanism:processing/uranium/ingot/from_nuggets',
        'mekanism:processing/uranium/ingot/from_block',
        'mekanism:processing/uranium/storage_blocks/from_ingots',
        'mekanism:processing/uranium/ingot/from_dust_blasting',

        //uncrafter recipe removed
        'cyclic:uncrafter',

        //zinc ingot recipes removed
        'create:crafting/materials/zinc_ingot_from_decompacting',
        'create:crafting/materials/zinc_ingot_from_compacting',
        'create:smelting/zinc_ingot_from_crushed',
        'create:smelting/zinc_ingot_from_ore',
        'create:blasting/zinc_ingot_from_crushed',
        'create:blasting/zinc_ingot_from_ore'
    ];
    idRemove.forEach(iR => {
        p.remove({
            id: iR
        });
    });
});