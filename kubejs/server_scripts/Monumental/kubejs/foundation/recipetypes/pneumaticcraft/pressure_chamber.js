onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                ingredients: [
                    { item: 'refinedstorage:basic_processor' },
                    { tag: 'forge:dusts/glowstone' }
                ],
                pressure: 4.0,
                output: [{ item: 'refinedstorage:construction_core', count: 1 }],
                id: 'construction_core'
            },
            {
                ingredients: [
                    { item: 'refinedstorage:basic_processor' },
                    { tag: 'forge:gems/quartz' }
                ],
                pressure: 4.0,
                output: [{ item: 'refinedstorage:destruction_core', count: 1 }],
                id: 'destruction_core'
            },
            {
                ingredients: [
                    { item: 'immersiveengineering:wirecoil_electrum' },
                    { tag: 'forge:gems/silicon' },
                    { item: 'extendedcrafting:redstone_catalyst' },
                    { item: 'refinedstorage:processor_binding' },
                    { item: 'immersiveengineering:wirecoil_electrum' }
                ],
                pressure: 4.0,
                output: [{ item: 'refinedstorage:raw_improved_processor', count: 1 }],
                id: 'raw_improved_processor'
            },
            {
                ingredients: [
                    { item: 'extendedcrafting:black_iron_ingot' },
                    { tag: 'forge:gems/silicon' },
                    { item: 'extendedcrafting:redstone_catalyst' },
                    { item: 'refinedstorage:processor_binding' }
                ],
                pressure: 4.0,
                output: [{ item: 'refinedstorage:raw_basic_processor', count: 1 }],
                id: 'raw_basic_processor'
            },
            {
                ingredients: [
                    { tag: 'forge:gears/diamond' },
                    { tag: 'forge:gems/silicon' },
                    { item: 'extendedcrafting:redstone_catalyst' },
                    { item: 'refinedstorage:processor_binding' }
                ],
                pressure: 4.0,
                output: [{ item: 'refinedstorage:raw_advanced_processor', count: 1 }],
                id: 'raw_advanced_processor'
            },
            {
                ingredients: [
                    { tag: 'forge:fiber_hemp' },
                    { tag: 'forge:fiber_hemp' },
                    { item: 'bloodmagic:reagentbinding' },
                    { item: 'industrialforegoing:pink_slime' },
                    { item: 'industrialforegoing:pink_slime' }
                ],
                pressure: 4.0,
                output: [{ item: 'refinedstorage:processor_binding', count: 1 }],
                id: 'processor_binding'
            },
            {
                ingredients: [
                    { tag: 'appliedenergistics2:crystals/nether' },
                    { tag: 'forge:dusts/fluix' },
                    { item: 'appliedenergistics2:logic_processor' }
                ],
                pressure: 4.0,
                output: [{ item: 'appliedenergistics2:annihilation_core', count: 2 }],
                id: 'annihilation_core'
            },
            {
                ingredients: [
                    { tag: 'appliedenergistics2:crystals/certus' },
                    { tag: 'forge:dusts/fluix' },
                    { item: 'appliedenergistics2:logic_processor' }
                ],
                pressure: 4.0,
                output: [{ item: 'appliedenergistics2:formation_core', count: 2 }],
                id: 'formation_core'
            },
            {
                ingredients: [
                    { item: 'pneumaticcraft:plastic' },
                    { item: 'createaddition:capacitor' },
                    { item: 'immersiveengineering:wirecoil_electrum' },
                    { tag: 'forge:slimeballs' }
                ],
                pressure: 1.0,
                output: [{ item: 'pneumaticcraft:capacitor', count: 1 }],
                id: 'pneumaticcraft_capacitor'
            },
            {
                ingredients: [
                    { item: 'immersiveengineering:wirecoil_electrum' },
                    { item: 'immersiveengineering:wirecoil_redstone' },
                    { item: 'pneumaticcraft:plastic' },
                    { item: 'immersiveengineering:circuit_board' }
                ],
                pressure: 1.0,
                output: [{ item: 'pneumaticcraft:empty_pcb', count: 2 }],
                id: 'pneumaticcraft_empty_pcb'
            },
            {
                ingredients: [
                    { item: 'immersiveengineering:wirecoil_redstone' },
                    { item: 'immersiveengineering:wirecoil_electrum' },
                    { item: 'create:electron_tube' },
                    { item: 'pneumaticcraft:plastic' }
                ],
                pressure: 1.0,
                output: [{ item: 'pneumaticcraft:transistor', count: 1 }],
                id: 'pneumaticcraft_transistor'
            },
            {
                ingredients: [
                    { tag: 'forge:ingots/steel' }
                ],
                pressure: 1.0,
                output: [{ item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }],
                id: 'ingot_iron_compressed'
            },
            {
                ingredients: [{ type: 'pneumaticcraft:stacked_item', tag: 'forge:grain', count: 1 }],
                pressure: 1.5,
                output: [{ item: 'create:wheat_flour', count: 2 }],
                id: 'wheat_flour'
            },
            {
                ingredients: [{ type: 'pneumaticcraft:stacked_item', item: 'minecraft:snow_block', count: 4 }],
                pressure: 2.0,
                output: [{ item: 'betterendforge:dense_snow', count: 1 }]
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'pneumaticcraft:pressure_chamber',
            inputs: recipe.ingredients,
            pressure: recipe.pressure,
            results: recipe.output
        });
        if (recipe.id) {
            re.id(`pneumaticcraft:pressure_chamber/${recipe.id}`);
        }
    });
});
