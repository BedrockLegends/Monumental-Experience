onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: [Item.of('emendatusenigmatica:obsidian_dust'), Item.of('minecraft:obsidian').withChance(0.75)],
                input: 'minecraft:obsidian',
                id: 'create:crushing/obsidian'
            },
            {
                outputs: [
                    Item.of('buildinggadgets:construction_paste', 3),
                    Item.of('buildinggadgets:construction_paste').withChance(0.75),
                    Item.of('buildinggadgets:construction_paste').withChance(0.5)
                ],
                input: 'buildinggadgets:construction_block_dense'
            },
            {
                outputs: [Item.of('byg:quartzite_sand', 2), Item.of('byg:quartzite_sand').withChance(0.5)],
                input: 'byg:raw_quartz_block'
            },
            {
                outputs: [Item.of('minecraft:sand'), Item.of('minecraft:quartz').withChance(0.1)],
                input: 'byg:quartzite_sand'
            },
            {
                outputs: [Item.of('botania:elementium_nugget', 5)],
                input: '#forge:storage_blocks/elementium'
            },
            {
                outputs: [Item.of('botania:manasteel_nugget', 5)],
                input: '#forge:storage_blocks/manasteel'
            },
            {
                outputs: [Item.of('botania:terrasteel_nugget', 5)],
                input: '#forge:storage_blocks/terrasteel'
            },
            {
                outputs: [Item.of('minecraft:glowstone_dust', 5)],
                input: '#forge:storage_blocks/refined_glowstone'
            },
            {
                outputs: [Item.of('mekanism:dust_refined_obsidian', 5)],
                input: '#forge:storage_blocks/refined_obsidian'
            },
            {
                outputs: [Item.of('mekanism:dust_netherite', 5)],
                input: '#forge:storage_blocks/netherite'
            },
            {
                outputs: [Item.of('minecraft:redstone', 5)],
                input: '#forge:storage_blocks/redstone'
            },
            {
                outputs: [Item.of('mysticalagradditions:insanium_block', 5)],
                input: 'mysticalagradditions:insanium_essence'
            },
            {
                outputs: [Item.of('mysticalagradditions:insanium_coal', 5)],
                input: 'mysticalagradditions:insanium_coal_block'
            },
            {
                outputs: [Item.of('mysticalagradditions:insanium_gemstone', 5)],
                input: 'mysticalagradditions:insanium_gemstone_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:tertium_essence', 5)],
                input: 'mysticalagriculture:tertium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:supremium_essence', 5)],
                input: 'mysticalagriculture:supremium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:prosperity_shard', 5)],
                input: 'mysticalagriculture:prosperity_block'
            },
            //Mystical Agriculture
            {
                outputs: [Item.of('mysticalagriculture:imperium_essence', 5)],
                input: 'mysticalagriculture:imperium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:inferium_essence', 5)],
                input: 'mysticalagriculture:inferium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:prosperity_shard', 5)],
                input: 'mysticalagriculture:prosperity_block'
            },
            {
                outputs: [
                    Item.of('mysticalagriculture:prosperity_shard', 1),
                    Item.of('buildinggadgets:construction_paste', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/prosperity'
            },
            {
                outputs: [Item.of('mysticalagriculture:prudentium_essence', 5)],
                input: 'mysticalagriculture:prudentium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:supremium_essence', 5)],
                input: 'mysticalagriculture:supremium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:tertium_essence', 5)],
                input: 'mysticalagriculture:tertium_block'
            },
            //Emendatus Enigmatica
            {
                outputs: [Item.of('emendatusenigmatica:bronze_dust', 5)],
                input: '#forge:storage_blocks/bronze'
            },
            {
                outputs: [Item.of('emendatusenigmatica:coal_dust', 5)],
                input: '#forge:storage_blocks/coal'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:coal_dust', 1),
                    Item.of('emendatusenigmatica:coal_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/coal'
            },
            {
                outputs: [Item.of('emendatusenigmatica:copper_dust', 5)],
                input: '#forge:storage_blocks/copper'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:copper_dust', 1),
                    Item.of('emendatusenigmatica:copper_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/copper'
            },
            {
                outputs: [Item.of('emendatusenigmatica:diamond_dust', 5)],
                input: '#forge:storage_blocks/diamond'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:diamond_dust', 1),
                    Item.of('emendatusenigmatica:diamond_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/diamond'
            },
            {
                outputs: [Item.of('emendatusenigmatica:gold_dust', 5)],
                input: '#forge:storage_blocks/gold'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:gold_dust', 1),
                    Item.of('emendatusenigmatica:gold_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/gold'
            },
            {
                outputs: [Item.of('emendatusenigmatica:iron_dust', 5)],
                input: '#forge:storage_blocks/iron'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:iron_dust', 1),
                    Item.of('emendatusenigmatica:iron_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/iron'
            },
            {
                outputs: [Item.of('emendatusenigmatica:lead_dust', 5)],
                input: '#forge:storage_blocks/lead'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:lead_dust', 1),
                    Item.of('emendatusenigmatica:lead_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/lead'
            },
            {
                outputs: [Item.of('emendatusenigmatica:nickel_dust', 5)],
                input: '#forge:storage_blocks/nickel'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:nickel_dust', 1),
                    Item.of('emendatusenigmatica:nickel_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/nickel'
            },
            {
                outputs: [Item.of('emendatusenigmatica:silver_dust', 5)],
                input: '#forge:storage_blocks/silver'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:silver_dust', 1),
                    Item.of('emendatusenigmatica:silver_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/silver'
            },
            {
                outputs: [Item.of('emendatusenigmatica:steel_dust', 5)],
                input: '#forge:storage_blocks/steel'
            },
            {
                outputs: [Item.of('emendatusenigmatica:tin_dust', 5)],
                input: '#forge:storage_blocks/tin'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:tin_dust', 1),
                    Item.of('emendatusenigmatica:tin_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/tin'
            },
            {
                outputs: [Item.of('emendatusenigmatica:uranium_dust', 5)],
                input: '#forge:storage_blocks/uranium'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:uranium_dust', 1),
                    Item.of('emendatusenigmatica:uranium_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/uranium'
            },
            {
                outputs: [Item.of('emendatusenigmatica:zinc_dust', 5)],
                input: '#forge:storage_blocks/zinc'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:zinc_dust', 1),
                    Item.of('emendatusenigmatica:zinc_dust', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/zinc'
            },
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.recipes.create.crushing(recipe.outputs, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
