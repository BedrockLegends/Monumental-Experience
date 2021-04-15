events.listen('recipes', (event) => {
    const recipes = [
        {
            input: 'forge:obsidian',
            output: 'emendatusenigmatica:obsidian_dust',
            count: 4,
            time: 400,
            id: 'occultism:crushing/obsidian_dust'
        }
    ];

    recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'occultism:crushing',
            ingredient: {
                tag: recipe.input
            },
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
