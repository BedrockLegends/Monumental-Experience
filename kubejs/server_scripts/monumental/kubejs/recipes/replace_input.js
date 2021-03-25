events.listen('recipes', (event) => {
    event.replaceInput({}, 'minecraft:stone', '#forge:stone', true);
    event.replaceInput({}, 'minecraft:chest', '#forge:chests/wooden', true);
    event.replaceInput({}, 'minecraft:redstone', '#forge:dusts/redstone', true);
    event.replaceInput({}, 'minecraft:paper', '#forge:paper', true);
    event.replaceInput({}, 'minecraft:stone_button', '#minecraft:buttons', true);
    event.replaceInput({}, 'minecraft:bucket', '#forge:buckets', true);
    event.replaceInput({}, 'minecraft:crafting_table', '#forge:workbench', true);
    event.replaceInput({}, 'minecraft:hopper', '#forge:tools/hopper', true);
});