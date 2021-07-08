onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'mekanism:hdpe_sheet', 
            inputs: ['mekanism:hdpe_pellet']
        },
        {
            output: 'mcwfurnitures:acacia_plate',
            inputs: ['#minecraft:acacia_logs']
        },
        {
            output: 'contenttweaker:compressed_plate',
            inputs: ['#forge:ingots/compressed_iron']
        },
        {
            output: 'woot:black_dyeplate',
            inputs: ['#chipped:black_wool']
        },
        {
            output: 'woot:blue_dyeplate',
            inputs: ['#chipped:blue_wool']
        },
        {
            output: 'woot:brown_dyeplate',
            inputs: ['#chipped:brown_wool']
        },
        {
            output: 'woot:white_dyeplate',
            inputs: ['#chipped:white_wool']
        },
        {
            output: 'woot:orange_dyeplate',
            inputs: ['#chipped:orange_wool']
        },
        {
            output: 'woot:magenta_dyeplate',
            inputs: ['#chipped:magenta_wool']
        },
        {
            output: 'woot:light_blue_dyeplate',
            inputs: ['#chipped:light_blue_wool']
        },
        {
            output: 'woot:yellow_dyeplate',
            inputs: ['#chipped:yellow_wool']
        },
        {
            output: 'woot:lime_dyeplate',
            inputs: ['#chipped:lime_wool']
        },
        {
            output: 'woot:pink_dyeplate',
            inputs: ['#chipped:pink_wool']
        },
        {
            output: 'woot:gray_dyeplate',
            inputs: ['#chipped:gray_wool']
        },
        {
            output: 'woot:light_gray_dyeplate',
            inputs: ['#chipped:light_gray_wool']
        },
        {
            output: 'woot:cyan_dyeplate',
            inputs: ['#chipped:cyan_wool']
        },
        {
            output: 'woot:green_dyeplate',
            inputs: ['#chipped:green_wool']
        },
        {
            output: 'woot:purple_dyeplate',
            inputs: ['#chipped:purple_wool']
        },
        {
            output: 'woot:red_dyeplate',
            inputs: ['#chipped:red_wool']
        },
        {
            output: 'mcwfurnitures:acacia_plate',
            inputs: ['#minecraft:acacia_logs']
        },
        {
            output: 'mcwfurnitures:birch_plate',
            inputs: ['#minecraft:birch_logs']
        },
        {
            output: 'mcwfurnitures:oak_plate',
            inputs: ['#minecraft:oak_logs']
        },
        {
            output: 'mcwfurnitures:spruce_plate',
            inputs: ['#minecraft:spruce_logs']
        },
        {
            output: 'mcwfurnitures:jungle_plate',
            inputs: ['#minecraft:jungle_logs']
        },
        {
            output: 'mcwfurnitures:dark_oak_plate',
            inputs: ['#minecraft:dark_oak_logs']
        },
        {
            output: 'mcwfurnitures:crimson_plate',
            inputs: ['#minecraft:crimson_stems']
        },{
            output: 'mcwfurnitures:warped_plate',
            inputs: ['#minecraft:warped_stems']
        },
        {
            output: 'woodenutilities:wooden_plate',
            inputs: ['#minecraft:planks']
        },
        {
            output: 'pneumaticcraft:compressed_iron_gear',
            inputs: ['#forge:ingots/compressed_iron']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id)
            : event.recipes.create.pressing(recipe.output, recipe.inputs);
    });
});
