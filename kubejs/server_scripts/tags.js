// Listen to item tag event
//priority: 1000
onEvent('item.tags', event => {

//removed
  event.remove('forge:leather', 'forbidden_arcanus:rotten_leather')
  event.remove('forge:nether_stars', 'forbidden_arcanus:dark_nether_star')
  event.remove('appliedenergistics2:workbench', 'minecraft:crafting_table')
  event.remove('refinedstorage:crafting_tables', 'minecraft:crafting_table')
  event.remove('forge:dusts/netherite_scrap', 'bloodmagic:sand_netherite')

//dust tags
  event.add('forge:dusts/certus_quartz', ['appliedenergistics2:certus_quartz_dust'])

//tool tags
  event.add('forge:furnaces', ['/.+_furnace/']);
  event.add('forge:hoes', ['/.+_hoe/', '/.+:hoe_.+/']);
  event.add('forge:axes', ['/.+_axe/', '/.+_paxel/', '/.+:axe_.+/']);
  event.add('forge:pickaxes', ['/.+_pickaxe/', '/.+_paxel/', '/.+:pickaxe_.+/'])
  event.add('forge:shovels', ['/.+_shovel/', '/.+_paxel/', '/.+:shovel_.+/'])
  event.add('forge:swords', ['/.+_sword/', '/.+:sword_.+/'])
  event.add('forge:tools/knife', ['/.+_knife/'])
  event.add('forge:tools/hammer', ['/.+hammer/'])
  event.add('forge:tools/hopper', ['/.+hopper/', '/.+_hopper/', '/.+_chute/'])

//fence gates
  event.add('forge:fence_gates/wooden', /.+_fence_gate/)

// rods tags
  event.add('forge:rods/iron', ['quark:iron_rod'])

//piston
  event.add('forge:piston', ['create:mechanical_piston'])

// obsidian dust tags
  event.add('forge:dusts/obsidian', ['create:powdered_obsidian'])

// workbench
  event.add('forge:workbench', ['cyclic:workbench'])

//fertilizer
  event.add('forge:fertilizer', ['create:tree_fertilizer', 'waterstrainer:fertilizer', 'botania:fertilizer', 'gardentools:fertilizer', 'mysticalagriculture:mystical_fertilizer', 'farmingforblockheads:green_fertilizer', 'farmingforblockheads:red_fertilizer', 'farmingforblockheads:yellow_fertilizer'])

})