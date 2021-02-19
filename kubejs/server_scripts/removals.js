//priority: 999
events.listen('recipes', p => {
    var idRemove = [

        //apatite crafting removed
        'thermal:earth_charge/apatite_dust_from_apatite',
	
	    //ae2 recipes removed
	    'appliedenergistics2:decorative/certus_quartz_block_pure',
	    'appliedenergistics2:decorative/certus_quartz_block',
	    'appliedenergistics2:decorative/certus_quartz_pillar',
	    'appliedenergistics2:misc/deconstruction_certus_quartz_block',
	    'appliedenergistics2:shaped/slabs/quartz_block',
	    'appliedenergistics2:decorative/chiseled_quartz_block',
	    'appliedenergistics2:shaped/stairs/quartz_block',
	    'appliedenergistics2:facade/appliedenergistics2/quartz_block',
	    'appliedenergistics2:block_cutter/stairs/quartz_stairs',
	    'appliedenergistics2:block_cutter/slabs/quartz_slab',
	    'appliedenergistics2:misc/deconstruction_certus_quartz_pillar',
	    'appliedenergistics2:shaped/stairs/quartz_pillar',
	    'appliedenergistics2:shaped/slabs/quartz_pillar',
	    'appliedenergistics2:block_cutter/stairs/quartz_pillar_stairs',
	    'appliedenergistics2:block_cutter/slabs/quartz_pillar_slab',
	    'appliedenergistics2:misc/deconstruction_certus_chiseled_quartz',
	    'appliedenergistics2:shaped/slabs/chiseled_quartz_block',
	    'appliedenergistics2:shaped/stairs/chiseled_quartz_block',
	    'appliedenergistics2:block_cutter/slabs/chiseled_quartz_slab',
	    'appliedenergistics2:block_cutter/stairs/chiseled_quartz_stairs',
	    'appliedenergistics2:decorative/quartz_fixture',
	    'appliedenergistics2:misc/chests_sky_stone',
	    'appliedenergistics2:misc/chests_smooth_sky_stone',
	    'appliedenergistics2:misc/meteors_sky_compass',
	    'appliedenergistics2:misc/grindstone',
	    'appliedenergistics2:misc/grindstone_crank',
	    'appliedenergistics2:decorative/light_detector',
	    'appliedenergistics2:shaped/stairs/sky_stone_block',
	    'appliedenergistics2:block_cutter/stairs/sky_stone_stairs',
	    'appliedenergistics2:shaped/stairs/smooth_sky_stone_block',
	    'appliedenergistics2:block_cutter/stairs/smooth_sky_stone_stairs',
	    'appliedenergistics2:shaped/stairs/sky_stone_brick',
	    'appliedenergistics2:block_cutter/stairs/sky_stone_brick_stairs',
	    'appliedenergistics2:shaped/stairs/sky_stone_small_brick',
	    'appliedenergistics2:block_cutter/stairs/sky_stone_small_brick_stairs',
	    'appliedenergistics2:shaped/stairs/fluix_block',
	    'appliedenergistics2:block_cutter/stairs/fluix_stairs',
	    'appliedenergistics2:shaped/slabs/sky_stone_block',
	    'appliedenergistics2:block_cutter/slabs/sky_stone_slab',
	    'appliedenergistics2:shaped/slabs/smooth_sky_stone_block',
	    'appliedenergistics2:block_cutter/slabs/smooth_sky_stone_slab',
	    'appliedenergistics2:shaped/slabs/sky_stone_brick',
	    'appliedenergistics2:block_cutter/slabs/sky_stone_brick_slab',
	    'appliedenergistics2:shaped/slabs/sky_stone_small_brick',
	    'appliedenergistics2:block_cutter/slabs/sky_stone_small_brick_slab',
	    'appliedenergistics2:shaped/slabs/fluix_block',
	    'appliedenergistics2:block_cutter/slabs/fluix_slab',
	    'mekanism:compat/appliedenergistics2/sky_stone_to_dust',
	    'create:compat/ae2/milling/sky_stone_block',
	    'appliedenergistics2:network/cells/empty_storage_cell',

	    //arcane crystal smelting recipe removed
	    'forbidden_arcanus:arcane_crystal_from_smelting',

	    //ae2 cell recipes removed
	    'appliedenergistics2:network/cells/storage_cell_1k_storage',
	    'appliedenergistics2:network/cells/storage_cell_4k_storage',
	    'appliedenergistics2:network/cells/storage_cell_16k_storage',
	    'appliedenergistics2:network/cells/storage_cell_64k_storage',
	    'appliedenergistics2:network/cells/fluid_storage_cell_1k_storage',
	    'appliedenergistics2:network/cells/fluid_storage_cell_4k_storage',
	    'appliedenergistics2:network/cells/fluid_storage_cell_16k_storage',
	    'appliedenergistics2:network/cells/fluid_storage_cell_64k_storage',
	    'appliedenergistics2:network/cells/spatial_storage_cell_2_cubed_storage',
	    'appliedenergistics2:network/cells/spatial_storage_cell_16_cubed_storage',
	    'appliedenergistics2:network/cells/spatial_storage_cell_128_cubed_storage',
	    'appliedenergistics2:network/cells/view_cell_storage',

        //armor recipes removed
        'iceandfire:chainmail_chestplate',
        'iceandfire:chainmail_helmet',
        'iceandfire:chainmail_leggings',
        'iceandfire:chainmail_boots',

        //aquamarine smelting recipe removed
        'astralsorcery:smelting/aquamarine',

		//AllTheModium Smelting Recipes Removed
        'allthemodium:main/allthemodium_ingot',
		'allthemodium:mek_processing/allthemodium/ingot/from_dust_smelting',
		'allthemodium:mek_processing/unobtainium/ingot/from_dust_smelting',
		'allthemodium:main/ubobtainium_ingot',
		'allthemodium:main/vibranium_ingot',
		'allthemodium:mek_processing/vibranium/ingot/from_dust_smelting',
		'allthemodium:main/ubobtainium_allthemodium_ingot_from_dust',
		'allthemodium:main/unobtainium_vibranium_ingot_from_dust',
		'allthemodium:main/vibranium_allthemodium_ingot_from_dust',

		//AllTheModium Nugget to Ingot Recipes Removed
		'allthemodium:main/allthemodium_ingot_from_allthemodium_nugget',
		'allthemodium:main/unobtainium_ingot_from_unobtainium_nugget',
		'allthemodium:main/vibranium_ingot_from_vibranium_nugget',

		//allthemodium block recipes removed
        'allthemodium:main/unobtainium_allthemodium_alloy_ingot_from_block',
        'allthemodium:main/unobtainium_vibranium_alloy_ingot_from_block',
        'allthemodium:main/unobtainium_allthemodium_alloy_block',
        'allthemodium:main/unobtainium_vibranium_alloy_block',
        'allthemodium:main/vibranium_allthemodium_alloy_block',

		//allthemodium armor recipes removed
		'allthemodium:main/allthemodium_boots',
		'allthemodium:main/allthemodium_leggings',
		'allthemodium:main/allthemodium_chestplate',
		'allthemodium:main/allthemodium_helmet',
		'allthemodium:main/unobtainium_boots',
		'allthemodium:main/unobtainium_leggings',
		'allthemodium:main/unobtainium_chestplate',
		'allthemodium:main/unobtainium_helmet',
		'allthemodium:main/vibranium_boots',
		'allthemodium:main/vibranium_leggings',
		'allthemodium:main/vibranium_chestplate',
		'allthemodium:main/vibranium_helmet',

		//alltheores ingot from nugget recipes removed
		'alltheores:aluminum_ingot_from_aluminum_nugget',
		'alltheores:copper_ingot_from_copper_nugget',
		'alltheores:lead_ingot_from_lead_nugget',
		'alltheores:nickel_ingot_from_nickel_nugget',
		'alltheores:osmium_ingot_from_osmium_nugget',
		'alltheores:platinum_ingot_from_platinum_nugget',
		'alltheores:silver_ingot_from_silver_nugget',
		'alltheores:tin_ingot_from_tin_nugget',
		'alltheores:uranium_ingot_from_uranium_nugget',
		'alltheores:zinc_ingot_from_zinc_nugget',

		//aluminum smelting recipes removed
		'alltheores:smelting_dust/aluminum_ingot',
		'alltheores:aluminum_ingot',

		//arcane ingot from nugget recipes removed
		'forbidden_arcanus:arcane_gold_ingot_3',

		//big reactors smelting recipes removed
		'bigreactors:smelting/yellorium_from_ore',
		'bigreactors:smelting/yellorium_from_dust',
		'bigreactors:smelting/cyanite_from_dust',
		'bigreactors:smelting/graphite_from_charcoal',
		'bigreactors:smelting/graphite_from_dust',
		'bigreactors:smelting/graphite_from_coal',

		//botania ingot from nugget recipes removed
		'botania:conversions/manasteel_from_nuggets',
		'botania:conversions/terrasteel_from_nugget',
		'botania:conversions/elementium_from_nuggets',

        //black iron recipes removed
        'extendedcrafting:black_iron_ingot',
        'extendedcrafting:black_iron_ingot_recraft',
        'extendedcrafting:frame',

        //bucket recipe removed
        'minecraft:bucket',

        //botanypots shapeless recipes removed
        'botanypots:crafting/hopper_botany_pot',
        'botanypots:crafting/hopper_red_botany_pot',
        'botanypots:crafting/hopper_white_botany_pot',
        'botanypots:crafting/hopper_orange_botany_pot',
        'botanypots:crafting/hopper_magenta_botany_pot',
        'botanypots:crafting/hopper_light_blue_botany_pot',
        'botanypots:crafting/hopper_yellow_botany_pot',
        'botanypots:crafting/hopper_lime_botany_pot',
        'botanypots:crafting/hopper_pink_botany_pot',
        'botanypots:crafting/hopper_gray_botany_pot',
        'botanypots:crafting/hopper_light_gray_botany_pot',
        'botanypots:crafting/hopper_cyan_botany_pot',
        'botanypots:crafting/hopper_purple_botany_pot',
        'botanypots:crafting/hopper_blue_botany_pot',
        'botanypots:crafting/hopper_brown_botany_pot',
        'botanypots:crafting/hopper_green_botany_pot',
        'botanypots:crafting/hopper_black_botany_pot',

        //cinnabar crafting removed
        'thermal:earth_charge/cinnabar_dust_from_cinnabar',

        //computercraft recipes removed
        'computercraft:pocket_computer_normal',
		'computercraft:pocket_normal/computercraft/wireless_modem_normal',
        'computercraft:pocket_normal/computercraft/wireless_modem_advanced',
        'computercraft:pocket_normal/computercraft/speaker',
        'computercraft:pocket_computer_advanced_upgrade',
        'computercraft:pocket_computer_advanced',
        'computercraft:computer_advanced_upgrade',
        'computercraft:turtle_advanced_upgrade',
        'computercraft:computer_command',
        'computercraft:wired_modem_full_to',

        //chancecube recipes removed
        'chancecubes:tier_1_pendant_crafting',
        'chancecubes:cube_scanner_crafting',
        'chancecubes:tier_3_pendant_crafting',
        'chancecubes:silk_pendant_crafting',
        'chancecubes:chance_cube_crafting',
        'chancecubes:tier_2_pendant_crafting',

        //cyclic removed recipes
        'cyclic:crafting_stick',
        'cyclic:crafting_bag',
        'cyclic:uncrafter',

        //crystaltine recipe removed
        'extendedcrafting:crystaltine_catalyst',

        //crystaltine ingot recipes removed
        'extendedcrafting:crystaltine_ingot',
        'extendedcrafting:crystaltine_ingot_recraft',
        'extendedcrafting:crystaltine_ingot_block_uncraft',

        //crystaltine recipe removed
        'extendedcrafting:crystaltine_component',

        //compress iron gear recipe recipe removed
        'pneumaticcraft:compressed_iron_gear',

        //crystaltine recipe removed
        'extendedcrafting:crystaltine_catalyst',

		//copper smelting recipes removed
		'mekanism:processing/copper/ingot/from_dust_smelting',
		'alltheores:smelting_dust/copper_ingot',
		'alltheores:copper_ingot',
		'create:smelting/copper_ingot_from_ore',
		'mekanism:processing/copper/ingot/from_ore_smelting',
		'routerreborn:copper_ingot',
	    'occultism:smelting/copper_ingot',
	    'occultism:smelting/copper_ingot_from_dust',
		
		//copper blasting recipes removed
		'alltheores:blasting_dust/copper_ingot',
		'mekanism:processing/copper/ingot/from_dust_blasting',
	    'occultism:blasting/copper_ingot',
	    'occultism:blasting/copper_ingot_from_dust',
			
        //dust from obsidian furance recipes removed
        'occultism:smelting/obsidian_from_dust',

		//diamond smelting recipes removed
		'clib:diamond_dust_smelting',
		'minecraft:diamond_from_smelting',
		'powder_power:diamond_from_powder',
		'undergarden:smelt_undergarden_diamond',

		//diamond recipe removed
		'inventorypets:diamond',

		//ender chest recipe removed
		'minecraft:ender_chest',

        //ender ingot recipes removed
        'extendedcrafting:ender_ingot',
        'extendedcrafting:ender_ingot_recraft',
        'extendedcrafting:ender_ingot_block_uncraft',

        //ender component recipe removed
        'extendedcrafting:ender_component',

        //ender catalyst recipe removed
        'extendedcrafting:ender_catalyst',

        //enhanced ender ingot recipes removed
        'extendedcrafting:enhanced_ender_ingot',
        'extendedcrafting:enhanced_ender_ingot_recraft',
        'extendedcrafting:enhanced_ender_ingot_block_uncraft',

        //enhanced component recipe removed
        'extendedcrafting:enhanced_ender_component',

        //enhanced catalyst recipe removed
        'extendedcrafting:enhanced_ender_catalyst',

        //emerald recipes removed
        'inventorypets:emerald',

        //emerald smelting recipes removed
        'clib:emerald_dust_smelting',
        'minecraft:emerald_from_smelting',
        'powder_power:emerald_from_powder',

        //extra disk recipes removed
        'extradisks:disk/shapeless/256k_storage_disk',
        'extradisks:disk/shapeless/1024k_storage_disk',
        'extradisks:disk/shapeless/4096k_storage_disk',
        'extradisks:disk/shapeless/16384k_storage_disk',
        'extradisks:disk/shapeless/65536k_storage_disk',
        'extradisks:disk/shapeless/262144k_storage_disk',
        'extradisks:disk/shapeless/1048576k_storage_disk',
        'extradisks:disk/shapeless/infinite_storage_disk',
        'extradisks:disk/shapeless/16384k_fluid_storage_disk',
        'extradisks:disk/shapeless/65536k_fluid_storage_disk',
        'extradisks:disk/shapeless/262144k_fluid_storage_disk',
        'extradisks:disk/shapeless/1048576k_fluid_storage_disk',
        'extradisks:disk/shapeless/infinite_fluid_storage_disk',

        //ender pearl dust crafting removed
        'thermal:earth_charge_ender_pearl_dust_from_ender_pearl',
        'thermal:earth_charge/earth_charge_ender_pearl_dust_from_ender_pearl',

        //extrastorage recipes removed
        'extrastorage:part/storagepart_256k',
        'extrastorage:part/storagepart_1024k',
        'extrastorage:part/storagepart_4096k',
        'extrastorage:part/storagepart_16384k',
        'extrastorage:part/storagepart_16384k_fluid',
        'extrastorage:part/storagepart_65536k_fluid',
        'extrastorage:part/storagepart_262144k_fluid',
        'extrastorage:part/storagepart_1048576k_fluid',
        'extrastorage:disk/shaped/disk_256k',
        'extrastorage:disk/shapeless/disk_256k',
        'extrastorage:disk/shaped/disk_1024k',
        'extrastorage:disk/shapeless/disk_1024k',
        'extrastorage:disk/shaped/disk_4096k',
        'extrastorage:disk/shapeless/disk_4096k',
        'extrastorage:disk/shapeless/disk_16384k',
        'extrastorage:disk/shaped/disk_16384k',
        'extrastorage:disk/shaped/disk_262144k_fluid',
        'extrastorage:disk/shapeless/disk_262144k_fluid',
        'extrastorage:disk/shaped/disk_1048576k_fluid',
        'extrastorage:disk/shapeless/disk_1048576k_fluid',
        'extrastorage:disk/shaped/disk_65536k_fluid',
        'extrastorage:disk/shapeless/disk_65536k_fluid',
        'extrastorage:disk/shapeless/disk_16384k_fluid',
        'extrastorage:disk/shaped/disk_16384k_fluid',
        'extrastorage:storage_block/block_256k',
        'extrastorage:storage_block/block_1024k',
        'extrastorage:storage_block/block_4096k',
        'extrastorage:storage_block/block_16384k',
        'extrastorage:storage_block/block_16384k_fluid',
        'extrastorage:storage_block/block_65536k_fluid',
        'extrastorage:storage_block/block_262144k_fluid',
        'extrastorage:storage_block/block_1048576k_fluid',

        //furnace removed
        'good_nights_sleep:furnace_compat',

        //flux networks recipes removed
        'fluxnetworks:wipe_herculeanfluxstorage',
        'fluxnetworks:wipe_basicfluxstorage',
        'fluxnetworks:wipe_gargantuanfluxstorage',
        'fluxnetworks:wipe_fluxcontroller',
        'fluxnetworks:wipe_fluxplug',

        //forbidden arcanus recipes removed
        'forbidden_arcanus:reinforced_arcane_golden_pickaxe',
        'forbidden_arcanus:reinforced_arcane_golden_hoe',
        'forbidden_arcanus:reinforced_arcane_golden_shovel',
        'forbidden_arcanus:reinforced_arcane_golden_axe',
        'forbidden_arcanus:reinforced_arcane_golden_sword',

		//gold ingot from nugget recipes removed
		'minecraft:gold_ingot_from_nuggets',

		//glowstone smelting recipe removed
		'byg:glowstone_dust_from_furnace',

        //gold smelting recipes removed
        'bloodmagic:smelting/ingot_gold',
        'mekanism:processing/gold/ingot/from_dust_smelting',
        'create:smelting/gold_ingot_from_crushed',
        'appliedenergistics2:smelting/gold_ingot',
        'minecraft:gold_ingot',
        'pedestals:ingot_gold',
        'engineerstools:smelting/gold_grit_smelting_recipe',
        'immersiveengineering:crafting/gold_ingot_from_dust',
        'clib:gold_dust_smelting',
        'thermal:smelting/gold_ingot_from_dust_smelting',
        'powder_power:powder_gold',
		'occultism:smelting/gold_ingot_from_dust',
		'undergarden:smelt_undergarden_gold',
		'electrodynamics:ingotgold_dust_smelting',

        //gold blasting recipes removed
        'thermal:smelting/gold_ingot_from_dust_blasting',
        'powder_power:powder_gold_blasting',
        'mekanism:processing/gold/ingot/from_dust_blasting',
        'immersiveengineering:crafting/gold_ingot_from_dust_from_blasting',
		'occultism:blasting/gold_ingot_from_dust',

        //heart of the sea removed
        'mysticalagriculture:essence/heart_of_the_sea',

		//iron ingot from nugget recipes removed
		'minecraft:iron_ingot_from_nuggets',

		//isenium ore to ingot furnace recipe removed
		'occultism:smelting/isenium_ingot',

		//ice and fire recipes removed
		'iceandfire:silver_pile',
		'iceandfire:copper_pile',

		//iron furnaces recipes removed
		'ironfurnaces:gold_furnace2',
		'ironfurnaces:iron_furnace2',
		'ironfurnaces:obsidian_furnace2',
		'ironfurnaces:silver_furnace',
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

        //iron smelting recipes removed
        'bloodmagic:smelting/ingot_iron',
        'mekanism:processing/iron/ingot/from_dust_smelting',
        'create:smelting/iron_ingot_from_crushed',
        'appliedenergistics2:smelting/iron_ingot',
        'minecraft:iron_ingot',
        'pedestals:ingot_iron',
        'engineerstools:smelting/iron_grit_smelting_recipe',
        'immersiveengineering:crafting/iron_ingot_from_dust',
        'clib:iron_dust_smelting',
        'thermal:smelting/iron_ingot_from_dust_smelting',
        'powder_power:powder_iron',
		'occultism:smelting/iron_ingot_from_dust',
		'undergarden:smelt_undergarden_iron',
		'undergarden:smelt_catalyst',
		'electrodynamics:ingotiron_dust_smelting',

        //iron blasting recipes removed
        'thermal:smelting/iron_ingot_from_dust_blasting',
        'powder_power:powder_iron_blasting',
        'mekanism:processing/iron/ingot/from_dust_blasting',
        'immersiveengineering:crafting/iron_ingot_from_dust_from_blasting',
		'occultism:blasting/iron_ingot_from_dust',

		//immersiveengineering nugget recipes removed
		'immersiveengineering:crafting/nugget_nickel_to_ingot_nickel',

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

        //inferium apple recipe removed
        'mysticalagradditions:inferium_apple',

        //inferium coal recipe removed
        'mysticalagradditions:inferium_coal',

        //inferium gemstone recipe removed
        'mysticalagriculture:inferium_gemstone',

        //inferium farland recipe removed
        'mysticalagriculture:inferium_farmland',

        //inferium watering can recipe removed
        'mysticalagriculture:inferium_watering_can',

		//lead smelting recipes removed
		'mekanism:processing/lead/ingot/from_dust_smelting',
		'alltheores:smelting_dust/lead_ingot',
		'alltheores:lead_ingot',
		'clib:lead_ingot',
		'mekanism:processing/lead/ingot/from_ore_smelting',

		//lapis smelting recipes removed
		'minecraft:lapis_from_smelting',
		'powder_power:lapis_from_dust',
		'clib:lapis_dust_smelting',

		//lead blasting recipes removed
		'alltheores:blasting_dust/lead_ingot',
		'mekanism:processing/lead/ingot/from_dust_blasting',

        //leather smelting removed
        'forbidden_arcanus:leather',
        'powder_power:leather_from_flesh',

        //mystical seeds removed
        'mysticalagriculture:seed/infusion/sky_stone',

        //mana and artifice
        'mana-and-artifice:purified_vinteum_bar',
        'mana-and-artifice:vinteum_bar',

        //mysticalagriculture recipes removed
        'mysticalagriculture:tertium_ingot_recraft',
        'mysticalagriculture:supremium_ingot_recraft',
        'mysticalagriculture:prudentium_ingot_recraft',
        'mysticalagradditions:end_prosperity_shard_smelted',
        'mysticalagriculture:prosperity_shard_smelted',
        'mysticalagradditions:nether_prosperity_shard_smelted',
        'mysticalagriculture:prosperity_ingot_recraft',
        'mysticalagriculture:inferium_ingot_recraft',
        'mysticalagriculture:imperium_ingot_recraft',
        'mysticalagradditions:insanium_ingot_recraft',
        'industrialagriculture:eggs/minecraft/zombie_pigman_egg',
        'industrialagriculture:llama_disc',

		//mekanism ingot from nugget recipes removed
		'mekanism:processing/refined_obsidian/ingot/from_nuggets',
		'mekanism:processing/refined_glowstone/ingot/from_nuggets',

        //niter crafting removed
        'thermal:earth_charge/niter_dust_from_niter',

		//nickel smelting recipes removed
		'alltheores:smelting_dust/nickel_ingot',
		'alltheores:nickel_ingot',

		//nickel blasting recipes removed
		'alltheores:blasting_dust/nickel_ingot',

        //netherite smelting recipes removed
        'clib:netherite_dust_smelting',
        'mekanism:processing/netherite/ingot_from_dust_smelting',

		//osmium smelting recipes removed
		'alltheores:smelting_dust/osmium_ingot',
		'mekanism:processing/osmium/ingot/from_dust_smelting',
		'alltheores:osmium_ingot',
		'mekanism:processing/osmium/ingot/from_ore_smelting',

		//osmium blasting recipes removed
		'alltheores:blasting_dust/osmium_ingot',
		'mekanism:processing/osmium/ingot/from_dust_blasting',

		//obsidian ingot from nugget recipes removed
		'forbidden_arcanus:obsidian_ingot',

		//obsidian dust from ingot recipes removed
		'powder_power:ingot_obsidian_blasting',
		'occultism:blasting/obsidian_from_dust',

		//obsidian with iron to ingot recipe removed
		'forbidden_arcanus:obsidian_ingot_from_blasting',
		'forbidden_arcanus:obsidian_ingot',

		//platinum smelting recipes removed
		'alltheores:smelting_dust/platinum_ingot',
		'alltheores:platinum_ingot',

		//prefab recipes removed
		'prefab:warehouse_with_lanterns',
		'prefab:tree_farm_with_lanterns',
		'prefab:advanced_warehouse_with_lanterns',
		'prefab:advanced_horse_stable_with_lanterns',

		//platinum blasting recipes removed
		'alltheores:blasting_dust/platinum_ingot',

        //prudentium apple recipe removed
        'mysticalagradditions:prudentium_apple',

        //prudentium coal recipe removed
        'mysticalagradditions:prudentium_coal',

        //prudentium gemstone recipe removed
        'mysticalagriculture:prudentium_gemstone',

        //prudentium watering can recipe removed
        'mysticalagriculture:prudentium_watering_can',

        //prosperity gemstone recipe removed
        'mysticalagriculture:prosperity_gemstone',

		//quartz smelting recipes removed
		'powder_power:quartz_from_powder',
		'minecraft:quartz',
		'clib:quartz_dust_smelting',

        //redstone ingot recipes removed
        'extendedcrafting:redstone_ingot',
        'extendedcrafting:redstone_ingot_recraft',
        'extendedcrafting:redstone_ingot_block_uncraft',

        //redstone component recipe removed
        'extendedcrafting:redstone_component',

        //redstone catalyst recipe removed
        'extendedcrafting:redstone_catalyst',

        //redstone nugget recipe removed
        'extendedcrafting:redstone_ingot_uncraft',

        //redstone smelting recipes removed
        'powder_power:redstone_from_powder',
        'minecraft:redstone_from_smelting',

        //router reborn recipes removed
        'routerreborn:craftonastick',

        //refined storage cell recipes removed
        'refinedstorage:1k_storage_disk_from_storage_housing',
        'refinedstorage:4k_storage_disk_from_storage_housing',
        'refinedstorage:16k_storage_disk_from_storage_housing',
        'refinedstorage:64k_storage_disk_from_storage_housing',
        'refinedstorage:64k_fluid_storage_disk_from_storage_housing',
        'refinedstorage:256k_fluid_storage_disk_from_storage_housing',
        'refinedstorage:1024k_fluid_storage_disk_from_storage_housing',
        'refinedstorage:4096k_fluid_storage_disk_from_storage_housing',

        //reactor casing removed
        'bigreactors:reactor/reinforced/casing_recycle_glass',
        'bigreactors:reactor/basic/casing_recycle_glass',
        'bigreactors:reactor/reinforced/casing',
        'bigreactors:reactor/reinforced/casing_recycle',
        'bigreactors:reactor/basic/casing_recycle',

        //rainbow ingot furance recipe removed
        'good_nights_sleep:rainbow_ingot_from_smelting',

        //soulium gemstone recipe removed
        'mysticalagriculture:soulium_gemstone',

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

        //storage drawers half drawers recipes removed
        'storagedrawers:dark_oak_half_drawers_4',
        'storagedrawers:dark_oak_half_drawers_2',
        'storagedrawers:dark_oak_half_drawers_1',
        'storagedrawers:acacia_half_drawers_4',
        'storagedrawers:acacia_half_drawers_2',
        'storagedrawers:acacia_half_drawers_1',
        'storagedrawers:jungle_half_drawers_4',
        'storagedrawers:jungle_half_drawers_2',
        'storagedrawers:jungle_half_drawers_1',
        'storagedrawers:birch_half_drawers_4',
        'storagedrawers:birch_half_drawers_2',
        'storagedrawers:birch_half_drawers_1',
        'storagedrawers:spruce_half_drawers_4',
        'storagedrawers:spruce_half_drawers_2',
        'storagedrawers:spruce_half_drawers_1',
        'storagedrawers:oak_half_drawers_4',
        'storagedrawers:oak_half_drawers_2',
        'storagedrawers:oak_half_drawers_1',

        //sulfur crafting removed
        'thermal:earth_charge/sulfur_dust_from_sulfur',

        //smithing removed
        'minecraft:netherite_pickaxe_smithing',
        'minecraft:netherite_boots_smithing',
        'minecraft:netherite_leggings_smithing',
        'minecraft:netherite_chestplate_smithing',
        'minecraft:netherite_sword_smithing',
        'minecraft:netherite_shovel_smithing',
        'minecraft:netherite_axe_smithing',
        'minecraft:netherite_hoe_smithing',
        'minecraft:netherite_helmet_smithing',

		//silver smelting recipes removed
		'alltheores:silver_ingot',
		'alltheores:smelting_dust/silver_ingot',
		'immersiveengineering:crafting/ingot_silver',
		'occultism:smelting/silver_ingot_from_dust',
	    'occultism:smelting/silver_ingot',

        //starmetal smelting recipe removed
        'astralsorcery:smelting/starmetal_ingot',

		//silver blasting recipes removed
		'alltheores:blasting_dust/silver_ingot',
		'occultism:blasting/silver_ingot',
	   	'occultism:blasting/silver_ingot_from_dust',

		//steel smelting recipes removed
		'mekanism:processing/steel/ingot/from_dust_smelting',

		//steel nugget recipes removed
		'mekanism:processing/steel/ingot/from_nuggets',

		//tin smelting recipes removed
		'alltheores:tin_ingot',
		'alltheores:smelting_dust/tin_ingot',
		'mekanism:processing/tin/ingot/from_ore_smelting',

		//turbine housing recipes removed
		'bigreactors:turbine/basic/casing_recycle_glass',
		'bigreactors:turbine/basic/casing_recycle',
		'bigreactors:turbine/reinforced/casing_recycle_glass',
		'bigreactors:turbine/reinforced/casing_recycle',
		'bigreactors:turbine/reinforced/casing',

		//tin blasting recipes removed
		'alltheores:blasting_dust/tin_ingot',

        //the ultimate catalyst recipe removed
        'extendedcrafting:the_ultimate_catalyst',

        //the ultimate ingot recipes removed
        'extendedcrafting:the_ultimate_ingot',
        'extendedcrafting:the_ultimate_ingot_recraft',
        'extendedcrafting:the_ultimate_ingot_block_uncraft',

        //the ultimate component recipe removed
        'extendedcrafting:the_ultimate_component',

        //the ultimate catalyst recipe removed
        'extendedcrafting:the_ultimate_catalyst',

        //the ultimate block recipe removed
        'extendedcrafting:the_ultimate_block',

        //the ultimate block to ingot recipe removed
        'extendedcrafting:the_ultimate_block_uncraft',

        //the ultimate ingot to nugget recipe removed
        'extendedcrafting:the_ultimate_ingot_uncraft',

        //tools removed
        'appliedenergistics2:tools/certus_quartz_axe',
        'appliedenergistics2:tools/certus_quartz_hoe',
        'appliedenergistics2:tools/certus_quartz_spade',
        'appliedenergistics2:tools/certus_quartz_pickaxe',
        'appliedenergistics2:tools/certus_quartz_sword',
        'appliedenergistics2:tools/nether_quartz_axe',
        'appliedenergistics2:tools/nether_quartz_hoe',
        'appliedenergistics2:tools/nether_quartz_spade',
        'appliedenergistics2:tools/nether_quartz_pickaxe',
        'appliedenergistics2:tools/nether_quartz_sword',

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

		//uranium smelting recipes removed
		'alltheores:uranium_ingot',
		'alltheores:smelting_dust/uranium_ingot',
		'mekanism:processing/uranium/ingot/from_ore_smelting',
		'immersiveengineering:crafting/ingot_uranium',

		//upgraded aqua recipes removed
		'upgrade_aquatic:trident',

		//uranium blasting recipes removed
		'alltheores:blasting_dust/uranium_ingot',

		//vinteum furnace recipe removed
		'mana-and-artifice:vinteum_dust',

		//wooden gear recipe removed
		'appliedenergistics2:misc/grindstone_woodengear',

		//woodenutilities recipes removed
		'woodenutilities:the_lumberjack_ring',
		'woodenutilities:the_lumberjack_ring',
		'woodenutilities:midas_touch_ring',

		//Woodcutter removed
		'druidcraft:Woodcutter',

		//zinc smelting recipes removed
		'alltheores:zinc_ingot',
		'alltheores:smelting_dust/zinc_ingot',
		'create:smelting/zinc_ingot_from_ore',

		//zinc blasting recipes removed
		'alltheores:blasting_dust/zinc_ingot'

    ];
    idRemove.forEach(iR => {
        p.remove({
            id: iR
        });
    });
});