events.listen('recipes', (event) => {
    event.replaceInput({}, 'minecraft:stone', '#forge:stone', true);
    event.replaceInput({}, 'minecraft:diamond', '#forge:gems/diamond', true);
    event.replaceInput({}, 'minecraft:emerald', '#forge:gems/emerald', true);
    event.replaceInput({}, 'minecraft:chest', '#forge:chests/wooden', true);
    event.replaceInput({}, 'minecraft:redstone', '#forge:dusts/redstone', true);
    event.replaceInput({}, 'minecraft:paper', '#forge:paper', true);
    event.replaceInput({}, 'minecraft:stone_button', '#minecraft:buttons', true);
    event.replaceInput({}, 'minecraft:bucket', '#forge:buckets', true);
    event.replaceInput({}, 'minecraft:crafting_table', '#forge:workbench', true);
    event.replaceInput({}, 'immersiveengineering:hammer', '#forge:tools/hammer', true);
    event.replaceInput({}, 'emendatusenigmatica:enigmatic_hammer', '#forge:tools/hammer', true);
    event.replaceInput({}, 'minecraft:hopper', '#forge:tools/hopper', true);
    event.replaceInput({}, 'minecraft:piston', '#forge:piston', true);
});