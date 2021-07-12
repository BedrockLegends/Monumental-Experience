onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                output: 'mekanism:basic_control_circuit',
                input: 'pneumaticcraft:advanced_pcb',
                infusionInput: 'mekanism:redstone',
                infusionAmount: 20
            },
            {
                output: 'mekanism:alloy_infused',
                input: 'extendedcrafting:black_iron_ingot',
                infusionInput: 'mekanism:redstone',
                infusionAmount: 10
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.mekanism
                  .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
                  .id(recipe.id)
            : event.recipes.mekanism.metallurgic_infusing(
                  recipe.output,
                  recipe.input,
                  recipe.infusionInput,
                  recipe.infusionAmount
              );
    });
});
