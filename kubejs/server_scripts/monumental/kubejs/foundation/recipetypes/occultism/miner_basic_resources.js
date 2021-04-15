events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                result: 'botania:metamorphic_desert_cobblestone',
                weight: 100
            },
            {
                result: 'botania:metamorphic_fungal_cobblestone',
                weight: 100
            },
            {
                result: 'botania:metamorphic_mountain_cobblestone',
                weight: 100
            },
            {
                result: 'botania:metamorphic_forest_cobblestone',
                weight: 100
            },
            {
                result: 'botania:metamorphic_plains_cobblestone',
                weight: 100
            },
            {
                result: 'botania:metamorphic_swamp_cobblestone',
                weight: 100
            },
            {
                result: 'botania:metamorphic_taiga_cobblestone',
                weight: 100
            },
            {
                result: 'botania:metamorphic_mesa_cobblestone',
                weight: 100
            },
            {
                result: 'minecraft:mossy_cobblestone',
                weight: 200
            },
            {
                result: 'minecraft:mossy_stone_bricks',
                weight: 200
            },
            {
                result: 'appliedenergistics2:sky_stone_block',
                weight: 200
            },
            {
                result: 'minecraft:stone',
                weight: 2000
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'occultism:miner',
            ingredient: {
                tag: 'occultism:miners/basic_resources'
            },
            result: {
                item: recipe.result
            },
            weight: recipe.weight
        });
    });
});
