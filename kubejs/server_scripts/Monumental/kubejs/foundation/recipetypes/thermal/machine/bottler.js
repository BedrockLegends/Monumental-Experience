onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('minecraft:milk', 250),
            output: 'farmersdelight:milk_bottle'
        },
        {
            input: 'farmersdelight:milk_bottle',
            fluid: Fluid.of('create:chocolate', 250),
            output: 'farmersdelight:hot_cocoa'
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 250),
            output: 'minecraft:experience_bottle'
        },
        {
            input: 'buildinggadgets:construction_block_powder',
            fluid: Fluid.of('minecraft:water', 1000),
            output: 'buildinggadgets:construction_block_dense'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
