//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//ORE DROP LOOT TABLE SCRIPT
//BY ANOKKA & NEEPNOOP / 2021
//
//Makes vanilla and modded ores drop Emendatus Enigmatica chunks and clusters
//

onEvent('block.loot_tables', event => {
	
//
//
//-----OVERWORLD-----
//
//
	//COAL
	event.addSimpleBlock('#forge:ores/coal', 'emendatusenigmatica:coal_chunk')
	//IRON
	event.addSimpleBlock('#forge:ores/iron', 'emendatusenigmatica:iron_chunk')
	//GOLD
	event.addSimpleBlock('#forge:ores/gold', 'emendatusenigmatica:gold_chunk')
	//DIAMOND
	event.addSimpleBlock('#forge:ores/diamond', 'emendatusenigmatica:diamond_chunk')
	//EMERALD
	event.addSimpleBlock('#forge:ores/emerald', 'emendatusenigmatica:emerald_chunk')
	//LAPIS LAZULI
	event.addSimpleBlock('#forge:ores/lapis', 'emendatusenigmatica:lapis_chunk')
	//REDSTONE
	event.addSimpleBlock('#forge:ores/redstone', 'emendatusenigmatica:redstone_chunk')
	//COPPER
	event.addSimpleBlock('#forge:ores/copper', 'emendatusenigmatica:copper_chunk')
	//ALUMINUM
	event.addSimpleBlock('#forge:ores/aluminum', 'emendatusenigmatica:aluminum_chunk')
	//SILVER
	event.addSimpleBlock('#forge:ores/silver', 'emendatusenigmatica:silver_chunk')
	//LEAD
	event.addSimpleBlock('#forge:ores/lead', 'emendatusenigmatica:lead_chunk')
	//NICKEL
	event.addSimpleBlock('#forge:ores/nickel', 'emendatusenigmatica:nickel_chunk')
	//URANIUM
	event.addSimpleBlock('#forge:ores/uranium', 'emendatusenigmatica:uranium_chunk')
	//OSMIUM
	event.addSimpleBlock('#forge:ores/osmium', 'emendatusenigmatica:osmium_chunk')
	//TIN
	event.addSimpleBlock('#forge:ores/tin', 'emendatusenigmatica:tin_chunk')
	//ZINC
	event.addSimpleBlock('#forge:ores/zinc', 'emendatusenigmatica:zinc_chunk')
	//CERTUS QUARTZ
	event.addSimpleBlock('#forge:ores/certus_quartz', 'emendatusenigmatica:certus_quartz_chunk')
	//CHARGED CERTUZ QUARTZ
	event.addSimpleBlock('#forge:ores/charged_certus_quartz', 'emendatusenigmatica:charged_certus_quartz_chunk')
	//FLUORITE
	event.addSimpleBlock('#forge:ores/fluorite', 'emendatusenigmatica:fluorite_chunk')
	//CINNABAR
	event.addSimpleBlock('#forge:ores/cinnabar', 'emendatusenigmatica:cinnabar_chunk')
	//APATITE
	event.addSimpleBlock('#forge:ores/apatite', 'emendatusenigmatica:apatite_chunk')
	//SULFUR
	event.addSimpleBlock('#forge:ores/sulfur', 'emendatusenigmatica:sulfur_chunk')
	//POTASSIUM NITRATE
	event.addSimpleBlock('#forge:ores/potassium_nitrate', 'emendatusenigmatica:potassium_nitrate_chunk')
//
//
//-----NETHER ORES-----
//
//
	//COAL
	event.addBlock('emendatusenigmatica:coal_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:coal_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:coal_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:coal_chunk'})
			})
		})
	//IRON
	event.addBlock('emendatusenigmatica:iron_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:iron_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
			})
		})
	//GOLD
	event.addBlock('emendatusenigmatica:gold_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:gold_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:gold_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:gold_chunk'})
			})
		})
		//DIAMOND
	event.addBlock('emendatusenigmatica:diamond_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:diamond_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:diamond_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:diamond_chunk'})
			})
		})
			//EMERALD
	event.addBlock('emendatusenigmatica:emerald_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:emerald_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:coal_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:emerald_chunk'})
			})
		})
			//LAPIS LAZULI
	event.addBlock('emendatusenigmatica:lapis_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lapis_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:lapis_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lapis_chunk'})
			})
		})
			//REDSTONE
	event.addBlock('emendatusenigmatica:redstone_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:redstone_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:redstone_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:redstone_chunk'})
			})
		})
			//NETHER QUARTZ
	event.addBlock('emendatusenigmatica:quartz_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:quartz_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:quartz_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:quartz_chunk'})
			})
		})
	//COPPER
	event.addBlock('emendatusenigmatica:copper_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:copper_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:copper_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:copper_chunk'})
			})
		})
	//ALUMINUM
	event.addBlock('emendatusenigmatica:aluminum_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:aluminum_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:aluminum_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:aluminum_chunk'})
			})
		})
	//SILVER
	event.addBlock('emendatusenigmatica:silver_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:silver_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:silver_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:silver_chunk'})
			})
		})
	//LEAD
	event.addBlock('emendatusenigmatica:lead_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lead_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:lead_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lead_chunk'})
			})
		})
	//NICKEL
	event.addBlock('emendatusenigmatica:nickel_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:nickel_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:nickel_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:nickel_chunk'})
			})
		})
	//URANIUM
	event.addBlock('emendatusenigmatica:uranium_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:uranium_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:uranium_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:uranium_chunk'})
			})
		})
	//OSMIUM
	event.addBlock('emendatusenigmatica:osmium_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:osmium_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:osmium_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:osmium_chunk'})
			})
		})
	//TIN
	event.addBlock('emendatusenigmatica:tin_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:tin_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:tin_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:tin_chunk'})
			})
		})
	//ZINC
	event.addBlock('emendatusenigmatica:zinc_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:zinc_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:zinc_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:zinc_chunk'})
			})
		})
    //COBALT
	event.addBlock('#forge:ores/cobalt', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cobalt_chunk'})
			}) 
		})
	//CERTUZ QUARTZ
	event.addBlock('emendatusenigmatica:certus_quartz_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:certus_quartz_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:certus_quartz_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:certus_quartz_chunk'})
			})
		})
	//CHARGED CERTUS QUARTZ
	event.addBlock('emendatusenigmatica:charged_certus_quartz_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:charged_certus_quartz_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:charged_certus_quartz_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:charged_certus_quartz_chunk'})
			})
		})
	//FLUORITE
	event.addBlock('emendatusenigmatica:fluorite_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:fluorite_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:fluorite_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:fluorite_chunk'})
			})
		})
	//CINNABAR
	event.addBlock('emendatusenigmatica:cinnabar_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cinnabar_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:cinnabar_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cinnabar_chunk'})
			})
		})
	//APATITE
	event.addBlock('emendatusenigmatica:apatite_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:apatite_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:apatite_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:apatite_chunk'})
			})
		})
	//SULFUR
	event.addBlock('emendatusenigmatica:sulfur_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:sulfur_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:sulfur_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:sulfur_chunk'})
			})
		})
	//POTASSIUM NITRATE
	event.addBlock('emendatusenigmatica:potassium_nitrate_netherrack_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:potassium_nitrate_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:potassium_nitrate_soul_soil_ore', table => {
		table.pool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:potassium_nitrate_chunk'})
			})
		})
