onEvent('recipes', (event) => {
    var data = {
        recipes_unheated: [
            {
                inputs: [Fluid.of('resourcefulbees:honey')],
                output: 'minecraft:honey_block'
            },
            {
                inputs: [
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    { fluidTag: 'minecraft:water', amount: 250 }
                ],
                output: Item.of('minecraft:paper', 6)
            },
            {
                inputs: [Fluid.of('immersiveengineering:concrete', 500)],
                output: 'immersiveengineering:slab_concrete'
            }
        ],
        recipes_heated: [
            {
                inputs: ['minecraft:vine'],
                output: Fluid.of('industrialforegoing:latex', 50)
            },
            {
                inputs: ['minecraft:dandelion'],
                output: Fluid.of('industrialforegoing:latex', 50)
            },
            {
                inputs: ['#forge:sandstone','#forge:sandstone','#forge:sandstone','#forge:sandstone','compressium:sand_2','#engineersdecor:brick_blocks'],
                output: Item.of('immersiveengineering:alloybrick', 2)
            },
            {
                inputs: ['immersiveengineering:alloybrick','immersiveengineering:alloybrick','immersiveengineering:alloybrick','immersiveengineering:alloybrick','#forge:sandstone','#chipped:light_gray_concrete'],
                output: Item.of('immersiveengineering:cokebrick', 2)
            },
            {
                inputs: [
                    'immersiveengineering:cokebrick',
                    '#chipped:red_nether_bricks',
                    Fluid.of('cyclic:magma', 250)
                ],
                output: Item.of('immersiveengineering:blastbrick', 2)
            },
            {
                inputs: [
                    '#botania:livingrock',
                    'mana-and-artifice:vinteum_dust'
                ],
                output: Item.of('mana-and-artifice:stone_rune_blank', 2)
            },
            {
                inputs: [
                    'contenttweaker:compressed_plate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('pneumaticcraft:reinforced_stone', 4)
            },
            //Extended Crafting
            {
                inputs: [
                    'extendedcrafting:advanced_component',
                    'extendedcrafting:advanced_component',
                    'extendedcrafting:advanced_component',
                    'extendedcrafting:advanced_component',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:advanced_catalyst', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    '#forge:ingots/gold',
                    '#forge:ingots/gold'
                ],
                output: Item.of('extendedcrafting:advanced_component', 1)
            },
            {
                inputs: [
                    'extendedcrafting:basic_component',
                    'extendedcrafting:basic_component',
                    'extendedcrafting:basic_component',
                    'extendedcrafting:basic_component',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:basic_catalyst', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron'
                ],
                output: Item.of('extendedcrafting:basic_component', 1)
            },
            {
                inputs: [
                    'extendedcrafting:elite_component',
                    'extendedcrafting:elite_component',
                    'extendedcrafting:elite_component',
                    'extendedcrafting:elite_component',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:elite_catalyst', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    'forge:gems/diamond',
                    'forge:gems/diamond'
                ],
                output: Item.of('extendedcrafting:elite_component', 1)
            }
        ],
        recipes_superheated: [
            {
                inputs: [
                    '#forge:plates/steel',
                    'immersiveengineering:blastbrick'
                ],
                output: Item.of('immersiveengineering:blastbrick_reinforced', 2)
            }
        ]
    };

    data.recipes_unheated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs);
    });
    data.recipes_heated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs).heated();
    });
    data.recipes_superheated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs).superheated();
    });
});
