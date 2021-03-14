//priority: 999
events.listen('recipes', p => {
    var idRemove = [

        //furnace recipes removed
        'forbidden_arcanus:obsidian_ingot_from_blasting',

        //glass removed
        'immersiveengineering:crafting/insulating_glass',

        //gears removed
        'appliedenergistics2:misc/grindstone_woodengear',
        'immersiveengineering:metalpress/gears/appliedenergistics2/gear_wooden',
        'create:pressing/appliedenergistics2/gear/gear_wooden',

		//iron furnaces recipes removed
		'ironfurnaces:gold_furnace2',
		'ironfurnaces:iron_furnace2',
		'ironfurnaces:obsidian_furnace2',
		'ironfurnaces:silver_furnace2',
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
		'ironfurnaces:upgrade_silver2',
		'ironfurnaces:upgrade_allthemodium',
		'ironfurnaces:upgrade_vibranium',
		'ironfurnaces:upgrade_unobtainium',

		//ingots removed
		'extendedcrafting:redstone_ingot_recraft',
		'forbidden_arcanus:arcane+gold_ingot_2',

		//misc
		'forbidden_arcanus:obsidian_with_iron',
		'create:crafting/materials/rose_quartz',
		'immersiveengineering:blueprint/component_steel',
		'immersiveengineering:crafting/component_iron',
		'botania:fertilizer_dye',

		//nugget
		'create:crafting/materials/andesite_alloy_from_zinc',

		//planks
		'immersiveengineering:crafting/treated_wood_horizontal',

		//steel recipes removed
		'mekanism:processing/steel/ingot/from_dust_blasting',
		'mekanism:processing/steel/ingot/from_dust_smelting',

    ];
    idRemove.forEach(iR => {
        p.remove({
            id: iR
        });
    });
});