//
//
//-----END ORES-----
//
//
	//COAL
	event.addSimpleBlock('emendatusenigmatica:coal_end_stone_ore', 'emendatusenigmatica:coal_cluster')
	//IRON
	event.addSimpleBlock('emendatusenigmatica:iron_end_stone_ore', 'emendatusenigmatica:iron_cluster')
	//GOLD
	event.addSimpleBlock('emendatusenigmatica:gold_end_stone_ore', 'emendatusenigmatica:gold_cluster')
	//DIAMOND
	event.addSimpleBlock('emendatusenigmatica:diamond_end_stone_ore', 'emendatusenigmatica:diamond_cluster')
	//EMERALD
	event.addSimpleBlock('emendatusenigmatica:emerald_end_stone_ore', 'emendatusenigmatica:emerald_cluster')
	//LAPIS
	event.addSimpleBlock('emendatusenigmatica:lapis_end_stone_ore', 'emendatusenigmatica:lapis_cluster')
	//REDSTONE
	event.addSimpleBlock('emendatusenigmatica:redstone_end_stone_ore', 'emendatusenigmatica:redstone_cluster')
	//COPPER
	event.addSimpleBlock('emendatusenigmatica:copper_end_stone_ore', 'emendatusenigmatica:copper_cluster')
	//ALUMINUM
	event.addSimpleBlock('emendatusenigmatica:aluminum_end_stone_ore', 'emendatusenigmatica:aluminum_cluster')
	//SILVER
	event.addSimpleBlock('emendatusenigmatica:silver_end_stone_ore', 'emendatusenigmatica:silver_cluster')
	//LEAD
	event.addSimpleBlock('emendatusenigmatica:lead_end_stone_ore', 'emendatusenigmatica:lead_cluster')
	//NICKEL
	event.addSimpleBlock('emendatusenigmatica:nickel_end_stone_ore', 'emendatusenigmatica:nickel_cluster')
	//URANIUM
	event.addSimpleBlock('emendatusenigmatica:uranium_end_stone_ore', 'emendatusenigmatica:uranium_cluster')
	//OSMIUM
	event.addSimpleBlock('emendatusenigmatica:osmium_end_stone_ore', 'emendatusenigmatica:osmium_cluster')
	//TIN
	event.addSimpleBlock('emendatusenigmatica:tin_end_stone_ore', 'emendatusenigmatica:tin_cluster')
	//ZINC
	event.addSimpleBlock('emendatusenigmatica:zinc_end_stone_ore', 'emendatusenigmatica:zinc_cluster')
	//CERTUS QUARTZ
	event.addSimpleBlock('emendatusenigmatica:certus_quartz_end_stone_ore', 'emendatusenigmatica:certus_quartz_cluster')
	//CHARGED CERTUS QUARTZ
	event.addSimpleBlock('emendatusenigmatica:charged_certus_quartz_end_stone_ore', 'emendatusenigmatica:charged_certus_quartz_cluster')
	//FLUORITE
	event.addSimpleBlock('emendatusenigmatica:fluorite_end_stone_ore', 'emendatusenigmatica:fluorite_cluster')
	//CINNABAR
	event.addSimpleBlock('emendatusenigmatica:cinnabar_end_stone_ore', 'emendatusenigmatica:cinnabar_cluster')
	//APATITE
	event.addSimpleBlock('emendatusenigmatica:apatite_end_stone_ore', 'emendatusenigmatica:apatite_cluster')
	//SULFUR
	event.addSimpleBlock('emendatusenigmatica:sulfur_end_stone_ore', 'emendatusenigmatica:sulfur_cluster')
	//POTASSIUM NITRATE
	event.addSimpleBlock('emendatusenigmatica:sulfur_end_stone_ore', 'emendatusenigmatica:sulfur_cluster')
//
//fin
//
})