onEvent('recipes', (event) => {
    const recipes = [
        {
            input: { tag: 'forge:end_stones' },
            output: 'occultism:crushed_end_stone',
            count: 4,
            time: 200,
            id: 'occultism:crushing/crushed_end_stone'
        },
        {
            input: { tag: 'forge:obsidian' },
            output: 'emendatusenigmatica:obsidian_dust',
            count: 4,
            time: 400,
            id: 'occultism:crushing/obsidian_dust'
        },
        {
            input: { tag: 'forge:grain' },
            output: 'create:wheat_flour',
            count: 1,
            time: 400
        },
        {
            input: { item: 'minecraft:sugar_cane' },
            output: 'minecraft:sugar',
            count: 2,
            time: 400
        },
        {
            input: { item: 'byg:purple_sandstone' },
            output: 'byg:purple_sand',
            count: 4,
            time: 400
        },
        {
            input: { item: 'byg:blue_sandstone' },
            output: 'byg:blue_sand',
            count: 4,
            time: 400
        },
        {
            input: { item: 'byg:white_sandstone' },
            output: 'byg:white_sand',
            count: 4,
            time: 400
        },
        {
            input: { item: 'byg:black_sandstone' },
            output: 'byg:black_sand',
            count: 4,
            time: 400
        },
        {
            input: { item: 'betterendforge:dense_snow' },
            output: 'minecraft:snow_block',
            count: 4,
            time: 400
        }
    ];

    recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'occultism:crushing',
            ingredient: recipe.input,
            result: {
                item: recipe.output,
                count: recipe.count
            },
            crushing_time: recipe.time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
