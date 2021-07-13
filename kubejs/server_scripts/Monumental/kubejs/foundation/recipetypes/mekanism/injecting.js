onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'emendatusenigmatica:sulfur_dust',
            input: '#forge:gunpowder',
            gas: { tag: 'mekanism:hydrogen_chloride', amount: 1 },
            id: 'mekanism:injecting/gunpowder_to_sulfur'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.mekanism.injecting(recipe.output, recipe.input, recipe.gas);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
