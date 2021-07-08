events.listen('recipes', (event) => {
    var data = {
        recipes_unheated: [
            {
                inputs: [
                    '#forge:clay',
                    '#forge:gravel',
                    '#forge:sand',
                    '#forge:sand',
                    Fluid.of('minecraft:water', 500)
                ],
                output: Fluid.of('immersiveengineering:concrete', 500)
            },
            {
                inputs: [
                    '#forge:clay',
                    '#forge:gravel',
                    '#forge:slag',
                    '#forge:slag',
                    Fluid.of('minecraft:water', 750)
                ],
                output: Fluid.of('immersiveengineering:concrete', 750)
            },
            {
                inputs: [
                    '#forge:gems/bitumen',
                    '#forge:gravel',
                    '#forge:sand',
                    '#forge:sand',
                    Fluid.of('minecraft:water', 500)
                ],
                output: Item.of('immersivepetroleum:asphalt', 12)
            },
            {
                inputs: [
                    'mana-and-artifice:vinteum_dust',
                    'mana-and-artifice:arcane_ash',
                    '#mana-and-artifice:ma_flowers'
                ],
                output: Item.of('mana-and-artifice:purified_vinteum_dust', 2)
            },
            {
                inputs: [
                    'mana-and-artifice:vinteum_dust',
                    'mana-and-artifice:bone_ash',
                    '#mana-and-artifice:ma_flowers'
                ],
                output: Item.of('mana-and-artifice:arcane_compound', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:soulium_dust',
                    'mysticalagriculture:soulium_dust',
                    'mysticalagriculture:soulium_dust'
                ],
                output: Item.of('mysticalagriculture:soulium_gemstone', 1)
            }
        ],
        recipes_heated: [
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/lead'],
                output: Item.of('eidolon:pewter_ingot', 2)
            },
            {
                inputs: ['thermal:obsidian_glass', '#forge:dusts/quartz', '#forge:dusts/certus_quartz', 'computercraft:cable'],
                output: Item.of('appliedenergistics2:quartz_fiber', 2)
            },
            {
                inputs: ['#forge:ender_pearls', '#forge:dusts/blaze'],
                output: Item.of('minecraft:ender_eye', 1)
            },
            {
                inputs: [
                    Fluid.of('industrialforegoing:latex_fluid', 100),
                    '#forge:slimeballs'
                ],
                output: Item.of('thermal:rubber', 1)
            },
            {
                inputs: ['#forge:ingots/iron', 'tconstruct:blood_slime_ball', 'minecraft:clay_ball'],
                output: Item.of('tconstruct:pig_iron_ingot', 2)
            },
            {
                inputs: ['#forge:dyes/green', '#forge:dusts/iron', '#forge:sand'],
                output: Item.of('immersiveengineering:insulating_glass', 2)
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:glass'],
                output: Item.of('tconstruct:tinkers_bronze_ingot', 4)
            },
            {
                inputs: ['#forge:ingots/iron', 'tconstruct:sky_slime_ball', 'tconstruct:seared_brick'],
                output: Item.of('tconstruct:slimesteel_ingot', 2)
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:dusts/ender'],
                output: Item.of('betterendforge:terminite_ingot', 1)
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/gold'],
                output: Item.of('tconstruct:rose_gold_ingot', 4)
            },
            {
                inputs: [
                    '#forge:gems/quartz',
                    '#forge:dusts/redstone'
                ],
                output: Item.of('create:rose_quartz', 1)
            },
            {
                inputs: [
                    '#minecraft:planks',
                    { fluidTag: 'forge:creosote', amount: 125 }
                ],
                output: Item.of('immersiveengineering:treated_wood_horizontal', 4)
            },
            {
                inputs: [
                    '#forge:gems/bitumen',
                    '#forge:gravel',
                    '#forge:slag',
                    '#forge:slag',
                    Fluid.of('minecraft:water', 500)
                ],
                output: Item.of('immersivepetroleum:asphalt', 16)
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:bulbis_sprouts'],
                output: Item.of('byg:bulbis_phycelium')
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:imparius_vine'],
                output: Item.of('byg:imparius_phylium')
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:shulkren_moss_blanket'],
                output: Item.of('byg:shulkren_phylium')
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:nightshade_sprouts'],
                output: Item.of('byg:nightshade_phylium')
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:ivis_sprout'],
                output: Item.of('byg:ivis_phylium')
            },
            {
                inputs: ['byg:ether_soil', 'minecraft:bone_meal', 'byg:ether_foliage'],
                output: Item.of('byg:ether_phylium')
            },
            {
                inputs: ['minecraft:dirt', 'minecraft:bone_meal', 'byg:ether_foliage'],
                output: Item.of('byg:ether_soil')
            },
            {
                inputs: ['byg:ether_stone', 'minecraft:bone_meal', 'byg:vermilion_sculk_growth'],
                output: Item.of('byg:vermilion_sculk')
            },
            {
                inputs: [
                    '#forge:charcoal',
                    '#forge:dusts/iron'
                ],
                output: Item.of('emendatusenigmatica:steel_ingot', 1)
            },
            {
                inputs: [
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:insanium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:inferium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    '#minecraft:coals'
                ],
                output: Item.of('mysticalagradditions:insanium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    '#minecraft:coals'
                ],
                output: Item.of('mysticalagradditions:inferium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagradditions:insanium_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:inferium_gemstone', 1)
            },
            {
                inputs: [
                    'thermal:obsidian_glass',
                    '#forge:dusts/certus_quartz',
                    '#forge:dusts/quartz'
                ],
                output: Item.of('appliedenergistics2:quartz_glass', 2)
            },
            {
                inputs: [
                    '#forge:ingots/refined_glowstone',
                    'appliedenergistics2:quartz_glass'
                ],
                output: Item.of('appliedenergistics2:quartz_vibrant_glass', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:imperium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'minecraft:coal'
                ],
                output: Item.of('mysticalagradditions:imperium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:imperium_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prosperity_shard',
                    'mysticalagriculture:prosperity_shard',
                    '#forge:gems/diamond'
                ],
                output: Item.of('mysticalagriculture:prosperity_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:prudentium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'minecraft:coal'
                ],
                output: Item.of('mysticalagradditions:prudentium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'minecraft:coal'
                ],
                output: Item.of('mysticalagradditions:supremium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:supremium_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:tertium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'minecraft:coal'
                ],
                output: Item.of('mysticalagradditions:tertium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:tertium_gemstone', 1)
            }
        ],
        recipes_superheated: [
            {
                inputs: [
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:inferium_ingot',
                    'mysticalagriculture:inferium_ingot',
                    'mysticalagriculture:inferium_ingot',
                    'mysticalagriculture:inferium_ingot',
                    'mysticalagriculture:watering_can'
                ],
                output: Item.of('mysticalagriculture:inferium_watering_can', 1)
            },            {
                inputs: [
                    '#forge:ingots/netherite_scrap',
                    '#forge:netherrack',
                    '#forge:netherrack',
                    '#forge:soul_sand',
                    '#forge:ingots/compressed_iron'
                ],
                output: Item.of('woot:si_ingot', 1)
            },
            {
                inputs: [
                    '#forge:ingots/netherite_scrap',
                    '#forge:ingots/netherite_scrap',
                    '#forge:ingots/netherite_scrap',
                    '#forge:ingots/netherite_scrap',
                    '#forge:ingots/gold',
                    '#forge:ingots/gold',
                    '#forge:ingots/gold'
                ],
                output: Item.of('minecraft:netherite_ingot', 1)
            },
            {
                inputs: [
                    'mana-and-artifice:superheated_purified_vinteum_ingot',
                    'astralsorcery:starmetal_ingot',
                    'doom:argent_energy',
                    'gobber2:gobber2_glob'
                ],
                output: Item.of('gobber2:gobber2_ingot', 2)
            },
            {
                inputs: [
                    'gobber2:gobber2_glob_end',
                    'gobber2:gobber2_ingot_nether',
                    'gobber2:gobber2_ingot_nether',
                    'minecraft:chorus_flower'
                ],
                output: Item.of('gobber2:gobber2_ingot_end', 2)
            },
            {
                inputs: [
                    'gobber2:gobber2_glob_nether',
                    'gobber2:gobber2_ingot',
                    'gobber2:gobber2_ingot',
                    '#forge:ingots/netherite_scrap'
                ],
                output: Item.of('gobber2:gobber2_ingot_nether', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    '#forge:hoes',
                    '#forge:dirt'
                ],
                output: Item.of('mysticalagriculture:inferium_farmland', 2)
            },
            {
                inputs: [
                    'thermal:obsidian_glass',
                    'thermal:obsidian_glass',
                    '#forge:ingots/enderium'
                ],
                output: Item.of('thermal:enderium_glass', 2)
            },
            {
                inputs: [
                    'thermal:obsidian_glass',
                    'thermal:obsidian_glass',
                    '#forge:ingots/lumium'
                ],
                output: Item.of('thermal:lumium_glass', 2)
            },
            {
                inputs: [
                    'thermal:obsidian_glass',
                    'thermal:obsidian_glass',
                    '#forge:ingots/signalum'
                ],
                output: Item.of('thermal:signalum_glass', 2)
            },
            {
                inputs: [
                    'immersiveengineering:insulating_glass',
                    'create:polished_rose_quartz',
                    '#forge:ingots/obsidian'
                ],
                output: Item.of('thermal:obsidian_glass', 1)
            },
            {
                inputs: [
                    'mysticalagradditions:insanium_essence',
                    '#forge:hoes',
                    '#forge:dirt'
                ],
                output: Item.of('mysticalagradditions:insanium_farmland', 2)
            },
            {
                inputs: [
                    '#forge:dusts/certus_quartz',
                    '#forge:dusts/quartz'
                ],
                output: Item.of('emendatusenigmatica:silicon_gem', 2)
            },
            {
                inputs: [
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron'
                ],
                output: Item.of('minecraft:iron_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/steel',
                    '#forge:nuggets/steel',
                    '#forge:nuggets/steel',
                    '#forge:nuggets/steel',
                    '#forge:nuggets/steel',
                    '#forge:nuggets/steel',
                    '#forge:nuggets/steel',
                    '#forge:nuggets/steel',
                    '#forge:nuggets/steel'
                ],
                output: Item.of('emendatusenigmatica:steel_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold'
                ],
                output: Item.of('minecraft:gold_ingot', 3)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget'
                ],
                output: Item.of('extendedcrafting:black_iron_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/manasteel',
                    '#forge:nuggets/manasteel',
                    '#forge:nuggets/manasteel',
                    '#forge:nuggets/manasteel',
                    '#forge:nuggets/manasteel',
                    '#forge:nuggets/manasteel',
                    '#forge:nuggets/manasteel',
                    '#forge:nuggets/manasteel',
                    '#forge:nuggets/manasteel'
                ],
                output: Item.of('botania:manasteel_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/terrasteel',
                    '#forge:nuggets/terrasteel',
                    '#forge:nuggets/terrasteel',
                    '#forge:nuggets/terrasteel',
                    '#forge:nuggets/terrasteel',
                    '#forge:nuggets/terrasteel',
                    '#forge:nuggets/terrasteel',
                    '#forge:nuggets/terrasteel',
                    '#forge:nuggets/terrasteel'
                ],
                output: Item.of('botania:terrasteel_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/elementium',
                    '#forge:nuggets/elementium',
                    '#forge:nuggets/elementium',
                    '#forge:nuggets/elementium',
                    '#forge:nuggets/elementium',
                    '#forge:nuggets/elementium',
                    '#forge:nuggets/elementium',
                    '#forge:nuggets/elementium',
                    '#forge:nuggets/elementium'
                ],
                output: Item.of('botania:elementium_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget'
                ],
                output: Item.of('mysticalagradditions:insanium_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget'
                ],
                output: Item.of('mysticalagriculture:inferium_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/bronze',
                    '#forge:nuggets/bronze',
                    '#forge:nuggets/bronze',
                    '#forge:nuggets/bronze',
                    '#forge:nuggets/bronze',
                    '#forge:nuggets/bronze',
                    '#forge:nuggets/bronze',
                    '#forge:nuggets/bronze',
                    '#forge:nuggets/bronze'
                ],
                output: Item.of('emendatusenigmatica:bronze_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/copper',
                    '#forge:nuggets/copper',
                    '#forge:nuggets/copper',
                    '#forge:nuggets/copper',
                    '#forge:nuggets/copper',
                    '#forge:nuggets/copper',
                    '#forge:nuggets/copper',
                    '#forge:nuggets/copper',
                    '#forge:nuggets/copper'
                ],
                output: Item.of('emendatusenigmatica:copper_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/lead',
                    '#forge:nuggets/lead',
                    '#forge:nuggets/lead',
                    '#forge:nuggets/lead',
                    '#forge:nuggets/lead',
                    '#forge:nuggets/lead',
                    '#forge:nuggets/lead',
                    '#forge:nuggets/lead',
                    '#forge:nuggets/lead'
                ],
                output: Item.of('emendatusenigmatica:lead_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/nickel',
                    '#forge:nuggets/nickel',
                    '#forge:nuggets/nickel',
                    '#forge:nuggets/nickel',
                    '#forge:nuggets/nickel',
                    '#forge:nuggets/nickel',
                    '#forge:nuggets/nickel',
                    '#forge:nuggets/nickel',
                    '#forge:nuggets/nickel'
                ],
                output: Item.of('emendatusenigmatica:nickel_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/osmium',
                    '#forge:nuggets/osmium',
                    '#forge:nuggets/osmium',
                    '#forge:nuggets/osmium',
                    '#forge:nuggets/osmium',
                    '#forge:nuggets/osmium',
                    '#forge:nuggets/osmium',
                    '#forge:nuggets/osmium',
                    '#forge:nuggets/osmium'
                ],
                output: Item.of('emendatusenigmatica:osmium_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/silver',
                    '#forge:nuggets/silver',
                    '#forge:nuggets/silver',
                    '#forge:nuggets/silver',
                    '#forge:nuggets/silver',
                    '#forge:nuggets/silver',
                    '#forge:nuggets/silver',
                    '#forge:nuggets/silver',
                    '#forge:nuggets/silver'
                ],
                output: Item.of('emendatusenigmatica:silver_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/tin',
                    '#forge:nuggets/tin',
                    '#forge:nuggets/tin',
                    '#forge:nuggets/tin',
                    '#forge:nuggets/tin',
                    '#forge:nuggets/tin',
                    '#forge:nuggets/tin',
                    '#forge:nuggets/tin',
                    '#forge:nuggets/tin'
                ],
                output: Item.of('emendatusenigmatica:tin_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/uranium',
                    '#forge:nuggets/uranium',
                    '#forge:nuggets/uranium',
                    '#forge:nuggets/uranium',
                    '#forge:nuggets/uranium',
                    '#forge:nuggets/uranium',
                    '#forge:nuggets/uranium',
                    '#forge:nuggets/uranium',
                    '#forge:nuggets/uranium'
                ],
                output: Item.of('emendatusenigmatica:uranium_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/zinc',
                    '#forge:nuggets/zinc',
                    '#forge:nuggets/zinc',
                    '#forge:nuggets/zinc',
                    '#forge:nuggets/zinc',
                    '#forge:nuggets/zinc',
                    '#forge:nuggets/zinc',
                    '#forge:nuggets/zinc',
                    '#forge:nuggets/zinc'
                ],
                output: Item.of('emendatusenigmatica:zinc_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/refined_glowstone',
                    '#forge:nuggets/refined_glowstone',
                    '#forge:nuggets/refined_glowstone',
                    '#forge:nuggets/refined_glowstone',
                    '#forge:nuggets/refined_glowstone',
                    '#forge:nuggets/refined_glowstone',
                    '#forge:nuggets/refined_glowstone',
                    '#forge:nuggets/refined_glowstone',
                    '#forge:nuggets/refined_glowstone'
                ],
                output: Item.of('mekanism:ingot_refined_glowstone', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/refined_obsidian',
                    '#forge:nuggets/refined_obsidian',
                    '#forge:nuggets/refined_obsidian',
                    '#forge:nuggets/refined_obsidian',
                    '#forge:nuggets/refined_obsidian',
                    '#forge:nuggets/refined_obsidian',
                    '#forge:nuggets/refined_obsidian',
                    '#forge:nuggets/refined_obsidian',
                    '#forge:nuggets/refined_obsidian'
                ],
                output: Item.of('mekanism:ingot_refined_obsidian', 3)
            },
            {
                inputs: [
                    'mana-and-artifice:vinteum_ingot',
                    'mana-and-artifice:purified_vinteum_dust'
                ],
                output: Item.of('mana-and-artifice:purified_vinteum_ingot', 1)
            },
            {
                inputs: [
                    'mana-and-artifice:vinteum_dust',
                    'astralsorcery:starmetal_ingot',
                    'mana-and-artifice:vinteum_dust'
                ],
                output: Item.of('mana-and-artifice:vinteum_ingot', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    '#mysticalagriculture:infusion_crystals'
                ],
                output: Item.of('mysticalagradditions:insanium_essence', 2)
            },
            {
                inputs: [
                    '#forge:gems/silicon',
                    '#forge:gems/silicon',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('refinedstorage:quartz_enriched_iron', 4)
            },
            {
                inputs: [
                    '#forge:dusts/lapis',
                    '#forge:sand',
                    '#forge:clay'
                ],
                output: Item.of('buildinggadgets:construction_block_powder', 1)
            },
            {
                inputs: [
                    'create:polished_rose_quartz',
                    '#forge:dusts/emerald',
                    'minecraft:ender_eye'
                ],
                output: Item.of('envirocore:litherite_crystal', 4)
            },
            {
                inputs: ['#chipped:end_stone', '#forge:fertilizer', 'byg:bulbis_sprouts'],
                output: Item.of('byg:bulbis_phycelium')
            },
            {
                inputs: ['#chipped:end_stone', '#forge:fertilizer', 'byg:imparius_vine'],
                output: Item.of('byg:imparius_phylium')
            },
            {
                inputs: ['#chipped:end_stone', '#forge:fertilizer', 'byg:shulkren_moss_blanket'],
                output: Item.of('byg:shulkren_phylium')
            },
            {
                inputs: ['#chipped:end_stone', '#forge:fertilizer', 'byg:nightshade_sprouts'],
                output: Item.of('byg:nightshade_phylium')
            },
            {
                inputs: ['#chipped:end_stone', '#forge:fertilizer', 'byg:ivis_sprout'],
                output: Item.of('byg:ivis_phylium')
            },
            {
                inputs: ['byg:ether_soil', '#forge:fertilizer', 'byg:ether_foliage'],
                output: Item.of('byg:ether_phylium')
            },
            {
                inputs: ['#forge:dirt', '#forge:fertilizer', 'byg:ether_foliage'],
                output: Item.of('byg:ether_soil')
            },
            {
                inputs: ['byg:ether_stone', '#forge:fertilizer', 'byg:vermilion_sculk_growth'],
                output: Item.of('byg:vermilion_sculk')
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    '#mysticalagriculture:infusion_crystals'
                ],
                output: Item.of('mysticalagriculture:imperium_essence', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    '#forge:hoes',
                    'minecraft:dirt'
                ],
                output: Item.of('mysticalagriculture:imperium_farmland', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:tertium_watering_can'
                ],
                output: Item.of('mysticalagriculture:imperium_watering_can', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot'
                ],
                output: Item.of('mysticalagriculture:imperium_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget'
                ],
                output: Item.of('mysticalagriculture:prosperity_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    '#mysticalagriculture:infusion_crystals'
                ],
                output: Item.of('mysticalagriculture:prudentium_essence', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    '#forge:hoes',
                    'minecraft:dirt'
                ],
                output: Item.of('mysticalagriculture:prudentium_farmland', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:prudentium_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:prudentium_ingot',
                    'mysticalagriculture:prudentium_ingot',
                    'mysticalagriculture:prudentium_ingot',
                    'mysticalagriculture:prudentium_ingot',
                    'mysticalagriculture:inferium_watering_can'
                ],
                output: Item.of('mysticalagriculture:prudentium_watering_can', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget'
                ],
                output: Item.of('mysticalagriculture:prudentium_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:supremium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    '#mysticalagriculture:infusion_crystals'
                ],
                output: Item.of('mysticalagriculture:supremium_essence', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    '#forge:hoes',
                    'minecraft:dirt'
                ],
                output: Item.of('mysticalagriculture:supremium_farmland', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:supremium_ingot',
                    'mysticalagriculture:supremium_ingot',
                    'mysticalagriculture:supremium_ingot',
                    'mysticalagriculture:supremium_ingot',
                    'mysticalagriculture:imperium_watering_can'
                ],
                output: Item.of('mysticalagriculture:supremium_watering_can', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget'
                ],
                output: Item.of('mysticalagriculture:supremium_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    '#mysticalagriculture:infusion_crystals',
                    'mysticalagriculture:supremium_nugget'
                ],
                output: Item.of('mysticalagriculture:tertium_essence', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    '#forge:hoes',
                    'minecraft:dirt'
                ],
                output: Item.of('mysticalagriculture:tertium_farmland', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:tertium_ingot',
                    'mysticalagriculture:tertium_ingot',
                    'mysticalagriculture:tertium_ingot',
                    'mysticalagriculture:tertium_ingot',
                    'mysticalagriculture:prudentium_watering_can'
                ],
                output: Item.of('mysticalagriculture:tertium_watering_can', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget'
                ],
                output: Item.of('mysticalagriculture:supremium_ingot', 3)
            },
            {
                inputs: [
                    '#forge:ingots/compressed_iron',
                    '#forge:dyes/black'
                ],
                output: Item.of('extendedcrafting:black_iron_ingot', 1)
            }
        ]
    };

    data.recipes_unheated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs);
    });
    data.recipes_heated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).heated();
    });
    data.recipes_superheated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).superheated();
    });
});
