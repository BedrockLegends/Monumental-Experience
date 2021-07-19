onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'byg:pink_sandstone',
                outputs: [Item.of('byg:pink_sand')],
                processingTime: 150
            },
            {
                input: 'byg:purple_sandstone',
                outputs: [Item.of('byg:purple_sand')],
                processingTime: 150
            },
            {
                input: 'byg:blue_sandstone',
                outputs: [Item.of('byg:blue_sand')],
                processingTime: 150
            },
            {
                input: 'byg:white_sandstone',
                outputs: [Item.of('byg:white_sand')],
                processingTime: 150
            },
            {
                input: 'byg:black_sandstone',
                outputs: [Item.of('byg:black_sand')],
                processingTime: 150
            },
            {
                input: '#forge:end_stones',
                outputs: [Item.of('occultism:crushed_end_stone', 4)],
                processingTime: 150
            },
            {
                input: 'byg:quartzite_sand',
                outputs: ['minecraft:quartz'],
                processingTime: 50
            },
            {
                input: 'minecraft:ancient_debris',
                outputs: ['minecraft:netherite_scrap', Item.of('minecraft:ancient_debris', 1).withChance(0.66)],
                processingTime: 200
            },
            {
                input: 'minecraft:creeper_head',
                outputs: ['xreliquary:catalyzing_gland'],
                processingTime: 200
            },
            {
                input: 'minecraft:magma_block',
                outputs: ['xreliquary:molten_core'],
                processingTime: 200
            },
            {
                input: 'minecraft:magma_block',
                outputs: ['xreliquary:molten_core'],
                processingTime: 200
            },
            {
                input: 'minecraft:dragon_head',
                outputs: ['xreliquary:nebulous_heart'],
                processingTime: 200
            },
            {
                input: 'minecraft:skeleton_skull',
                outputs: ['xreliquary:rib_bone'],
                processingTime: 200
            },
            {
                input: '#quark:slime_blocks',
                outputs: ['xreliquary:slime_pearl'],
                processingTime: 200
            },
            {
                input: '#forge:dusts/redstone',
                outputs: ['psi:psidust'],
                processingTime: 200
            },
            {
                input: 'minecraft:red_sandstone',
                outputs: [Item.of('minecraft:red_sand', 1)],
                processingTime: 200
            },
            {
                input: '#forge:coal_coke',
                outputs: [Item.of('emendatusenigmatica:coke_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:storage_blocks/coal_coke',
                outputs: [Item.of('emendatusenigmatica:coke_dust', 9)],
                processingTime: 200
            },
            {
                input: 'forbidden_arcanus:arcane_crystal',
                outputs: [Item.of('forbidden_arcanus:arcane_crystal_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ingots/graphite',
                outputs: [Item.of('emendatusenigmatica:graphite_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ingots/cyanite',
                outputs: [Item.of('biggerreactors:cyanite_dust', 1)],
                processingTime: 200
            },
            {
                input: 'botania:pink_mystical_flower',
                outputs: [Item.of('minecraft:pink_dye', 2)],
                processingTime: 200
            },
            {
                input: 'botania:pink_shiny_flower',
                outputs: [Item.of('minecraft:pink_dye', 2)],
                processingTime: 200
            },
            {
                input: 'astralsorcery:starmetal',
                outputs: [Item.of('astralsorcery:stardust', 9)],
                processingTime: 250
            },
            {
                input: 'astralsorcery:starmetal_ingot',
                outputs: [Item.of('astralsorcery:stardust', 1)],
                processingTime: 250
            },
            {
                input: '#forge:ingots/netherite',
                outputs: [Item.of('mekanism:dust_netherite', 1)],
                processingTime: 400
            },
            {
                input: '#forge:ingots/graphite',
                outputs: [Item.of('biggerreactors:graphite_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ingots/aluminum',
                outputs: [Item.of('emendatusenigmatica:aluminum_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/coal',
                outputs: [Item.of('emendatusenigmatica:coal_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/copper',
                outputs: [Item.of('emendatusenigmatica:copper_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/gold',
                outputs: [Item.of('emendatusenigmatica:gold_dust', 1)],
                processingTime: 350
            },
            {
                input: '#forge:ingots/gold',
                outputs: [Item.of('emendatusenigmatica:gold_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/iron',
                outputs: [Item.of('emendatusenigmatica:iron_dust', 1)],
                processingTime: 350
            },
            {
                input: '#forge:ingots/iron',
                outputs: [Item.of('emendatusenigmatica:iron_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/lead',
                outputs: [Item.of('emendatusenigmatica:lead_dust', 1)],
                processingTime: 350
            },
            {
                input: '#forge:ingots/lead',
                outputs: [Item.of('emendatusenigmatica:lead_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/nickel',
                outputs: [Item.of('emendatusenigmatica:nickel_dust', 1)],
                processingTime: 350
            },
            {
                input: '#forge:ingots/nickel',
                outputs: [Item.of('emendatusenigmatica:nickel_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/osmium',
                outputs: [Item.of('emendatusenigmatica:osmium_dust', 1)],
                processingTime: 350
            },
            {
                input: '#forge:ingots/osmium',
                outputs: [Item.of('emendatusenigmatica:osmium_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/silver',
                outputs: [Item.of('emendatusenigmatica:silver_dust', 1)],
                processingTime: 350
            },
            {
                input: '#forge:ingots/silver',
                outputs: [Item.of('emendatusenigmatica:silver_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/tin',
                outputs: [Item.of('emendatusenigmatica:tin_dust', 1)],
                processingTime: 350
            },
            {
                input: '#forge:ingots/tin',
                outputs: [Item.of('emendatusenigmatica:tin_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/uranium',
                outputs: [Item.of('emendatusenigmatica:uranium_dust', 1)],
                processingTime: 350
            },
            {
                input: '#forge:ingots/uranium',
                outputs: [Item.of('emendatusenigmatica:uranium_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ores/zinc',
                outputs: [Item.of('emendatusenigmatica:zinc_dust', 1)],
                processingTime: 350
            },
            {
                input: 'mysticalagriculture:bat_seeds',
                outputs: [Item.of('mysticalagriculture:bat_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:cat_seeds',
                outputs: [Item.of('mysticalagriculture:cat_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:dolphin_seeds',
                outputs: [Item.of('mysticalagriculture:dolphin_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:drowned_seeds',
                outputs: [Item.of('mysticalagriculture:drowned_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:endermite_seeds',
                outputs: [Item.of('mysticalagriculture:endermite_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:evoker_seeds',
                outputs: [Item.of('mysticalagriculture:evoker_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:fox_seeds',
                outputs: [Item.of('mysticalagriculture:fox_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:glob_end_seeds',
                outputs: [Item.of('mysticalagriculture:glob_end_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:glob_nether_seeds',
                outputs: [Item.of('mysticalagriculture:glob_nether_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:glob_seeds',
                outputs: [Item.of('mysticalagriculture:glob_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:guardian_seeds',
                outputs: [Item.of('mysticalagriculture:guardian_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:horse_seeds',
                outputs: [Item.of('mysticalagriculture:horse_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:husk_seeds',
                outputs: [Item.of('mysticalagriculture:husk_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:llama_seeds',
                outputs: [Item.of('mysticalagriculture:llama_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:magma_cube_seeds',
                outputs: [Item.of('mysticalagriculture:magma_cube_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:mooshroom_seeds',
                outputs: [Item.of('mysticalagriculture:mooshroom_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:panda_seeds',
                outputs: [Item.of('mysticalagriculture:panda_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:parrot_seeds',
                outputs: [Item.of('mysticalagriculture:parrot_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:phantom_seeds',
                outputs: [Item.of('mysticalagriculture:phantom_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:pillager_seeds',
                outputs: [Item.of('mysticalagriculture:pillager_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:pink_slime_seeds',
                outputs: [Item.of('mysticalagriculture:pink_slime_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:plastic_seeds',
                outputs: [Item.of('mysticalagriculture:plastic_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:polar_bear_seeds',
                outputs: [Item.of('mysticalagriculture:polar_bear_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:ravager_seeds',
                outputs: [Item.of('mysticalagriculture:ravager_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:shulker_seeds',
                outputs: [Item.of('mysticalagriculture:shulker_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:silverfish_seeds',
                outputs: [Item.of('mysticalagriculture:silverfish_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:stray_seeds',
                outputs: [Item.of('mysticalagriculture:stray_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:vex_seeds',
                outputs: [Item.of('mysticalagriculture:vex_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:villager_seeds',
                outputs: [Item.of('mysticalagriculture:villager_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:vindicator_seeds',
                outputs: [Item.of('mysticalagriculture:vindicator_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:witch_seeds',
                outputs: [Item.of('mysticalagriculture:witch_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:wolf_seeds',
                outputs: [Item.of('mysticalagriculture:wolf_essence', 1)],
                processingTime: 200
            },



            {
                input: '#forge:ores/inferium',
                outputs: [Item.of('mysticalagriculture:inferium_essence', 2)],
                processingTime: 350
            },
            {
                input: '#forge:ores/prosperity',
                outputs: [Item.of('mysticalagriculture:prosperity_shard', 2)],
                processingTime: 350
            },
            {
                input: 'mysticalagriculture:air_seeds',
                outputs: [Item.of('mysticalagriculture:air_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:aluminum_seeds',
                outputs: [Item.of('mysticalagriculture:aluminum_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:aquamarine_seeds',
                outputs: [Item.of('mysticalagriculture:aquamarine_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:basalz_seeds',
                outputs: [Item.of('mysticalagriculture:basalz_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:bat_seeds',
                outputs: [Item.of('mysticalagriculture:bat_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:blaze_seeds',
                outputs: [Item.of('mysticalagriculture:blaze_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:blitz_seeds',
                outputs: [Item.of('mysticalagriculture:blitz_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:blizz_seeds',
                outputs: [Item.of('mysticalagriculture:blizz_seeds', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:brass_seeds',
                outputs: [Item.of('mysticalagriculture:brass_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:bronze_seeds',
                outputs: [Item.of('mysticalagriculture:bronze_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:cat_seeds',
                outputs: [Item.of('mysticalagriculture:cat_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:certus_quartz_seeds',
                outputs: [Item.of('mysticalagriculture:certus_quartz_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:chicken_seeds',
                outputs: [Item.of('mysticalagriculture:chicken_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:chrome_seeds',
                outputs: [Item.of('mysticalagriculture:chrome_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:coal_seeds',
                outputs: [Item.of('mysticalagriculture:coal_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:compressed_iron_seeds',
                outputs: [Item.of('mysticalagriculture:compressed_iron_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:constantan_seeds',
                outputs: [Item.of('mysticalagriculture:constantan_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:copper_seeds',
                outputs: [Item.of('mysticalagriculture:copper_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:coral_seeds',
                outputs: [Item.of('mysticalagriculture:coral_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:cow_seeds',
                outputs: [Item.of('mysticalagriculture:cow_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:creeper_seeds',
                outputs: [Item.of('mysticalagriculture:creeper_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:cyanite_seeds',
                outputs: [Item.of('mysticalagriculture:cyanite_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:diamond_seeds',
                outputs: [Item.of('mysticalagriculture:diamond_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:dirt_seeds',
                outputs: [Item.of('mysticalagriculture:dirt_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:dolphin_seeds',
                outputs: [Item.of('mysticalagriculture:dolphin_essence', 1)],
                processingTime: 200
            },
            {
                input: 'minecraft:dragon_egg',
                outputs: [Item.of('mysticalagriculture:dragon_egg_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:drowned_seeds',
                outputs: [Item.of('mysticalagriculture:drowned_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:dye_seeds',
                outputs: [Item.of('mysticalagriculture:dye_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:earth_seeds',
                outputs: [Item.of('mysticalagriculture:earth_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:electrum_seeds',
                outputs: [Item.of('mysticalagriculture:electrum_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:elementium_seeds',
                outputs: [Item.of('mysticalagriculture:elementium_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:emerald_seeds',
                outputs: [Item.of('mysticalagriculture:emerald_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:end_seeds',
                outputs: [Item.of('mysticalagriculture:end_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:ender_biotite_seeds',
                outputs: [Item.of('mysticalagriculture:ender_biotite_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:enderium_seeds',
                outputs: [Item.of('mysticalagriculture:enderium_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:enderman_seeds',
                outputs: [Item.of('mysticalagriculture:enderman_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:endermite_seeds',
                outputs: [Item.of('mysticalagriculture:endermite_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:evoker_seeds',
                outputs: [Item.of('mysticalagriculture:evoker_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:experience_seeds',
                outputs: [Item.of('mysticalagriculture:experience_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:fire_seeds',
                outputs: [Item.of('mysticalagriculture:fire_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:fish_seeds',
                outputs: [Item.of('mysticalagriculture:fish_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:fluix_seeds',
                outputs: [Item.of('mysticalagriculture:fluix_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:fox_seeds',
                outputs: [Item.of('mysticalagriculture:fox_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:ghast_seeds',
                outputs: [Item.of('mysticalagriculture:ghast_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:glowstone_seeds',
                outputs: [Item.of('mysticalagriculture:glowstone_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:gold_seeds',
                outputs: [Item.of('mysticalagriculture:gold_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:graphite_seeds',
                outputs: [Item.of('mysticalagriculture:graphite_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:guardian_seeds',
                outputs: [Item.of('mysticalagriculture:guardian_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:honey_seeds',
                outputs: [Item.of('mysticalagriculture:honey_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:hop_graphite_seeds',
                outputs: [Item.of('mysticalagriculture:hop_graphite_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:horse_seeds',
                outputs: [Item.of('mysticalagriculture:horse_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:husk_seeds',
                outputs: [Item.of('mysticalagriculture:husk_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:ice_seeds',
                outputs: [Item.of('mysticalagriculture:ice_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:invar_seeds',
                outputs: [Item.of('mysticalagriculture:invar_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:iridium_seeds',
                outputs: [Item.of('mysticalagriculture:iridium_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:iron_seeds',
                outputs: [Item.of('mysticalagriculture:iron_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:lapis_lazuli_seeds',
                outputs: [Item.of('mysticalagriculture:lapis_lazuli_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:lead_seeds',
                outputs: [Item.of('mysticalagriculture:lead_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:llama_seeds',
                outputs: [Item.of('mysticalagriculture:llama_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:lumium_seeds',
                outputs: [Item.of('mysticalagriculture:lumium_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:magma_cube_seeds',
                outputs: [Item.of('mysticalagriculture:magma_cube_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:manasteel_seeds',
                outputs: [Item.of('mysticalagriculture:manasteel_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:mithril_seeds',
                outputs: [Item.of('mysticalagriculture:mithril_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:mooshroom_seeds',
                outputs: [Item.of('mysticalagriculture:mooshroom_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:mystical_flower_seeds',
                outputs: [Item.of('mysticalagriculture:mystical_flower_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:nature_seeds',
                outputs: [Item.of('mysticalagriculture:nature_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:nether_quartz_seeds',
                outputs: [Item.of('mysticalagriculture:nether_quartz_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:nether_star_seeds',
                outputs: [Item.of('mysticalagriculture:nether_star_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:nether_seeds',
                outputs: [Item.of('mysticalagriculture:nether_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:netherite_seeds',
                outputs: [Item.of('mysticalagriculture:netherite_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:nickel_seeds',
                outputs: [Item.of('mysticalagriculture:nickel_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:obsidian_seeds',
                outputs: [Item.of('mysticalagriculture:obsidian_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:osmium_seeds',
                outputs: [Item.of('mysticalagriculture:osmium_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:panda_seeds',
                outputs: [Item.of('mysticalagriculture:panda_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:parrot_seeds',
                outputs: [Item.of('mysticalagriculture:parrot_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:phantom_seeds',
                outputs: [Item.of('mysticalagriculture:phantom_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:pig_seeds',
                outputs: [Item.of('mysticalagriculture:pig_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:pillager_seeds',
                outputs: [Item.of('mysticalagriculture:pillager_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:pink_slime_seeds',
                outputs: [Item.of('mysticalagriculture:pink_slime_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:plastic_seeds',
                outputs: [Item.of('mysticalagriculture:plastic_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:platinum_seeds',
                outputs: [Item.of('mysticalagriculture:platinum_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:polar_bear_seeds',
                outputs: [Item.of('mysticalagriculture:polar_bear_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:prismarine_seeds',
                outputs: [Item.of('mysticalagriculture:prismarine_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:quartz_enriched_iron_seeds',
                outputs: [Item.of('mysticalagriculture:quartz_enriched_iron_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:rabbit_seeds',
                outputs: [Item.of('mysticalagriculture:rabbit_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:ravager_seeds',
                outputs: [Item.of('mysticalagriculture:ravager_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:redstone_seeds',
                outputs: [Item.of('mysticalagriculture:redstone_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:refined_glowstone_seeds',
                outputs: [Item.of('mysticalagriculture:refined_glowstone_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:refined_obsidian_seeds',
                outputs: [Item.of('mysticalagriculture:refined_obsidian_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:rock_crystal_seeds',
                outputs: [Item.of('mysticalagriculture:rock_crystal_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:rubber_seeds',
                outputs: [Item.of('mysticalagriculture:rubber_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:saltpeter_seeds',
                outputs: [Item.of('mysticalagriculture:saltpeter_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:sheep_seeds',
                outputs: [Item.of('mysticalagriculture:sheep_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:shulker_seeds',
                outputs: [Item.of('mysticalagriculture:shulker_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:signalum_seeds',
                outputs: [Item.of('mysticalagriculture:signalum_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:silicon_seeds',
                outputs: [Item.of('mysticalagriculture:silicon_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:silver_seeds',
                outputs: [Item.of('mysticalagriculture:silver_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:silverfish_seeds',
                outputs: [Item.of('mysticalagriculture:silverfish_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:skeleton_seeds',
                outputs: [Item.of('mysticalagriculture:skeleton_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:slime_seeds',
                outputs: [Item.of('mysticalagriculture:slime_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:spider_seeds',
                outputs: [Item.of('mysticalagriculture:spider_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:squid_seeds',
                outputs: [Item.of('mysticalagriculture:squid_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:starmetal_seeds',
                outputs: [Item.of('mysticalagriculture:starmetal_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:steel_seeds',
                outputs: [Item.of('mysticalagriculture:steel_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:stone_seeds',
                outputs: [Item.of('mysticalagriculture:stone_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:stray_seeds',
                outputs: [Item.of('mysticalagriculture:stray_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:sulfur_seeds',
                outputs: [Item.of('mysticalagriculture:sulfur_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:terrasteel_seeds',
                outputs: [Item.of('mysticalagriculture:terrasteel_essence', 1)],
                processingTime: 200
            },





            {
                input: 'mysticalagriculture:tin_seeds',
                outputs: [Item.of('mysticalagriculture:tin_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:titanium_seeds',
                outputs: [Item.of('mysticalagriculture:titanium_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:tungsten_seeds',
                outputs: [Item.of('mysticalagriculture:tungsten_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:turtle_seeds',
                outputs: [Item.of('mysticalagriculture:turtle_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:uranium_seeds',
                outputs: [Item.of('mysticalagriculture:uranium_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:vex_seeds',
                outputs: [Item.of('mysticalagriculture:vex_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:villager_seeds',
                outputs: [Item.of('mysticalagriculture:villager_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:vindicator_seeds',
                outputs: [Item.of('mysticalagriculture:vindicator_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:water_seeds',
                outputs: [Item.of('mysticalagriculture:water_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:witch_seeds',
                outputs: [Item.of('mysticalagriculture:witch_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:wither_skeleton_seeds',
                outputs: [Item.of('mysticalagriculture:wither_skeleton_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:wolf_seeds',
                outputs: [Item.of('mysticalagriculture:wolf_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:wood_seeds',
                outputs: [Item.of('mysticalagriculture:wood_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:yellorium_seeds',
                outputs: [Item.of('mysticalagriculture:yellorium_essence', 1)],
                processingTime: 200
            },
            {
                input: 'mysticalagriculture:zinc_seeds',
                outputs: [Item.of('mysticalagriculture:zinc_essence', 1)],
                processingTime: 200
            },
            //Essence not found
            // {
            //     input: 'mysticalagriculture:zombie_pigman_seeds',
            //     outputs: [Item.of('mysticalagriculture:zombie_pigman_essence', 1)],
            //     processingTime: 200
            // },
            {
                input: 'mysticalagriculture:zombie_seeds',
                outputs: [Item.of('mysticalagriculture:zombie_essence', 1)],
                processingTime: 200
            },
            {
                input: '#forge:gems/apatite',
                outputs: [Item.of('thermal:apatite_dust', 1)],
                processingTime: 200
            },
            {
                input: 'thermal:blizz_rod',
                outputs: ['minecraft:snowball', Item.of('thermal:blizz_powder', 1)],
                processingTime: 200
            },
            {
                input: '#forge:gems/cinnabar',
                outputs: [Item.of('thermal:cinnabar_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ender_pearls',
                outputs: [Item.of('thermal:ender_pearl_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:gems/niter',
                outputs: [Item.of('thermal:niter_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:gems/sulfur',
                outputs: [Item.of('thermal:sulfur_dust', 1)],
                processingTime: 200
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.milling(recipe.outputs, recipe.input).processingTime(recipe.processingTime);
    });
});
