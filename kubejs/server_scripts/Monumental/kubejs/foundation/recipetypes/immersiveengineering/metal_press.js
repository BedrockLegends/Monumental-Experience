onEvent('recipes', (event) => {
    const recipes = [
        { output: 'mekanism:hdpe_sheet', input: 'mekanism:hdpe_pellet', mold: '#thermal:crafting/dies/plate', output: 'contenttweaker:compressed_plate', input: '#forge:ingots/compressed_iron', mold: 'immersiveengineering:mold_plate', output: 'emendatusenigmatica:diamond_plate', input: '#forge:gems/diamond', mold: 'immersiveengineering:mold_plate', output: 'emendatusenigmatica:emerald_plate', input: '#forge:gems/emerald', mold: 'immersiveengineering:mold_plate'}
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id)
            : event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold);
    });
});
