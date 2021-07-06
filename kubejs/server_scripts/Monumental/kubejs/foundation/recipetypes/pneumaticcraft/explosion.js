onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: {
                    tag: 'forge:ingots/steel'
                },
                results: [
                    {
                        item: 'pneumaticcraft:ingot_iron_compressed'
                    }
                ],
                loss_rate: 20,
                id: 'ingot_iron_compressed'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'pneumaticcraft:explosion_crafting',
            input: recipe.input,
            results: recipe.results,
            loss_rate: recipe.loss_rate
        });
        if (recipe.id) {
            re.id(`pneumaticcraft:explosion_crafting/${recipe.id}`);
        }
    });
});
