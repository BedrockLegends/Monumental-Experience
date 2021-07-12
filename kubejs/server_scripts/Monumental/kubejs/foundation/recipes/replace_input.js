onEvent('recipes', (event) => {
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:paper', '#forge:paper')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:crafting_table', '#forge:workbenches')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:hopper', '#forge:hopper')
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:obsidian', '#chipped:obsidian')
});
