onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#appliedenergistics2:crystals/certus',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:certus_quartz_dust', 2)],
                id: 'thermal:machine/pulverizer/pulverizer_certus_quartz_dust'
            },
            {
                input: '#appliedenergistics2:crystals/fluix',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:fluix_dust', 2)],
                id: 'thermal:machine/pulverizer/pulverizer_fluix_dust'
            },
            {
                input: 'botania:mana_pearl',
                experience: 0.2,
                outputs: [Item.of('botania:pixie_dust', 1)],
                id: 'thermal:machine/pulverizer/pulverizer_pixie_dust'
            },
            {
                input: 'extendedcrafting:black_iron_ingot',
                experience: 0.2,
                outputs: [Item.of('extendedcrafting:black_iron_slate', 1)],
                id: 'thermal:machine/pulverizer/pulverizer_black_iron_slate'
            },
            {
                input: '#forge:storage_blocks/coal_coke',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:coke_dust', 9)],
                id: 'thermal:machine/pulverizer/pulverizer_coke_block'
            },
            {
                input: '#forge:coal_coke',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:coke_dust', 1)],
                id: 'thermal:machine/pulverizer/pulverizer_coke'
            },
            {
                input: '#forge:ingots/steel',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:steel_dust', 1)],
                id: 'thermal:machine/pulverizer/pulverizer_steel'
            },
            {
                input: '#forge:storage_blocks/steel',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:steel_dust', 9)],
                id: 'thermal:machine/pulverizer/pulverizer_steel_block'
            },
            {
                input: 'minecraft:charcoal',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:charcoal_dust', 1)],
                id: 'thermal:machine/pulverizer/pulverizer_charcoal'
            },
            {
                input: '#forge:storage_blocks/charcoal',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:charcoal_dust', 9)],
                id: 'thermal:machine/pulverizer/pulverizer_charcoal_block'
            },
            {
                input: 'minecraft:coal',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:coal_dust', 1)],
                id: 'thermal:machine/pulverizer/pulverizer_coal'
            },
            {
                input: '#forge:storage_blocks/coal',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:coal_dust', 9)],
                id: 'thermal:machine/pulverizer/pulverizer_coal_block'
            },
            {
                input: '#forge:ingots/netherite',
                experience: 0.2,
                outputs: [Item.of('mekanism:dust_netherite', 1)],
                id: 'thermal:machine/pulverizer/pulverizer_dust_netherite'
            },
            {
                input: '#forge:storage_blocks/netherite',
                experience: 0.2,
                outputs: [Item.of('mekanism:dust_netherite', 9)],
                id: 'thermal:machine/pulverizer/pulverizer_netherite_block'
            },
            {
                input: '#forge:obsidian',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:obsidian_dust', 4)],
                id: 'thermal:machine/pulverizer/pulverizer_obsidian'
            },
            {
                input: '#forge:ingots/refined_obsidian',
                experience: 0.2,
                outputs: [Item.of('mekanism:dust_refined_obsidian', 1)],
                id: 'thermal:machine/pulverizer/pulverizer_refined_obsidian'
            },
            {
                input: '#forge:storage_blocks/refined_obsidian',
                experience: 0.2,
                outputs: [Item.of('mekanism:dust_refined_obsidian', 9)],
                id: 'thermal:machine/pulverizer/pulverizer_refined_obsidian_block'
            },
            {
                input: '#forge:dusts/prismarine',
                experience: 0.2,
                outputs: [Item.of('minecraft:prismarine_crystals', 1)],
                id: 'thermal:machine/pulverizer/pulverizer_prismarine_crystals'
            },
            {
                input: '#forge:dusts/redstone',
                experience: 0.2,
                outputs: [Item.of('psi:psidust', 1)],
                id: 'thermal:machine/pulverizer/pulverizer_psidust'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
