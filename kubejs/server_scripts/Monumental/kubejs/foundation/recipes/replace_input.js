onEvent('recipes', (event) => {
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:paper', '#forge:paper')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:crafting_table', '#forge:workbenches')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:hopper', '#forge:hopper')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:obsidian', '#chipped:obsidian')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:quartz_block', '#chipped:quartz_block')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:nether_bricks', '#chipped:nether_bricks')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:prismarine', '#chipped:prismarine')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:purpur_block', '#chipped:purpur_block')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone', '#chipped:stone')
});
