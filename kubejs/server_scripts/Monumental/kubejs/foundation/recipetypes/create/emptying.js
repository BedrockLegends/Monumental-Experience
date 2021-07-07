onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'farmersdelight:milk_bottle',
            container: 'minecraft:glass_bottle',
            fluid: Fluid.of('minecraft:milk', 250)
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
