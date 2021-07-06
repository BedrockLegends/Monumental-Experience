onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'botania:manasteel_block',
            output: 'astralsorcery:starmetal',
            count: 1,
            mana: 27000
        },
        {
            input: '#forge:gems/psigem',
            output: 'botania:mana_diamond',
            count: 1,
            mana: 10000
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana
        };
        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
