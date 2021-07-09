onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: ['extendedcrafting:black_iron_ingot', '#forge:gems/silicon',],
                outputs: [
                    Item.of('refinedstorage:quartz_enriched_iron', 2)
                ]
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/lead'],
                outputs: [Item.of('eidolon:pewter_ingot', 2)]
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:dusts/ender'],
                outputs: [Item.of('betterendforge:terminite_ingot')]
            },
            {
                inputs: ['#forge:ingots/thallasium', '#forge:dusts/ender'],
                outputs: [Item.of('betterendforge:terminite_ingot')]
            },
            {
                inputs: ['#forge:ingots/netherite', 'betterendforge:terminite_ingot'],
                outputs: [Item.of('betterendforge:aeternium_ingot')]
            },
            {
                inputs: ['byg:quartzite_sand'],
                outputs: [Item.of('minecraft:quartz'), Item.of('thermal:slag')]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.thermal.smelter(recipe.outputs, recipe.inputs);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
