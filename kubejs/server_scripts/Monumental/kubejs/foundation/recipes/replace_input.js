onEvent('recipes', (event) => {
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:paper', '#forge:paper')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:crafting_table', '#forge:workbenches')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:hopper', '#forge:hopper')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:obsidian', '#forge:obsidian')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:quartz_block', '#chipped:quartz_block')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:nether_bricks', '#chipped:nether_bricks')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:prismarine', '#chipped:prismarine')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:purpur_block', '#chipped:purpur_block')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone', '#forge:stone')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:cobblestone', '#forge:cobblestone')
  event.replaceInput({type: 'minecraft:crafting_shaped' }, 'minecraft:netherrack', '#forge:netherrack');
  event.replaceInput({}, 'architects_palette:withered_bone', '#forge:witherbone');
  event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag');
  event.replaceInput({}, 'thermal:slag', '#forge:slag');
  event.replaceInput({}, 'betterendforge:ender_dust', '#forge:dusts/ender');
  event.replaceInput({}, 'tconstruct:cobalt_nugget', '#forge:nuggets/cobalt');
  event.replaceInput({}, 'minecraft:nether_bricks', '#forge:netherbricks');
  event.replaceInput({id: 'dustrial_decor:sheet_metal' }, '#forge:ingots/iron', '#forge:plates/iron');
});
