//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//RECIPE CHANGING
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
//Applied energistics silicon
	//Remove original recipe
	event.remove({id: 'appliedenergistics2:smelting/silicon'})
	event.remove({id: 'extradisks:raw_withering_processor'})
	//Add new recipe
	event.replaceInput({type: 'appliedenergistics2:inscriber'}, 'appliedenergistics2:silicon', '#forge:silicon')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'refinedstorage:silicon', '#forge:silicon')
	event.replaceInput({type: 'refinedstorage'}, 'refinedstorage:silicon', '#forge:silicon')
	event.replaceInput({type: 'refinedstorage:*'}, 'refinedstorage:silicon', '#forge:silicon')

	//Adding that one fucking annoying Extradisks items i just couldnt get to work the right way...
	//Not gonna lie this pissed me off so much.
	event.shaped('extradisks:raw_withering_processor', [
		'PN ',
		'SR ',
		'   '
	], {
		P: 'refinedstorage:processor_binding',
		N: '#forge:nether_stars',
		S: '#forge:silicon',
		R: '#forge:dusts/redstone'
	})

//
//fin
//
})