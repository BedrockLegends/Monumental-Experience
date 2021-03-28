onEvent('recipes', event => {

  //computercraft recipes removed 
  event.remove({id: 'computercraft:computer_advanced'})

  //dust recipes removed
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_iron'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_gold'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_copper'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_aluminum'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_silver'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_lead'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_nickel'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_uranium'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_osmium'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_tin'})
  event.remove({id: 'immersiveengineering:crafting/hammercrushing_zinc'})
  event.remove({id: 'emendatusenigmatica:dust_from_ore/quartz'})
  event.remove({id: 'forbidden_arcanus:arcane_crystal_dust'})

  //glass recipes removed
  event.remove({id: 'immersiveengineering:crafting/insulating_glass'})

  //Iron Furnace upgrades recipes removed
  event.remove({id: 'ironfurnaces:gold_furnace2'})
  event.remove({id: 'ironfurnaces:iron_furnace2'})
  event.remove({id: 'ironfurnaces:obsidian_furnace2'})
  event.remove({id: 'ironfurnaces:silver_furnace2'})
  event.remove({id: 'ironfurnaces:upgrade_iron'})
  event.remove({id: 'ironfurnaces:upgrade_gold'})
  event.remove({id: 'ironfurnaces:upgrade_diamond'})
  event.remove({id: 'ironfurnaces:upgrade_emerald'})
  event.remove({id: 'ironfurnaces:upgrade_obsidian'})
  event.remove({id: 'ironfurnaces:upgrade_crystal'})
  event.remove({id: 'ironfurnaces:upgrade_netherite'})
  event.remove({id: 'ironfurnaces:upgrade_copper'})
  event.remove({id: 'ironfurnaces:upgrade_silver'})
  event.remove({id: 'ironfurnaces:upgrade_obsidian2'})
  event.remove({id: 'ironfurnaces:upgrade_iron2'})
  event.remove({id: 'ironfurnaces:upgrade_silver2'})
  event.remove({id: 'ironfurnaces:upgrade_allthemodium'})
  event.remove({id: 'ironfurnaces:upgrade_vibranium'})
  event.remove({id: 'ironfurnaces:upgrade_unobtainium'})

  //misc recipes removed
  event.remove({id: 'quantumstorage:qsu2'})
  event.remove({id: 'forbidden_arcanus:arcane_gold_ingot'})
  
  //rubber recipes removed
  event.remove({id: 'thermal:rubber_3'})
  event.remove({id: 'thermal:rubber_from_vine'})
})