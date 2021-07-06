onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'industrialforegoing:essence', amount: 1000 },
                fluid_output: { fluid: 'pneumaticcraft:memory_essence', amount: 1000 },
                pressure: 1.0,
                speed: 5.0,
                exothermic: false
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:memory_essence', amount: 1000 },
                fluid_output: { fluid: 'industrialforegoing:essence', amount: 1000 },
                pressure: 1.0,
                speed: 5.0,
                exothermic: false
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                item_input: { tag: 'forge:terracotta' },
                item_output: { item: 'minecraft:clay' },
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 10 },
                pressure: 2.0,
                speed: 2.0,
                exothermic: false,
                temperature: { min_temp: 373 }
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:sap', amount: 20 },
                fluid_output: { fluid: 'thermal:syrup', amount: 1 },
                speed: 10.0,
                exothermic: false,
                temperature: { min_temp: 377 }
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:syrup', amount: 25 },
                item_output: { item: 'minecraft:sugar', count: 2 },
                speed: 10.0,
                exothermic: false,
                temperature: { min_temp: 377 }
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:resin', amount: 400 },
                fluid_output: { fluid: 'thermal:tree_oil', amount: 200 },
                item_output: { item: 'thermal:rosin', count: 1 },
                exothermic: false,
                temperature: { min_temp: 377 }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom(recipe);
    });
});
