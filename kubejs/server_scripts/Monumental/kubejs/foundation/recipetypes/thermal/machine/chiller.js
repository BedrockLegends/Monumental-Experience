onEvent('recipes', (event) => {
    let recipes = [
        {
            inputs: [Fluid.of('tconstruct:molten_clay', 144), 'tconstruct:ingot_cast'],
            output: Item.of('minecraft:brick', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_clay_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_iron', 144), 'tconstruct:ingot_cast'],
            output: Item.of('minecraft:iron_ingot', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_iron_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_steel', 144), 'tconstruct:ingot_cast'],
            output: Item.of('emendatusenigmatica:steel_ingot', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_steel_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_brass', 144), 'tconstruct:ingot_cast'],
            output: Item.of('emendatusenigmatica:brass_ingot', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_steel_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_zinc', 144), 'tconstruct:ingot_cast'],
            output: Item.of('emendatusenigmatica:zinc_ingot', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_zinc_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_uranium', 144), 'tconstruct:ingot_cast'],
            output: Item.of('emendatusenigmatica:uranium_ingot', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_uranium_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_osmium', 144), 'tconstruct:ingot_cast'],
            output: Item.of('emendatusenigmatica:osmium_ingot', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_osmium_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_netherite', 144), 'tconstruct:ingot_cast'],
            output: Item.of('minecraft:netherite_ingot', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_netherite_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_debris', 144), 'tconstruct:ingot_cast'],
            output: Item.of('minecraft:netherite_scrap', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_molten_debris'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_netherite', 16), 'tconstruct:nugget_cast'],
            output: Item.of('tconstruct:netherite_nugget', 1),
            energy: 555,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_netherite_nugget'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_debris', 16), 'tconstruct:nugget_cast'],
            output: Item.of('tconstruct:debris_nugget', 1),
            energy: 555,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_debris_nugget'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.thermal.chiller(recipe.output, recipe.inputs);
        if (recipe.energy) {
            re.energy(recipe.energy);
        }
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
