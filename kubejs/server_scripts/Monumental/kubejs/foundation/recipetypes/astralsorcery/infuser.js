onEvent('recipes', (event) => {
    data = {
        recipes: [
            {
                input: { item: 'immersiveengineering:treated_wood_horizontal' },
                fluid: 'astralsorcery:liquid_starlight',
                consumptionChance: 0.1,
                output: 'astralsorcery:infused_wood',
                count: 1,
                duration: 100
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'astralsorcery:infuser',
            fluidInput: recipe.fluid,
            input: recipe.input,
            output: {
                item: recipe.output,
                count: recipe.count
            },
            consumptionChance: recipe.consumptionChance,
            duration: recipe.duration,
            consumeMultipleFluids: false,
            acceptChaliceInput: true,
            copyNBTToOutputs: false
        });
    });
});
