onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: [
                    { count: 4, base_ingredient: { item: 'immersiveengineering:wirecoil_copper' } }
                ],
                category: 'components',
                output: {
                    item: 'routerreborn:coppercoil'
                },
                id: 'copper_coil'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'immersiveengineering:wirecoil_redstone' } },
                    { tag: 'forge:dusts/ender' },
                    { tag: 'forge:plates/emerald' },
                    { item: 'rftoolscontrol:network_card' }
                ],
                category: 'components',
                output: {
                    item: 'rftoolscontrol:advanced_network_card'
                },
                id: 'advanced_network_card'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'immersiveengineering:insulating_glass' } },
                    { item: 'immersiveengineering:wirecoil_redstone' },
                    { item: 'immersiveengineering:wirecoil_electrum' }
                ],
                category: 'components',
                output: {
                    item: 'rftoolscontrol:card_base'
                },
                id: 'card_base'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'immersiveengineering:wirecoil_electrum' } },
                    { item: 'immersiveengineering:wirecoil_redstone' },
                    { item: 'pneumaticcraft:plastic' },
                    { item: 'rftoolscontrol:card_base' }
                ],
                category: 'components',
                output: {
                    item: 'rftoolscontrol:cpu_core_500'
                },
                id: 'cpu_core_500'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'immersiveengineering:wirecoil_redstone' } },
                    { tag: 'forge:plates/emerald' },
                    { item: 'rftoolscontrol:cpu_core_500' },
                    { tag: 'forge:plates/diamond' }
                ],
                category: 'components',
                output: {
                    item: 'rftoolscontrol:cpu_core_1000'
                },
                id: 'cpu_core_1000'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'immersiveengineering:wirecoil_redstone' } },
                    { item: 'immersiveengineering:wirecoil_redstone' },
                    { tag: 'forge:gems/dimensional' },
                    { item: 'rftoolscontrol:cpu_core_1000' }
                ],
                category: 'components',
                output: {
                    item: 'rftoolscontrol:cpu_core_2000'
                },
                id: 'cpu_core_2000'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'immersiveengineering:wirecoil_redstone' } },
                    { item: 'immersiveengineering:wirecoil_redstone' },
                    { tag: 'forge:dusts/glowstone' },
                    { item: 'create:polished_rose_quartz' },
                    { item: 'rftoolscontrol:card_base' },
                    { item: 'create:polished_rose_quartz' }
                ],
                category: 'components',
                output: {
                    item: 'rftoolscontrol:graphics_card'
                },
                id: 'graphics_card'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { tag: 'forge:dusts/ender' } },
                    { item: 'rftoolscontrol:card_base' },
                    { item: 'immersiveengineering:wirecoil_electrum' },
                    { item: 'immersiveengineering:wirecoil_redstone' },
                    { item: 'immersiveengineering:wirecoil_redstone' }
                ],
                category: 'components',
                output: {
                    item: 'rftoolscontrol:network_card'
                },
                id: 'network_card'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'immersiveengineering:wirecoil_redstone' } },
                    { item: 'immersiveengineering:wirecoil_redstone' },
                    { item: 'rftoolscontrol:card_base' },
                    { item: 'pneumaticcraft:plastic' }
                ],
                category: 'components',
                output: {
                    item: 'rftoolscontrol:ram_chip'
                },
                id: 'network_card'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { tag: 'forge:gunpowder' } },
                    { item: 'contenttweaker:compressed_plate' },
                    { tag: 'forge:plates/gold' }
                ],
                category: 'bullet',
                output: {
                    item: 'pneumaticcraft:gun_ammo'
                },
                id: 'gun_ammo'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'pneumaticcraft:gun_ammo' } },
                    { item: 'contenttweaker:compressed_plate' },
                    { tag: 'forge:plates/diamond' }
                ],
                category: 'bullet',
                output: {
                    item: 'pneumaticcraft:gun_ammo_ap'
                },
                id: 'gun_ammo_ap'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'pneumaticcraft:gun_ammo' } },
                    { item: 'contenttweaker:compressed_plate' },
                    { tag: 'forge:tnt' }
                ],
                category: 'bullet',
                output: {
                    item: 'pneumaticcraft:gun_ammo_explosive'
                },
                id: 'gun_ammo_explosive'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'pneumaticcraft:gun_ammo' } },
                    { item: 'contenttweaker:compressed_plate' },
                    { tag: 'forge:ices/ice' }
                ],
                category: 'bullet',
                output: {
                    item: 'pneumaticcraft:gun_ammo_freezing'
                },
                id: 'gun_ammo_freezing'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'pneumaticcraft:gun_ammo' } },
                    { item: 'contenttweaker:compressed_plate' },
                    { tag: 'forge:rods/blaze' }
                ],
                category: 'bullet',
                output: {
                    item: 'pneumaticcraft:gun_ammo_incendiary'
                },
                id: 'gun_ammo_incendiary'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'pneumaticcraft:gun_ammo' } },
                    { tag: 'forge:ingots/obsidian' },
                    { item: 'contenttweaker:compressed_plate' },
                    { tag: 'forge:plates/gold' }
                ],
                category: 'bullet',
                output: {
                    item: 'pneumaticcraft:gun_ammo_weighted'
                },
                id: 'gun_ammo_weighted'
            },


            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'immersiveengineering:wirecoil_redstone' } },
                    { tag:  'forge:plates/electrum' },
                    { item: 'pneumaticcraft:printed_circuit_board' },
                    { item: 'envirocore:litherite_boule' },
                    { item: 'envirocore:litherite_boule' },
                    { item: 'envirocore:litherite_wafer' }
                ],
                category: 'components',
                output: {
                    item: 'envirocore:cpu'
                },
                id: 'cpu'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'immersiveengineering:insulating_glass' } },
                    { tag:  'forge:plates/electrum' },
                    { item: 'immersiveengineering:toolupgrade_revolver_electro' },
                    { item: 'immersiveengineering:wirecoil_redstone' }
                ],
                category: 'components',
                output: {
                    item: 'envirocore:laser_diode'
                },
                id: 'laser_diode'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'envirocore:volatile_memory' } },
                    { item: 'contenttweaker:compressed_plate' },
                    { item: 'immersiveengineering:wirecoil_redstone' }
                ],
                category: 'components',
                output: {
                    item: 'envirocore:flash_memory'
                },
                id: 'flash_memory'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'contenttweaker:compressed_plate' } },
                    { item: 'envirocore:litherite_boule' },
                    { item: 'envirocore:litherite_boule' },
                    { item: 'envirocore:litherite_wafer' },
                    { item: 'immersiveengineering:wirecoil_redstone' }
                ],
                category: 'components',
                output: {
                    item: 'envirocore:volatile_memory'
                },
                id: 'volatile_memory'
            },


            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'mekanism:alloy_infused' } },
                    { item: 'mekanism:alloy_infused' },
                    { tag:  'forge:circuits/basic' },
                    { item: 'pneumaticcraft:plastic' },
                    { item: 'industrialforegoing:plastic' }
                ],
                category: 'components',
                output: {
                    item: 'mekanism:advanced_control_circuit'
                },
                id: 'advanced_control_circuit'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'mekanism:alloy_reinforced' } },
                    { item: 'mekanism:alloy_reinforced' },
                    { tag:  'forge:circuits/advanced' },
                    { item: 'pneumaticcraft:plastic' },
                    { item: 'industrialforegoing:plastic' }
                ],
                category: 'components',
                output: {
                    item: 'mekanism:elite_control_circuit'
                },
                id: 'elite_control_circuit'
            },
            {
                inputs: [
                    { count: 1, base_ingredient: { item: 'mekanism:alloy_atomic' } },
                    { item: 'mekanism:alloy_atomic' },
                    { tag:  'forge:circuits/elite' },
                    { item: 'pneumaticcraft:plastic' },
                    { item: 'industrialforegoing:plastic' }
                ],
                category: 'components',
                output: {
                    item: 'mekanism:ultimate_control_circuit'
                },
                id: 'elite_control_circuit'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'immersiveengineering:blueprint',
            inputs: recipe.inputs,
            category: recipe.category,
            result: recipe.output
        });

        if (recipe.id) {
            re.id('immersiveengineering:blueprint/' + recipe.id);
        }
    });
});
