onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('waystones:warp_stone', 1),
            pattern: ['_____', '_LQL_', '_QPQ_', '_LQL_', '_____'],
            key: {
                P: { item: 'botanicalmachinery:mana_emerald' },
                Q: { item: 'botania:mana_pearl' },
                L: { tag: 'forge:dyes/purple' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam'
            ]
        },
        {
            output: Item.of('waystones:waystone', 1),
            pattern: ['_____', '__Q__', '_QPQ_', '_LLL_', '_____'],
            key: {
                P: { item: 'waystones:warp_stone' },
                Q: { tag: 'botania:livingrock' },
                L: { tag: 'forge:ingots/obsidian' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam'
            ]
        },
        {
            output: Item.of('tmechworks:upgrade_blank', 1),
            pattern: ['_____', '_IAI_', '_RIR_', '_ACA_', '_____'],
            key: {
                I: { tag: 'forge:plates/iron' },
                C: { tag: 'forge:plates/copper' },
                R: { item: 'extendedcrafting:redstone_component' },
                A: { tag: 'forge:plates/aluminum' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam'
            ]
        },
        {
            output: Item.of('tconstruct:efln_ball', 1),
            pattern: ['_____', '_XCX_', '_CXC_', '_XCX_', '_____'],
            key: {
                C: { tag: 'forge:storage_blocks/gunpowder' },
                X: { item: 'gunswithoutroses:flint_bullet' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam'
            ]
        },
        {
            output: Item.of('tconstruct:pattern', 2),
            pattern: ['_____', '_PTP_', '_TPT_', '_PTP_', '_____'],
            key: {
                P: { tag: 'forge:plates/wooden' },
                T: { tag: 'forge:plates/wooden' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam'
            ]
        },
        {
            output: Item.of('astralsorcery:colored_lens_break', 1),
            pattern: ['A___A', '__D__', '__E__', 'C_B_C', '_____'],
            key: {
                A: { tag: 'forge:gems/aquamarine' },
                B: { item: 'botania:manasteel_pick' },
                C: { tag: 'forge:ingots/gold' },
                D: { tag: 'forge:gems/mana_diamond' },
                E: { item: 'astralsorcery:glass_lens' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ]
        },
        {
            output: Item.of('astralsorcery:colored_lens_regeneration', 1),
            pattern: ['A___A', '__D__', '__E__', 'C_B_C', '_____'],
            key: {
                A: { tag: 'forge:gems/aquamarine' },
                B: { tag: 'forge:gems/mana_diamond' },
                C: { tag: 'astralsorcery:stardust' },
                D: { item: 'botania:livingwood_twig' },
                E: { item: 'astralsorcery:glass_lens' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ]
        },
        {
            output: Item.of('astralsorcery:colored_lens_damage', 1),
            pattern: ['_____', 'C_D_C', '_CEC_', '_A_A_', 'B___B'],
            key: {
                A: { item: 'botania:manaweave_cloth' },
                B: { tag: 'forge:gems/aquamarine' },
                C: { tag: 'forge:ingots/manasteel' },
                D: { tag: 'forge:gems/mana_diamond' },
                E: { item: 'astralsorcery:glass_lens' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ]
        },
        {
            output: Item.of('astralsorcery:enchantment_amulet', 1),
            pattern: ['_____', '_CDC_', '_BEB_', 'B_A_B', '_B_B_'],
            key: {
                A: { item: 'botania:mana_pearl' },
                B: { tag: 'astralsorcery:stardust' },
                C: { item: 'naturesaura:tainted_gold' },
                D: { item: 'botania:mana_string' },
                E: { item: 'astralsorcery:shifting_star' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ]
        },
        {
            output: Item.of('astralsorcery:telescope', 1),
            pattern: ['_____', '__BC_', '_BDB_', '_AB__', '_____'],
            key: {
                A: { tag: 'botania:livingwood' },
                B: { tag: 'forge:rods/wooden' },
                C: { item: 'astralsorcery:glass_lens' },
                D: { item: 'naturesaura:tainted_gold' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam'
            ]
        },
        {
            output: Item.of('astralsorcery:resonator', 1),
            pattern: ['_____', '__C__', '_DED_', '_ABA_', '_____'],
            key: {
                A: { item: 'astralsorcery:infused_wood' },
                B: { item: 'naturesaura:tainted_gold' },
                C: { tag: 'forge:gems/aquamarine' },
                D: { item: 'astralsorcery:marble_raw' },
                E: {
                     type: 'astralsorcery:fluid',      
                     fluid: [
                   {
                    fluid: 'astralsorcery:liquid_starlight',
                    amount: 1000
                   }
                 ]
               }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam'
            ]
        },
        {
            output: Item.of('bloodmagic:alchemytable', 1),
            pattern: ['_____', '_AAA_', '_CDC_', '_BXB_', '_____'],
            key: {
                A: { item: 'bloodmagic:stonetilepath' },
                B: { item: 'naturesaura:tainted_gold' },
                C: { tag: 'botania:livingwood' },
                D: { item: 'mana-and-artifice:superheated_purified_vinteum_ingot' },
                X: { item: 'bloodmagic:blankrune' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 700,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar'
            ]
        },
        {
            output: Item.of('psi:cad_assembler', 1),
            pattern: ['_____', '_DCD_', '_CXC_', '_DCD_', '_____'],
            key: {
                C: { item: 'mana-and-artifice:purified_vinteum_ingot' },
                D: { tag: 'astralsorcery:starmetal' },
                X: { tag: 'botania:runes/mana' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 700,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar'
            ]
        },
        {
            output: Item.of('psi:programmer', 1),
            pattern: ['_____', '_DCD_', '_CXC_', '_DCD_', '_____'],
            key: {
                C: { item: 'mana-and-artifice:purified_vinteum_ingot' },
                D: { tag: 'astralsorcery:starmetal' },
                X: { item: 'psi:psidust_block' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 700,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar'
            ]
        },
        {
            output: Item.of('bloodmagic:alchemicalreactionchamber', 1),
            pattern: ['_____', '_AAA_', '_SDS_', '_BCB_', '_____'],
            key: {
                A: { tag: 'forge:stone' },
                B: { item: 'bloodmagic:infusedslate' },
                C: { tag: 'forge:furnaces/iron' },
                D: { item: 'bloodmagic:masterbloodorb' },
                S: { tag: 'forge:storage_blocks/iron' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 700,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar'
            ]
        },
        {
            output: Item.of('bloodmagic:altar', 1),
            pattern: ['A___A', '_ESE_', '_GFD_', '_BCB_', 'A___A'],
            key: {
                A: { tag: 'botania:livingrock' },
                B: { item: 'naturesaura:tainted_gold' },
                C: { item: 'astralsorcery:starmetal' },
                D: { tag: 'botania:runes/envy' },
                E: { tag: 'forge:dragonblood' },
                F: { item: 'jumbofurnace:orthodimensional_hyperfurnace' },
                G: { tag: 'botania:runes/wrath' },
                S: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                }
            },
            altar_type: 3,
            duration: 200,
            starlight: 1400,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ]
        },
        {
            output: Item.of('mana-and-artifice:spell_book', 1),
            pattern: ['_____', '_QLL_', '_QPP_', '_QLL_', '_____'],
            key: {
                P: { tag: 'forge:paper' },
                L: { item: 'quark:ravager_hide' },
                Q: { item: 'botania:mana_string' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam'
            ]
        },
        {
            output: Item.of('mana-and-artifice:stone_rune_bag', 1),
            pattern: ['_____', '__B__', '_CLC_', '_LLL_', '_____'],
            key: {
                B: { item: 'mana-and-artifice:stone_rune_blank' },
                C: { item: 'botania:mana_string' },
                L: { tag: 'forge:leather' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam'
            ]
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'astralsorcery:altar',
            altar_type: recipe.altar_type,
            duration: recipe.duration,
            starlight: recipe.starlight,
            pattern: recipe.pattern,
            key: recipe.key,
            output: [recipe.output.toResultJson()],
            effects: recipe.effects
        };

        if (recipe.relay_inputs) {
            constructed_recipe.relay_inputs = recipe.relay_inputs;
        }
        if (recipe.focus_constellation) {
            constructed_recipe.focus_constellation = recipe.focus_constellation;
        }
        if (recipe.recipe_class) {
            constructed_recipe.recipe_class = recipe.recipe_class;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
