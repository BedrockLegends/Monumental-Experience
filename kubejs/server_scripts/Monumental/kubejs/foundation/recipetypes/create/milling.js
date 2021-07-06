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
                input: '#forge:ingots/allthemodium',
                outputs: [Item.of('allthemodium:allthemodium_dust', 1)],
                processingTime: 400
            },
            {
                input: '#forge:ingots/unobtainium',
                outputs: [Item.of('allthemodium:unobtainium_dust', 1)],
                processingTime: 400
            },
            {
                input: '#forge:ingots/vibranium',
                outputs: [Item.of('allthemodium:vibranium_dust', 1)],
                processingTime: 400
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
                input: '#forge:ingots/zinc',
                outputs: [Item.of('emendatusenigmatica:zinc_dust', 1)],
                processingTime: 200
            },
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.milling(recipe.outputs, recipe.input).processingTime(recipe.processingTime);
    });
});
