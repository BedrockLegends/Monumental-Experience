onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: ['extendedcrafting:black_iron_ingot', '#forge:gems/silicon',],
                outputs: [
                    Item.of('refinedstorage:quartz_enriched_iron', 2)
                ]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.thermal.smelter(recipe.outputs, recipe.inputs);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
