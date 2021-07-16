//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//WORLDGEN MODIFICATION SCRIPT
//BY NEEPNOOP & ANOKKA / 2021
//

/*
This script will stop duplicated ores from spawning.
(Like having 30 million different copper ores spawning from different mods)
Ores from Emendatus Enigmatica will still spawn.
*/

events.listen('worldgen.remove', (event) => {

//VANILLA
	event.removeOres((ores) => {
		ores.blocks = ['minecraft:iron_ore', 'minecraft:gold_ore', 'minecraft:coal_ore', 'minecraft:nether_gold_ore', 'minecraft:nether_quartz_ore', 'minecraft:diamond_ore', 'minecraft:emerald_ore', 'minecraft:redstone_ore', 'minecraft:lapis_ore'];
	});

//COPPER
	event.removeOres((ores) => {
		ores.blocks = ['immersiveengineering:ore_copper', 'mekanism:copper_ore', 'create:copper_ore', 'thermal:copper_ore', 'tmechworks:copper_ore', 'mysticalworld:copper_ore', 'silents_mechanisms:copper_ore', 'tconstruct:copper_ore', 'occultism:copper_ore', 'iceandfire:copper_ore', 'routerreborn:copper_ore'];
	});

//ALUMINUM
	event.removeOres((ores) => {
		ores.blocks = ['tmechworks:aluminum_ore', 'immersiveengineering:ore_aluminum', 'silents_mechanisms:bauxite_ore', 'zycraft:aluminum_ore'];
	});

//SILVER
	event.removeOres((ores) => {
		ores.blocks = ['immersiveengineering:ore_silver', 'thermal:silver_ore', 'mysticalworld:silver_ore', 'silents_mechanisms:silver_ore', 'occultism:silver_ore', 'iceandfire:silver_ore'];
	});

//LEAD
	event.removeOres((ores) => {
		ores.blocks = ['immersiveengineering:ore_lead', 'mekanism:lead_ore', 'thermal:lead_ore', 'mysticalworld:lead_ore', 'silents_mechanisms:lead_ore', 'eidolon:lead_ore'];
	});

//NICKEL
	event.removeOres((ores) => {
		ores.blocks = ['immersiveengineering:ore_nickel', 'thermal:nickel_ore', 'silents_mechanisms:nickel_ore'];
	});

//URANIUM
	event.removeOres((ores) => {
		ores.blocks = ['immersiveengineering:ore_uranium', 'mekanism:uranium_ore', 'silents_mechanisms:uranium'];
	});

//OSMIUM
	event.removeOres((ores) => {
		ores.blocks = ['mekanism:osmium_ore'];
	});

//TIN
	event.removeOres((ores) => {
		ores.blocks = ['mekanism:tin_ore', 'thermal:tin_ore', 'mysticalworld:tin_ore', 'silents_mechanisms:tin_ore'];
	});

//ZINC
	event.removeOres((ores) => {
		ores.blocks = ['create:zinc_ore', 'silents_mechanisms:zin_ore'];
	});

//IRON
	event.removeOres((ores) => {
		ores.blocks = ['undergarden:iron_ore', 'atum:iron_ore'];
	});

//GOLD
	event.removeOres((ores) => {
		ores.blocks = ['undergarden:gold_ore'];
	});

//COBALT
	event.removeOres((ores) => {
		ores.blocks = ['tconstruct:cobalt_ore'];
	});

//CERTUS QUARTZ
	event.removeOres((ores) => {
		ores.blocks = ['appliedenergistics2:certus_quartz_ore'];
	});

//CHARGED CERTUS QUARTZ
	event.removeOres((ores) => {
		ores.blocks = ['appliedenergistics2:charged_certus_quartz_ore'];
	});

//FLUORITE
	event.removeOres((ores) => {
		ores.blocks = ['mekanism:fluorite_ore'];
	});

/*//BITUMEN
	event.removeOres((ores) => {
		ores.blocks = [''];
	});
*/
//CINNABAR
	event.removeOres((ores) => {
		ores.blocks = ['thermal:cinnabar_ore'];
	});

//APATITE
	event.removeOres((ores) => {
		ores.blocks = ['thermal:apatite_ore'];
	});

//SULFUR
	event.removeOres((ores) => {
		ores.blocks = ['thermal:sulfur_ore'];
	});

/*//POTASSIUM NITRATE
	event.removeOres((ores) => {
		ores.blocks = [''];
	});
*/
//MANA GEM
	event.removeOres((ores) => {
		ores.blocks = ['ars_nouveau:arcane_ore'];
	});

//DIMENSIONAL SHARD
//


//
//fin
//
});
