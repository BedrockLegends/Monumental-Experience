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
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.recipes.create.crushing(recipe.outputs, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
