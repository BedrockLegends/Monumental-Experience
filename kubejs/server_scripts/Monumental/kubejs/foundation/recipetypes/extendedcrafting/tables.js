onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                result: 'minecraft:apple',
                pattern: ['XXX', 'X X', 'XXX'],
                key: {
                    X: '#forge:ingots/gold',
                }
            },
            {
                result: 'minecraft:torch',
                pattern: ['XX XX', ' X X ', 'XYZYX'],
                key: {
                    X: '#forge:ingots/gold',
                    Y: '#forge:ingots/iron',
                    Z: 'minecraft:stick'
                }
            },
            {
                result: 'minecraft:coal',
                pattern: ['AAAAAAA', 'BBBBBBB', 'CCCCCCC', 'DDDDDDD'],
                key: {
                    A: '#forge:gems/diamond',
                    B: '#forge:gems/lapis',
                    C: 'minecraft:nether_star',
                    D: '#forge:ingots/iron'
                }
            },
            {
                result: 'refinedstorage:controller',
                pattern: ['ABCBA', 'BDDDB', 'CDEDC', 'BDDDB', 'ABCBA'],
                key: {
                    A: '#forge:gems/silicon',
                    B: 'appliedenergistics2:smooth_sky_stone_block',
                    C: 'refinedstorage:advanced_processor',
                    D: 'refinedstorage:quartz_enriched_iron',
                    E: 'refinedstorage:machine_casing'
                }
            },
            {
                result: 'storagenetwork:master',
                pattern: ['AABAA', 'ABCBA', 'BCDCB', 'ABCBA', 'AABAA'],
                key: {
                    A: '#forge:sheetmetals/steel',
                    B: 'storagenetwork:kabel',
                    C: 'immersiveengineering:circuit_board',
                    D: '#forge:gears/diamond'
                }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.extendedcrafting.shaped_table(
            recipe.result,
            recipe.pattern,
            recipe.key
        );
    });
});