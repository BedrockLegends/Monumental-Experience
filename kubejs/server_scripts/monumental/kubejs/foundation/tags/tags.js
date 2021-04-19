// Listen to item tag event
//priority: 1000
onEvent('item.tags', event => {

//removed
  event.remove('forge:leather', 'forbidden_arcanus:rotten_leather')
  event.remove('forge:clay', 'minecraft:clay')
  event.remove('forge:nether_stars', 'forbidden_arcanus:dark_nether_star')
  event.remove('forge:dusts/netherite_scrap', 'bloodmagic:sand_netherite')

//dust tags
  event.add('forge:dusts/certus_quartz', ['appliedenergistics2:certus_quartz_dust'])

// hammer tags
  event.add('forge:tools/hammer', ['emendatusenigmatica:enigmatic_hammer', 'immersiveengineering:hammer', 'blockcarpentry:hammer', 'engineerstools:crushing_hammer', 'gobber2:gobber2_hammer', 'gobber2:gobber2_hammer_nether', 'gobber2:gobber2_hammer_end', 'woot:hammer', 'quantumstorage:hammer'])

//piston
  event.add('forge:piston', ['create:mechanical_piston', 'minecraft:piston'])

//piston sticky
  event.add('forge:piston/sticky', ['create:sticky_mechanical_piston', 'minecraft:sticky_piston'])

// dough tags
  event.add('forge:dough/dough', ['create:dough'])

//fertilizer
  event.add('forge:fertilizer', ['create:tree_fertilizer', 'waterstrainer:fertilizer', 'botania:fertilizer', 'gardentools:fertilizer', 'mysticalagriculture:mystical_fertilizer', 'farmingforblockheads:green_fertilizer', 'farmingforblockheads:red_fertilizer', 'farmingforblockheads:yellow_fertilizer'])
})