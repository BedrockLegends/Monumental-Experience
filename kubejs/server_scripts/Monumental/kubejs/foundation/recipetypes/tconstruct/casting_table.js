onEvent('recipes', (event) => {
    const recipes = [
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_diamond',
                amount: 144
            },
            result: 'emendatusenigmatica:diamond_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_diamond',
                amount: 144
            },
            result: 'emendatusenigmatica:diamond_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_enderium',
                amount: 144
            },
            result: 'emendatusenigmatica:enderium_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_enderium',
                amount: 144
            },
            result: 'emendatusenigmatica:enderium_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_emerald',
                amount: 144
            },
            result: 'emendatusenigmatica:emerald_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_emerald',
                amount: 144
            },
            result: 'emendatusenigmatica:emerald_plate',
            cooling_time: 57
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'tconstruct:casting_table',
            cast: recipe.cast,
            cast_consumed: recipe.cast_consumed,
            fluid: recipe.fluid,
            result: recipe.result,
            cooling_time: recipe.cooling_time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
