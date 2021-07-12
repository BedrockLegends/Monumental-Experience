onEvent('recipes', event => {
//Project Vibrant Journeys
event.shaped(Item.of('projectvibrantjourneys:bones', 8), ["AAA", "A A", "AAA"], {
    A: '#forge:bones'
})
event.shaped(Item.of('projectvibrantjourneys:charred_bones', 8), ["AAA", "ABA", "AAA"], {
    A: '#forge:bones',
    B: '#forge:charcoal'
})
event.shaped(Item.of('projectvibrantjourneys:seashells', 8), ["AAA", "ABA", "AAA"], {
    A: '#forge:dusts/prismarine',
    B: 'minecraft:nautilus_shell'
})
//scanables
event.shaped(Item.of('scannable:module_blank', 1), ["ggg", "crc", "qnq"], {
    g: 'immersiveengineering:insulating_glass',
    c: 'modularrouters:blank_module',
    q: '#forge:plates/wooden',
    n: 'immersiveengineering:wirecoil_electrum',
    r: '#forge:dusts/glowstone'
})
//create additions
event.shaped(Item.of('createaddition:spool', 8), [" A ", " B ", " A "], {
    A: '#forge:treated_wood_slab',
    B: '#forge:rods/iron'
})
//DruidCraft
event.shaped(Item.of('druidcraft:elder_pressure_plate', 1), [" A ", " B ", " B "], {
    A: 'druidcraft:elder_planks',
    B: 'immersiveengineering:hammer'
})
//Enviro Core
event.shaped(Item.of('envirocore:obsidian_plate', 4), ["AA ", "AA ", "   "], {
    A: '#forge:ingots/obsidian'
})
//Ranged Pumps
event.shaped(Item.of('rangedpumps:pump', 1), ["OPO", "LDL", "OPO"], {
    O: '#forge:plates/steel',
    P: 'minecraft:diamond_pickaxe',
    L: '#forge:ingots/obsidian',
    D: 'immersiveengineering:fluid_pump',
})
//Modular Routers
event.shaped(Item.of('modularrouters:blank_module', 2), ["SRS", "PPP", "GGG"], {
    R: 'extendedcrafting:redstone_ingot',
    P: '#forge:paper',
    G: '#forge:plates/gold',
    S: 'create:andesite_alloy',
})
event.shaped(Item.of('modularrouters:blank_upgrade', 2), ["PPG", "PLG", "SPG"], {
    P: '#forge:paper',
    L: '#forge:gears/lapis',
    G: '#forge:plates/gold',
    S: 'create:andesite_alloy',
})
event.shaped(Item.of('modularrouters:item_router', 4), ["IBI", "BMB", "IBI"], {
    I: '#forge:plates/steel',
    M: 'modularrouters:blank_module',
    B: '#forge:sheetmetals/steel'
})
//Extended Crafting   
event.shaped(Item.of('extendedcrafting:advanced_table', 1), ['CDC', 'ABA', 'CDC'], {
    A: '#forge:plates/gold',
    B: 'extendedcrafting:basic_table',
    C: 'extendedcrafting:advanced_component',
    D: 'extendedcrafting:advanced_catalyst'
})
event.shaped(Item.of('extendedcrafting:basic_table', 1), ['CDC', 'ABA', 'CDC'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:craftingtable',
    C: 'extendedcrafting:basic_component',
    D: 'extendedcrafting:basic_catalyst'
})
event.shaped(Item.of('extendedcrafting:black_iron_slate', 1), [' B ', ' A ', ' A '], {
    A: 'extendedcrafting:black_iron_ingot',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('extendedcrafting:basic_table', 1), ['CDC', 'ABA', 'CDC'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:craftingtable',
    C: 'extendedcrafting:basic_component',
    D: 'extendedcrafting:basic_catalyst'
})
//Building Gadgets
event.shaped(Item.of('buildinggadgets:gadget_building', 1), ["AEA", "DBD", "ACA"], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:plates/lapis_lazuli',
    D: '#forge:gears/diamond',
    E: 'create:electron_tube'
})
event.shaped(Item.of('buildinggadgets:gadget_copy_paste', 1), ["AEA", "DBD", "ACA"], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:plates/lapis_lazuli',
    D: '#forge:gears/emerald',
    E: 'create:electron_tube'
})
event.shaped(Item.of('buildinggadgets:gadget_destruction', 1), ["AEA", "DBD", "ACA"], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:plates/lapis_lazuli',
    D: '#forge:dusts/ender_pearl',
    E: 'create:electron_tube'
})
event.shaped(Item.of('buildinggadgets:gadget_exchanging', 1), ["AEA", "DBD", "ACA"], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:plates/lapis_lazuli',
    D: '#forge:gears/diamond',
    E: 'create:electron_tube'
})
//Quantum Storage
event.shaped(Item.of('quantumstorage:qsu', 1), ["ACA", "AQA", "ACA"], {
    A: '#forge:plates/steel',
    Q: 'storagedrawers:emerald_storage_upgrade',
    C: 'quantumstorage:chestdiamond'
})
event.shaped(Item.of('quantumstorage:tank', 1), ["AEA", "ACA", "AEA"], {
    A: '#forge:plates/steel',
    C: 'create:fluid_tank',
    E: 'cyclic:tank'
})
//Waystones
event.shaped(Item.of('waystones:return_scroll', 3), ["GEG", "PPP"], {
    G: 'naturesaura:tainted_gold',
    E: '#forge:dyes/purple',
    P: '#forge:paper'
})
event.shaped(Item.of('waystones:bound_scroll', 3), ["DDD", "GEG", "PPP"], {
    D: '#forge:dyes/purple',
    G: 'naturesaura:tainted_gold',
    E: 'botania:mana_pearl',
    P: '#forge:paper'
})
event.shaped(Item.of('waystones:warp_scroll', 3), ["GDG", "GEG", "PPP"], {
    G: 'naturesaura:tainted_gold',
    E: 'botania:mana_pearl',
    P: '#forge:paper',
    D: '#forge:dyes/purple'
})
//Wooden Utils
event.shaped(Item.of('woodenutilities:crafting_slab', 1), ["_e_"], {
    e: '#forge:plates/wooden',
    _: '#minecraft:wooden_slabs'
})
event.shaped(Item.of('woodenutilities:wooden_plate', 1), [" $ ", " S ", " S "], {
    S: '#minecraft:planks',
    $: 'immersiveengineering:hammer'
})
event.shaped(Item.of('woodenutilities:wooden_plate', 1), [" $ ", " S ", " S "], {
    S: '#minecraft:planks',
    $: 'emendatusenigmatica:enigmatic_hammer'
})
event.shaped(Item.of('woodenutilities:wooden_furnace', 1), ["BIB", "ISI", "BIB"], {
    B: '#minecraft:logs',
    S: '#minecraft:coals',
    I: '#minecraft:planks'
})
event.shaped(Item.of('woodenutilities:wooden_hopper', 1), ["W W", "WCW", " W "], {
    W: '#forge:plates/wooden',
    C: '#forge:rods/wooden'
})
event.shaped(Item.of('woodenutilities:wooden_shears', 1), ["W ", "SW"], {
    W: '#minecraft:planks',
    S: '#forge:rods/wooden'
})
//appliedenergistics2
event.shaped(Item.of('appliedenergistics2:quartz_growth_accelerator', 1), ["aba", "cdc", "aba"], {
    c: 'appliedenergistics2:quartz_glass',
    a: 'contenttweaker:compressed_plate',
    b: 'appliedenergistics2:fluix_glass_cable',
    d: '#forge:storage_blocks/fluix'
})
event.shaped(Item.of('appliedenergistics2:quantum_ring', 1), ["aba", "cde", "aba"], {
    c: 'appliedenergistics2:engineering_processor',
    e: 'appliedenergistics2:fluix_smart_dense_cable',
    a: 'contenttweaker:compressed_plate',
    d: 'appliedenergistics2:energy_cell',
    b: 'appliedenergistics2:logic_processor'
})
event.shaped(Item.of('appliedenergistics2:crafting_unit', 1), ["aba", "cdc", "aba"], {
    a: 'contenttweaker:compressed_plate',
    d: 'appliedenergistics2:logic_processor',
    c: 'appliedenergistics2:fluix_glass_cable',
    b: 'appliedenergistics2:calculation_processor'
})
event.shaped(Item.of('appliedenergistics2:blank_pattern', 2), ["ABA", "BCB", "DDD"], {
    A: 'appliedenergistics2:quartz_glass',
    B: '#forge:ingots/refined_glowstone',
    C: 'appliedenergistics2:charged_certus_quartz_crystal',
    D: 'contenttweaker:compressed_plate'
})
event.shaped(Item.of('appliedenergistics2:fluid_export_bus', 1), ["aca", "lbl"], {
    a: 'contenttweaker:compressed_plate',
    b: 'appliedenergistics2:formation_core',
    c: '#forge:piston',
    l: 'cyclic:tank'
})
event.shaped(Item.of('appliedenergistics2:import_bus', 1), [" a ", "bcb"], {
    a: 'appliedenergistics2:annihilation_core',
    b: 'contenttweaker:compressed_plate',
    c: '#forge:piston'
})
event.shaped(Item.of('appliedenergistics2:fluid_import_bus', 1), ["lal", "bcb"], {
    a: 'appliedenergistics2:annihilation_core',
    b: 'contenttweaker:compressed_plate',
    c: '#forge:piston',
    l: 'cyclic:tank'
})
event.shaped(Item.of('appliedenergistics2:annihilation_plane', 1), ["aaa", "bcb"], {
    a: '#forge:gems/fluix',
    b: 'contenttweaker:compressed_plate',
    c: 'appliedenergistics2:annihilation_core'
})
event.shaped(Item.of('appliedenergistics2:annihilation_plane', 1), ["ab", "cb", "ab"], {
    a: '#forge:gems/fluix',
    b: 'contenttweaker:compressed_plate',
    c: 'appliedenergistics2:annihilation_core'
})
event.shaped(Item.of('appliedenergistics2:formation_plane', 1), ["aaa", "bcb"], {
    a: '#forge:gems/fluix',
    b: '#forge:plates/enderium',
    c: 'appliedenergistics2:formation_core'
})
event.shaped(Item.of('appliedenergistics2:formation_plane', 1), ["ab", "cb", "ab"], {
    a: '#forge:gems/fluix',
    b: '#forge:plates/enderium',
    c: 'appliedenergistics2:formation_core'
})
event.shaped(Item.of('appliedenergistics2:export_bus', 1), ["aba", " c "], {
    a: 'contenttweaker:compressed_plate',
    b: 'appliedenergistics2:formation_core',
    c: '#forge:piston'
})
//Xnet
event.shaped(Item.of('xnet:advanced_connector_blue', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/blue',
    B: 'xnet:advanced_connector_routing'
})
event.shaped(Item.of('xnet:advanced_connector_green', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/green',
    B: 'xnet:advanced_connector_routing'
})
event.shaped(Item.of('xnet:advanced_connector_red', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/red',
    B: 'xnet:advanced_connector_routing'
})
event.shaped(Item.of('xnet:advanced_connector_yellow', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/yellow',
    B: 'xnet:advanced_connector_routing'
})
event.shaped(Item.of('xnet:connector_blue', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/blue',
    B: 'xnet:connector_routing'
})
event.shaped(Item.of('xnet:connector_green', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/green',
    B: 'xnet:connector_routing'
})
event.shaped(Item.of('xnet:connector_red', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/red',
    B: 'xnet:connector_routing'
})
event.shaped(Item.of('xnet:connector_yellow', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/yellow',
    B: 'xnet:connector_routing'
})
event.shaped(Item.of('xnet:netcable_blue', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/blue',
    B: 'xnet:netcable_routing'
})
event.shaped(Item.of('xnet:netcable_green', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/green',
    B: 'xnet:netcable_routing'
})
event.shaped(Item.of('xnet:netcable_red', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/red',
    B: 'xnet:netcable_routing'
})
event.shaped(Item.of('xnet:netcable_yellow', 1), [" A ", "ABA", " A "], {
    A: '#forge:dyes/yellow',
    B: 'xnet:netcable_routing'
})
event.shaped(Item.of('xnet:advanced_connector_routing', 1), ["AB ", "CD ", "   "], {
    A: 'xnet:connector_routing',
    B: 'minecraft:ender_eye',
    C: '#forge:plates/diamond',
    D: 'extendedcrafting:redstone_component'
})
event.shaped(Item.of('xnet:connector_routing', 1), ["AAA", "BCB", "AAA"], {
    A: '#thermal:rockwool',
    B: 'immersiveengineering:wirecoil_electrum',
    C: 'xnet:netcable_routing'
})
//computercraft
event.shaped(Item.of('computercraft:computer_advanced', 1), ["AAA", "ABA", "ACA"], {
    A: '#forge:plates/electrum',
    B: 'computercraft:computer_normal',
    C: '#forge:gears/electrum'
})
event.shaped(Item.of('computercraft:turtle_advanced', 1), ["AAA", "ABA", "ACA"], {
    A: '#forge:plates/electrum',
    B: 'computercraft:turtle_normal',
    C: '#forge:gears/electrum'
})
event.shaped(Item.of('computercraft:turtle_normal', 1), ["AAA", "ABA", "ACA"], {
    A: '#forge:plates/steel',
    B: 'computercraft:computer_normal',
    C: 'immersiveengineering:reinforced_crate'
})
//Emendatus Enigmatica
event.shaped(Item.of('emendatusenigmatica:diamond_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:gems/diamond',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:emerald_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:gems/emerald',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:lapis_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:gems/emerald',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:aluminum_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/aluminum',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:brass_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/brass',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:bronze_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/bronze',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:constantan_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/constantan',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:copper_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/copper',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:electrum_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/electrum',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:enderium_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/enderium',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:gold_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/gold',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:invar_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/invar',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:iron_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/iron',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:lead_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/lead',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:lumium_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/lumium',
    B: '#forge:tools/wrenches'
});
event.shaped(Item.of('emendatusenigmatica:nickel_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/nickel',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:osmium_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/osmium',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:signalum_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/signalum',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:silver_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/silver',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:steel_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/steel',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:tin_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/tin',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:uranium_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/uranium',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:zinc_plate', 2), ["   ", "BAA", " AA"], {
    A: '#forge:ingots/zinc',
    B: '#forge:tools/wrenches'
})
event.shaped(Item.of('emendatusenigmatica:aluminum_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/aluminum',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:brass_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/brass',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:bronze_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/bronze',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:constantan_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/constantan',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:copper_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/copper',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:electrum_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/electrum',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:quartz_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:gems/quartz',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:lapis_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:gems/lapis',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:diamond_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:gems/diamond',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:emerald_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:gems/emerald',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:enderium_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/enderium',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:gold_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/gold',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:invar_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/invar',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:iron_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/iron',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:lead_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/lead',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:lumium_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/lumium',
    B: 'create:andesite_alloy'
});
event.shaped(Item.of('emendatusenigmatica:nickel_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/nickel',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:osmium_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/osmium',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:signalum_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/signalum',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:tin_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/tin',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:uranium_gear', 1), [' A ', 'ABA', ' A '], {
    A: '#forge:ingots/uranium',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:zinc_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/zinc',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:steel_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/steel',
    B: 'create:andesite_alloy'
})
event.shaped(Item.of('emendatusenigmatica:silver_gear', 1), [" A ", "ABA", " A "], {
    A: '#forge:ingots/silver',
    B: 'create:andesite_alloy'
})
//Mekanism
event.shaped(Item.of('mekanismgenerators:solar_panel', 1), ["GGG", "RAR", "OOO"], {
    G: 'appliedenergistics2:quartz_glass',
    O: '#forge:plates/osmium',
    R: 'extendedcrafting:redstone_ingot',
    A: '#mekanism:alloys/infused',
})
event.shaped(Item.of('mekanismgenerators:electromagnetic_coil', 1), ["SIS", "IEI", "SIS"], {
    S: '#forge:ingots/steel',
    I: '#forge:plates/electrum',
    E: 'mekanism:energy_tablet'
})
event.shaped(Item.of('mekanismgenerators:reactor_glass', 4), ["SIS", "IEI", "SIS"], {
    S: 'appliedenergistics2:quartz_glass',
    I: '#forge:ingots/lead',
    E: 'mekanism:enriched_iron'
})
event.shaped(Item.of('mekanismgenerators:fusion_reactor_controller', 1), ["CGC", "FTF", "FFF"], {
    C: '#forge:circuits/ultimate',
    G: 'appliedenergistics2:quartz_vibrant_glass',
    F: 'mekanismgenerators:fusion_reactor_frame',
    T: 'mekanism:basic_chemical_tank'
})
event.shaped(Item.of('mekanismgenerators:bio_generator', 1), ["RAR", "BCB", "IAI"], {
    R: 'extendedcrafting:redstone_component',
    A: '#mekanism:alloys/infused',
    I: 'contenttweaker:compressed_plate',
    C: '#forge:circuits/basic',
    B: '#forge:fuels/bio'
})
event.shaped(Item.of('mekanism:configurator', 1), [" AI", " EA", "S  "], {
    E: 'mekanism:energy_tablet',
    A: '#mekanism:alloys/infused',
    I: '#forge:gears/lapis',
    S: '#forge:rods/steel'
})
//Minecraft
event.shaped(Item.of('minecraft:string', 3), ['AA', 'A '], {
    A: 'supplementaries:flax'
})
event.shaped(Item.of('minecraft:anvil', 1), [" A ", " B ", "BBB"], {
    A: '#forge:storage_blocks/compressed_iron',
    B: '#forge:plates/iron'
})
event.shaped(Item.of('minecraft:chest', 1), ["LLL", "L L", "LLL"], {
    L: '#minecraft:logs'
})
event.shaped(Item.of('minecraft:compass', 1), [" S ", "SQS", " S "], {
    Q: 'extendedcrafting:redstone_ingot',
    S: '#forge:plates/iron',
})
event.shaped(Item.of('minecraft:hopper', 1), ["L L", "LXL", " L "], {
    X: 'woodenutilities:wooden_hopper',
    L: '#forge:plates/iron'
})
event.shaped(Item.of('minecraft:piston', 1), ["TTT", "PXP", "PRP"], {
    R: 'extendedcrafting:redstone_ingot',
    P: 'immersiveengineering:concrete',
    T: '#forge:plates/wooden',
    X: '#forge:gears/iron',
})
event.shaped(Item.of('minecraft:sticky_piston', 1), ["TTT", "PXP", "PRP"], {
    R: 'extendedcrafting:redstone_ingot',
    P: 'immersiveengineering:concrete',
    T: '#forge:plates/wooden',
    X: '#forge:slimeballs',
})
//BYG
event.shaped(Item.of('byg:pollen_block', 1), ["AA", "AA"], {
    A: 'byg:pollen_dust'
})
event.shaped(Item.of('byg:embur_hyphae', 3), ["AA", "AA"], {
    A: 'byg:embur_pedu'
})
event.shaped(Item.of('byg:aspen_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:aspen_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:baobab_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:baobab_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:blue_enchanted_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:blue_enchanted_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:bulbis_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:bulbis_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:cherry_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:cherry_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:cika_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:cika_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:cypress_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:cypress_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:ebony_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:ebony_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:ether_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:ether_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:fir_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:fir_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:green_enchanted_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:green_enchanted_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:holly_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:holly_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:jacaranda_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:jacaranda_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:lament_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:lament_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:mahogany_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:mahogany_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:mangrove_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:mangrove_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:maple_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:maple_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:nightshade_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:nightshade_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:palm_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:palm_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:pine_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:pine_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:rainbow_eucalyptus_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:rainbow_eucalyptus_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:redwood_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:redwood_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:skyris_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:skyris_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:sythian_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:sythian_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:willow_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:willow_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:witch_hazel_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:witch_hazel_planks',
    B: 'immersiveengineering:hammer'
})
event.shaped(Item.of('byg:zelkova_pressure_plate', 1), [" A ", " A ", " B "], {
    A: 'byg:zelkova_planks',
    B: 'immersiveengineering:hammer'
})
//Pneumaticcraft
event.shaped(Item.of('pneumaticcraft:compressed_iron_gear', 1), [" C ", "CIC", " C "], {
    C: '#forge:ingots/compressed_iron',
    I: 'create:andesite_alloy'
})
event.shaped(Item.of('pneumaticcraft:air_compressor', 1), ["III", "ITI", "IFI"], {
    I: '#pneumaticcraft:reinforced_stone_bricks',
    T: 'pneumaticcraft:pressure_tube',
    F: 'routerreborn:furnace'
})
event.shaped(Item.of('pneumaticcraft:gps_tool', 1), ["SRS", "PGP", "PDP"], {
    R: 'extendedcrafting:redstone_ingot',
    P: '#forge:paper',
    G: 'immersiveengineering:insulating_glass',
    D: '#forge:gears/diamond',
    S: 'immersiveengineering:wirecoil_redstone'
})
event.shaped(Item.of('pneumaticcraft:heat_sink', 1), ["BBB", "IGI"], {
    B: 'immersiveengineering:toolupgrade_railgun_capacitors',
    I: '#forge:ingots/compressed_iron',
    G: '#forge:gears/electrum'
})
event.shaped(Item.of('pneumaticcraft:pressure_gauge', 1), [" G ", "GIG", " G "], {
    I: '#forge:plates/gold',
    G: '#forge:ingots/compressed_iron'
})
event.shaped(Item.of('pneumaticcraft:pressure_tube', 8), ["IGI"], {
    I: 'pneumaticcraft:compressed_iron_gear',
    G: '#forge:glass'
})
event.shaped(Item.of('pneumaticcraft:refinery', 1), ["SXS", "XTX", "SAS"], {
    S: '#forge:ingots/compressed_iron',
    T: '#forge:tank',
    A: 'immersiveengineering:circuit_board',
    X: 'extendedcrafting:redstone_component'
})
event.shaped(Item.of('pneumaticcraft:refinery_output', 1), ["SSS", "GDG", "SSS"], {
    S: 'pneumaticcraft:reinforced_stone_slab',
    G: 'immersiveengineering:insulating_glass',
    D: '#forge:gears/diamond'
})
event.shaped(Item.of('pneumaticcraft:small_tank', 1), ["BIB", "IGI", "BIB"], {
    B: '#forge:ingots/obsidian',
    I: '#forge:ingots/compressed_iron',
    G: 'cyclic:tank'
})
event.shaped(Item.of('pneumaticcraft:vortex_tube', 1), ["ITI", "GSG", "ITI"], {
    I: '#forge:ingots/compressed_iron',
    T: 'pneumaticcraft:pressure_tube',
    G: '#forge:plates/gold',
    S: 'pneumaticcraft:compressed_iron_gear'
})
//mcwfurnitures
event.shaped(Item.of('mcwfurnitures:acacia_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:acacia_logs',
    X: 'immersiveengineering:hammer'
})
event.shaped(Item.of('mcwfurnitures:birch_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:birch_logs',
    X: 'immersiveengineering:hammer'
})
event.shaped(Item.of('mcwfurnitures:oak_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:oak_logs',
    X: 'immersiveengineering:hammer'
})
event.shaped(Item.of('mcwfurnitures:spruce_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:spruce_logs',
    X: 'immersiveengineering:hammer'
})
event.shaped(Item.of('mcwfurnitures:jungle_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:jungle_logs',
    X: 'immersiveengineering:hammer'
})
event.shaped(Item.of('mcwfurnitures:dark_oak_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:dark_oak_logs',
    X: 'immersiveengineering:hammer'
})
event.shaped(Item.of('mcwfurnitures:crimson_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:crimson_stems',
    X: 'immersiveengineering:hammer'
})
event.shaped(Item.of('mcwfurnitures:warped_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:warped_stems',
    X: 'immersiveengineering:hammer'
})
event.shaped(Item.of('mcwfurnitures:acacia_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:acacia_logs',
    X: 'emendatusenigmatica:enigmatic_hammer'
})
event.shaped(Item.of('mcwfurnitures:birch_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:birch_logs',
    X: 'emendatusenigmatica:enigmatic_hammer'
})
event.shaped(Item.of('mcwfurnitures:oak_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:oak_logs',
    X: 'emendatusenigmatica:enigmatic_hammer'
})
event.shaped(Item.of('mcwfurnitures:spruce_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:spruce_logs',
    X: 'emendatusenigmatica:enigmatic_hammer'
})
event.shaped(Item.of('mcwfurnitures:jungle_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:jungle_logs',
    X: 'emendatusenigmatica:enigmatic_hammer'
})
event.shaped(Item.of('mcwfurnitures:dark_oak_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:dark_oak_logs',
    X: 'emendatusenigmatica:enigmatic_hammer'
})
event.shaped(Item.of('mcwfurnitures:crimson_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:crimson_stems',
    X: 'emendatusenigmatica:enigmatic_hammer'
})
event.shaped(Item.of('mcwfurnitures:warped_plate', 1), [" X ", " W ", " W "], {
    W: '#minecraft:warped_stems',
    X: 'emendatusenigmatica:enigmatic_hammer'
})
//Speedy Ladders
event.shaped(Item.of('speedyladders:diamond_ladder', 2), ["NLN", "NLN", "NLN"], {
    L: 'speedyladders:gold_ladder',
    N: '#forge:rods/diamond'
})
event.shaped(Item.of('speedyladders:gold_ladder', 2), ["NLN", "NLN", "NLN"], {
    L: 'speedyladders:iron_ladder',
    N: '#forge:rods/gold'
})
event.shaped(Item.of('speedyladders:iron_ladder', 2), ["NLN", "NLN", "NLN"], {
    L: 'speedyladders:stone_ladder',
    N: '#forge:rods/iron'
})
event.shaped(Item.of('speedyhoppers:speedyhopper_mk1', 1), ["A A", "ASA", " A "], {
    A: '#forge:plates/iron',
    S: '#forge:hopper'
})
event.shaped(Item.of('speedyhoppers:speedyhopper_mk2', 1), ["A A", "ASA", " A "], {
    A: '#forge:plates/gold',
    S: 'speedyhoppers:speedyhopper_mk1'
})
event.shaped(Item.of('speedyhoppers:speedyhopper_mk3', 1), ["A A", "ASA", " A "], {
    A: '#forge:plates/diamond',
    S: 'speedyhoppers:speedyhopper_mk2'
})
//Router Reborn
event.shaped(Item.of('routerreborn:barrel_t1', 1), ["lll", "iwi", "lll"], {
    i: '#forge:ingots/steel',
    l: '#forge:plates/steel',
    w: 'storagedrawers:oak_full_drawers_1'
})
event.shaped(Item.of('routerreborn:barrel_t2', 1), ["lll", "iwi", "lll"], {
    i: '#forge:plates/electrum',
    l: '#forge:ingots/electrum',
    w: 'routerreborn:barrel_t1'
})
event.shaped(Item.of('routerreborn:barrel_t3', 1), ["lll", "iwi", "lll"], {
    i: 'minecraft:ender_eye',
    l: '#forge:plates/steel',
    w: 'routerreborn:barrel_t2'
})
event.shaped(Item.of('routerreborn:itemconduit', 9), ["iii", "cRc", "iii"], {
    i: '#forge:plates/steel',
    R: 'refinedpipes:basic_item_pipe',
    c: '#forge:gears/bronze'
})
event.shaped(Item.of('routerreborn:energyconduit', 9), ["iii", "cRc", "iii"], {
    i: '#forge:plates/steel',
    R: 'refinedpipes:basic_energy_pipe',
    c: '#forge:gears/bronze'
})
event.shaped(Item.of('routerreborn:furnace', 1), ["iii", "ifi", "ici"], {
    i: '#forge:plates/iron',
    f: 'ironfurnaces:iron_furnace',
    c: 'routerreborn:coppercoil'
});
event.shaped(Item.of('routerreborn:generator', 1), ["iii", "cbc", "sas"], {
    i: '#forge:plates/steel',
    b: '#forge:gears/steel',
    s: '#forge:sheetmetals/steel',
    c: 'routerreborn:coppercoil',
    a: 'immersiveengineering:circuit_board'
})
event.shaped(Item.of('routerreborn:harvester', 1), ["iii", "cbc", "iii"], {
    i: '#forge:plates/steel',
    b: 'minecraft:diamond_hoe',
    c: 'routerreborn:coppercoil'
})
event.shaped(Item.of('routerreborn:quarry', 1), ["isi", "cac", "ibi"], {
    i: '#forge:plates/iron',
    b: 'minecraft:diamond_pickaxe',
    s: 'immersiveengineering:pickaxe_steel',
    c: 'routerreborn:coppercoil',
    a: '#forge:gears/steel'
})
event.shaped(Item.of('routerreborn:routerconduit', 3), ["   ", "cac", "   "], {
    c: 'immersiveengineering:insulating_glass',
    a: 'routerreborn:itemconduit'
})
event.shaped(Item.of('routerreborn:treefarm', 1), ["iii", "cbc", "iii"], {
    i: '#forge:plates/steel',
    b: 'minecraft:diamond_axe',
    c: 'routerreborn:coppercoil'
})
//Thermal
event.shaped(Item.of('thermal:rf_coil', 1), ["WPQ", "PXP", "QPW"], {
    P: 'extendedcrafting:redstone_component',
    X: '#forge:gears/electrum',
    W: 'immersiveengineering:wirecoil_redstone',
    Q: '#forge:rods/electrum'
})
event.shaped(Item.of('thermal:redstone_servo', 1), ["WRW", "EIE", "WRW"], {
    I: '#forge:gears/iron',
    R: '#forge:plates/steel',
    E: 'immersiveengineering:wirecoil_redstone',
    W: 'extendedcrafting:redstone_component'
})
event.shaped(Item.of('thermal:energy_cell_frame', 1), ["IGI", "GEG", "IGI"], {
    G: '#thermal:glass/hardened',
    I: '#forge:plates/lead',
    E: '#forge:gears/electrum'
})
event.shaped(Item.of('thermal:fluid_cell_frame', 1), ["IGI", "GEG", "IGI"], {
    G: '#thermal:glass/hardened',
    I: '#forge:plates/bronze',
    E: '#forge:gears/bronze'
})
event.shaped(Item.of('thermal:energy_cell', 1), ["RXR", "ICI", "RPR"], {
    C: 'thermal:energy_cell_frame',
    I: '#forge:sheetmetals/steel',
    P: 'thermal:rf_coil',
    R: 'thermal:cured_rubber',
    X: 'extendedcrafting:redstone_catalyst'
})
event.shaped(Item.of('thermal:fluid_cell', 1), ["RXR", "ICI", "RPR"], {
    C: 'thermal:energy_cell_frame',
    I: '#forge:sheetmetals/steel',
    P: 'thermal:redstone_servo',
    R: 'thermal:cured_rubber',
    X: '#thermal:glass/hardened'
})
event.shaped(Item.of('thermal:flux_capacitor', 1), ["RSR", "LPL", "RQR"], {
    L: '#forge:plates/lead',
    P: 'thermal:rf_coil',
    R: 'extendedcrafting:redstone_component',
    Q: 'extendedcrafting:redstone_catalyst',
    S: '#forge:gears/lead'
})
event.shaped(Item.of('thermal:flux_magnet', 1), ["IRI", "LWL", "SPS"], {
    L: '#forge:plates/lead',
    I: '#forge:plates/steel',
    P: 'thermal:rf_coil',
    R: 'extendedcrafting:redstone_catalyst',
    S: 'extendedcrafting:redstone_component',
    W: '#forge:gears/steel'
})
event.shaped(Item.of('thermal:press_gear_die', 1), [" P ", "PXP", " P "], {
    P: '#forge:plates/invar',
    X: '#forge:plates/bronze'
})
event.shaped(Item.of('thermal:upgrade_augment_1', 1), ["IGI", "RXR", "IGI"], {
    G: '#thermal:glass/hardened',
    I: '#forge:plates/invar',
    R: 'extendedcrafting:redstone_catalyst',
    X: '#forge:gears/electrum'
})
event.shaped(Item.of('thermal:upgrade_augment_2', 1), ["IGI", "RXR", "IGI"], {
    G: 'create:polished_rose_quartz',
    I: '#forge:plates/electrum',
    R: '#forge:gears/signalum',
    X: 'thermal:upgrade_augment_1'
})
event.shaped(Item.of('thermal:upgrade_augment_3', 1), ["IGI", "RXR", "IGI"], {
    G: 'thermal:enderium_glass',
    I: '#forge:plates/electrum',
    R: '#forge:gears/lumium',
    X: 'thermal:upgrade_augment_2'
})
//Rftools
event.shaped(Item.of('rftoolsutility:button_module', 1), [" X ", "rir", " Z "], {
    X: 'minecraft:stone_button',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
})
event.shaped(Item.of('rftoolsutility:clock_module', 1), [" X ", "rir", " Z "], {
    X: '#forge:clock',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
})
event.shaped(Item.of('rftoolsutility:inventory_module', 1), [" X ", "rir", " Z "], {
    X: '#forge:chests',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
})
event.shaped(Item.of('rftoolsutility:machineinformation_module', 1), [" X ", "rir", " Z "], {
    X: '#forge:furnace',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
})
event.shaped(Item.of('rftoolsstorage:storage_control_module', 1), [" X ", "rir", " X "], {
    X: '#forge:workbenches',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module'
})
event.shaped(Item.of('rftoolsstorage:dump_module', 1), [" X ", "rir", " X "], {
    X: '#minecraft:wooden_buttons',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module'
})
event.shaped(Item.of('rftoolsstorage:storage_module0', 1), [" C ", "gig", "qrq"], {
    g: '#forge:nuggets/gold',
    q: '#forge:gems/quartz',
    r: '#forge:dusts/redstone',
    C: '#forge:chests',
    i: 'modularrouters:blank_module'
})
event.shaped(Item.of('rftoolsutility:fluid_module', 1), [" X ", "rir", " Z "], {
    X: '#forge:bucket',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
})
event.shaped(Item.of('rftoolsutility:energy_module', 1), [" r ", "rir", " Z "], {
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
})
event.shaped(Item.of('rftoolsutility:redstone_information', 1), ["ror", "rRr", "rrr"], {
    r: '#forge:dusts/redstone',
    R: 'modularrouters:blank_module',
    o: '#forge:ender_pearls'
})
event.shaped(Item.of('rftoolsutility:redstone_module', 1), [" X ", "rir", " Z "], {
    X: 'minecraft:repeater',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
})
event.shaped(Item.of('rftoolsutility:text_module', 1), [" p ", "rir", " Z "], {
        p: '#forge:paper',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module',
        Z: '#forge:dyes/black'
})
event.shaped(Item.of('rftoolsutility:crafter1', 1), ["QTQ", "CMC", "QTQ"], {
        C: 'immersiveengineering:craftingtable',
        M: 'immersiveengineering:heavy_engineering',
        T: '#forge:plates/steel',
        Q: 'immersiveengineering:wirecoil_redstone'
})
event.shaped(Item.of('rftoolsutility:crafter2', 1), ["QTQ", "CMC", "QTQ"], {
        C: 'immersiveengineering:craftingtable',
        M: 'rftoolsutility:crafter1',
        T: '#forge:plates/steel',
        Q: 'immersiveengineering:wirecoil_redstone'
})
event.shaped(Item.of('rftoolsutility:crafter3', 1), ["QTQ", "CMC", "QTQ"], {
        C: 'immersiveengineering:craftingtable',
        M: 'rftoolsutility:crafter2',
        T: '#forge:plates/steel',
        Q: 'immersiveengineering:wirecoil_redstone'
})
event.shaped(Item.of('rftoolspower:dimensionalcell', 1), ["RdR", "PFP", "ReR"], {
        P: '#forge:dusts/prismarine',
        R: 'extendedcrafting:redstone_catalyst',
        d: '#forge:gears/diamond',
        e: '#forge:gears/emerald',
        F: 'rftoolspower:dimensionalcell_simple'
})
event.shaped(Item.of('rftoolspower:dimensionalcell_advanced', 1), ["RdR", "dKd", "RdR"], {
        K: 'rftoolspower:dimensionalcell',
        R: 'extendedcrafting:redstone_catalyst',
        d: 'rftoolsbase:infused_diamond'
})
event.shaped(Item.of('rftoolspower:powercell_card', 1), ["rgr", "gpg", "rgr"], {
        g: 'immersiveengineering:wirecoil_electrum',
        p: 'modularrouters:blank_module',
        r: 'extendedcrafting:redstone_component'
})
event.shaped(Item.of('rftoolspower:dimensionalcell_simple', 1), ["RdR", "qFq", "RdR"], {
        R: 'extendedcrafting:redstone_catalyst',
        d: '#forge:gears/diamond',
        q: 'create:polished_rose_quartz',
        F: 'rftoolsbase:machine_frame'
})
event.shaped(Item.of('rftoolscontrol:console_module', 1), ["PMP", "rir", "PzP"], {
        M: 'rftoolscontrol:card_base',
        P: '#forge:glass_panes',
        z: '#forge:dyes/black',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module'
})
event.shaped(Item.of('rftoolscontrol:craftingstation', 1), ["rMr", "CFC", "rMr"], {
        M: 'rftoolscontrol:card_base',
        C: 'immersiveengineering:craftingtable',
        r: 'immersiveengineering:wirecoil_redstone',
        F: 'immersiveengineering:heavy_engineering'
})
event.shaped(Item.of('rftoolscontrol:interaction_module', 1), ["PMP", "rir", " z "], {
        M: 'rftoolscontrol:card_base',
        z: '#forge:dyes/black',
        P: 'minecraft:stone_pressure_plate',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module'
})
event.shaped(Item.of('rftoolscontrol:node', 1), ["ror", "rFr", "rMr"], {
        M: 'rftoolscontrol:card_base',
        r: 'immersiveengineering:wirecoil_redstone',
        F: 'immersiveengineering:heavy_engineering',
        o: '#forge:ender_pearls'
})
event.shaped(Item.of('rftoolscontrol:processor', 1), ["rqr", "MFM", "rqr"], {
        M: 'rftoolscontrol:card_base',
        q: 'create:polished_rose_quartz',
        r: 'immersiveengineering:wirecoil_redstone',
        F: 'immersiveengineering:heavy_engineering'
})
event.shaped(Item.of('rftoolscontrol:programmer', 1), ["rqr", "pFp", "rsr"], {
        q: 'create:polished_rose_quartz',
        p: 'pneumaticcraft:plastic',
        r: 'immersiveengineering:wirecoil_redstone',
        F: 'immersiveengineering:heavy_engineering',
        s: 'immersiveengineering:circuit_board'
})
event.shaped(Item.of('rftoolscontrol:variable_module', 1), [" M ", "rir", " z "], {
        M: 'rftoolscontrol:card_base',
        z: '#forge:dyes/black',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module'
})
event.shaped(Item.of('rftoolscontrol:vectorart_module', 1), ["PMP", "rIr", "PzP"], {
        M: 'rftoolscontrol:card_base',
        z: '#forge:dyes/black',
        P: '#forge:glass_panes',
        I: 'modularrouters:blank_module',
        r: '#forge:dusts/redstone'
})
event.shaped(Item.of('rftoolsbuilder:shape_card_def', 1), ["pBp", "rir", "pBp"], {
        p: 'modularrouters:blank_module',
        B: 'immersiveengineering:alloybrick',
        r: 'extendedcrafting:redstone_catalyst',
        i: 'pneumaticcraft:compressed_iron_gear'
})
event.shaped(Item.of('rftoolsbase:filter_module', 1), [" h ", "rir", " p "], {
        h: '#forge:hopper',
        r: '#forge:dusts/redstone',
        p: '#forge:paper',
        i: 'modularrouters:blank_module'
})
//Refined Pipes
event.shaped(Item.of('refinedpipes:advanced_extractor_attachment', 1), ["SPS", "PIP", "SPS"], {
    I: 'refinedpipes:improved_extractor_attachment',
    P: '#forge:gears/diamond',
    S: 'create:polished_rose_quartz'
})
event.shaped(Item.of('refinedpipes:basic_extractor_attachment', 1), ["SPS", "PIP", "SPS"], {
    I: '#forge:piston',
    P: '#forge:gears/iron',
    S: '#forge:plates/iron'
})
event.shaped(Item.of('refinedpipes:improved_extractor_attachment', 1), ["SPS", "PIP", "SPS"], {
    I: 'refinedpipes:basic_extractor_attachment',
    P: '#forge:gears/gold',
    S: '#forge:plates/gold'
})
event.shaped(Item.of('refinedpipes:elite_extractor_attachment', 1), ["SPS", "PIP", "SPS"], {
    I: 'refinedpipes:advanced_extractor_attachment',
    P: '#forge:gears/emerald',
    S: '#forge:rods/blaze'
})
event.shaped(Item.of('refinedpipes:ultimate_extractor_attachment', 1), ["SPS", "PIP", "SPS"], {
    I: 'refinedpipes:elite_extractor_attachment',
    P: '#chipped:purpur_block',
    S: '#chipped:prismarine'
})
event.shaped(Item.of('refinedpipes:advanced_fluid_pipe', 3), ["DQD", "SGS", "DQD"], {
    D: '#forge:gems/diamond',
    Q: 'create:polished_rose_quartz',
    G: 'refinedpipes:improved_fluid_pipe',
    S: '#quark:slime_blocks'
})
event.shaped(Item.of('refinedpipes:ultimate_fluid_pipe', 3), ["DQD", "SGS", "DQD"], {
    D: '#chipped:purpur_block',
    Q: '#chipped:prismarine',
    G: 'refinedpipes:elite_fluid_pipe',
    S: '#quark:slime_blocks'
})
event.shaped(Item.of('refinedpipes:elite_fluid_pipe', 3), ["DQD", "SGS", "DQD"], {
    D: '#forge:gems/emerald',
    Q: '#forge:rods/blaze',
    G: 'refinedpipes:advanced_fluid_pipe',
    S: '#quark:slime_blocks'
})
event.shaped(Item.of('refinedpipes:advanced_item_pipe', 3), ["DQD", "GWG", "DQD"], {
    D: '#forge:gems/diamond',
    Q: 'create:polished_rose_quartz',
    G: 'immersiveengineering:insulating_glass',
    W: 'refinedpipes:improved_item_pipe'
})
event.shaped(Item.of('refinedpipes:basic_energy_pipe', 1), ["CCC", "GRG", "CCC"], {
    C: '#forge:plates/steel',
    G: 'immersiveengineering:insulating_glass',
    R: 'immersiveengineering:rs_engineering'
})
event.shaped(Item.of('refinedpipes:improved_energy_pipe', 2), ["CCC", "GRG", "CCC"], {
    C: '#forge:plates/gold',
    G: 'immersiveengineering:insulating_glass',
    R: 'refinedpipes:basic_energy_pipe'
})
event.shaped(Item.of('refinedpipes:basic_fluid_pipe', 1), ["CCC", "SGS", "CCC"], {
    C: '#forge:plates/steel',
    G: 'immersiveengineering:insulating_glass',
    S: '#quark:slime_blocks'
})
event.shaped(Item.of('refinedpipes:improved_fluid_pipe', 2), ["CCC", "SGS", "CCC"], {
    C: '#forge:plates/gold',
    G: 'refinedpipes:basic_fluid_pipe',
    S: '#quark:slime_blocks'
})
    event.shaped(Item.of('refinedpipes:improved_item_pipe', 2), ["CCC", "GXG", "CCC"], {
    C: '#forge:plates/gold',
    G: 'immersiveengineering:insulating_glass',
    X: 'refinedpipes:basic_item_pipe'
})
event.shaped(Item.of('refinedpipes:basic_item_pipe', 1), ["CCC", "GGG", "CCC"], {
    C: '#forge:plates/steel',
    G: 'immersiveengineering:insulating_glass'
})
//Refined Storage
event.shaped(Item.of('refinedstorage:constructor', 1), ["ECE", "RMR", "EIE"], {
    E: 'refinedstorage:quartz_enriched_iron',
    C: 'refinedstorage:construction_core',
    R: 'extendedcrafting:redstone_component',
    M: 'refinedstorage:cable',
    I: 'refinedstorage:improved_processor'
})
event.shaped(Item.of('refinedstorage:1k_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:1k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
})
event.shaped(Item.of('refinedstorage:4k_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:4k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
})
event.shaped(Item.of('refinedstorage:16k_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:16k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
})
event.shaped(Item.of('refinedstorage:64k_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:64k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
})
event.shaped(Item.of('refinedstorage:64k_fluid_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:64k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
})
event.shaped(Item.of('refinedstorage:256k_fluid_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:256k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
})
event.shaped(Item.of('refinedstorage:1024k_fluid_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:1024k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
})
event.shaped(Item.of('refinedstorage:4096k_fluid_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:4096k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
})
event.shaped(Item.of('refinedstorage:1024k_fluid_storage_part', 1), ["PEP", "SRS", "PSP"], {
        P: 'refinedstorage:improved_processor',
        E: 'refinedstorage:quartz_enriched_iron',
        S: 'refinedstorage:256k_fluid_storage_part',
        R: 'cyclic:tank'
})
event.shaped(Item.of('refinedstorage:4096k_fluid_storage_part', 1), ["PEP", "SRS", "PSP"], {
        P: 'refinedstorage:advanced_processor',
        E: 'refinedstorage:quartz_enriched_iron',
        S: 'refinedstorage:1024k_fluid_storage_part',
        R: 'cyclic:tank'
})
event.shaped(Item.of('refinedstorage:cable', 12), ["EEE", "GRG", "EEE"], {
        E: 'refinedstorage:quartz_enriched_iron',
        G: 'appliedenergistics2:quartz_vibrant_glass',
        R: 'appliedenergistics2:fluix_glass_cable'
})
event.shaped(Item.of('refinedstorage:upgrade', 1), ["EGE", "EPE", "EGE"], {
        E: 'refinedstorage:quartz_enriched_iron',
        G: 'appliedenergistics2:quartz_vibrant_glass',
        P: 'refinedstorage:improved_processor'
})
event.shaped(Item.of('refinedstorage:storage_monitor', 1), ["PCG", "EMG", "PDG"], {
        P: 'refinedstorage:basic_processor',
        C: 'refinedstorage:construction_core',
        G: 'appliedenergistics2:semi_dark_monitor',
        E: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing',
        D: 'refinedstorage:destruction_core'
})
event.shaped(Item.of('refinedstorage:storage_housing', 1), ["GRG", "RSR", "GRG"], {
        G: 'appliedenergistics2:quartz_vibrant_glass',
        R: 'refinedstorage:quartz_enriched_iron',
        S: 'appliedenergistics2:empty_storage_cell'
})
event.shaped(Item.of('refinedstorage:network_card', 1), ["SSS", "WQW", "SSS"], {
        Q: 'refinedstorage:advanced_processor',
        W: 'pneumaticcraft:plastic',
        S: 'refinedstorage:quartz_enriched_iron'
})
event.shaped(Item.of('refinedstorage:machine_casing', 1), ["WEW", "ESE", "WEW"], {
        E: 'appliedenergistics2:smooth_sky_stone_block',
        S: 'refinedstorage:quartz_enriched_iron_block',
        W: 'create:refined_radiance'
})
event.shaped(Item.of('refinedstorage:interface', 1), ["UIU", "RMR", "UEU"], {
        I: 'refinedstorage:importer',
        E: 'refinedstorage:exporter',
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        U: 'refinedstorage:quartz_enriched_iron'
})
event.shaped(Item.of('refinedstorage:grid', 1), ["PCG", "EMG", "PDG"], {
        P: 'refinedstorage:improved_processor',
        C: 'refinedstorage:construction_core',
        G: 'appliedenergistics2:semi_dark_monitor',
        E: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing',
        D: 'refinedstorage:destruction_core'
})
event.shaped(Item.of('refinedstorage:destructor', 1), ["EDE", "RMR", "EIE"], {
        E: 'refinedstorage:quartz_enriched_iron',
        D: 'refinedstorage:destruction_core',
        R: 'extendedcrafting:redstone_component',
        M: 'refinedstorage:cable',
        I: 'refinedstorage:improved_processor'
})
event.shaped(Item.of('refinedstorage:crafting_monitor', 1), ["PAG", "EMG", "PAG"], {
        P: 'refinedstorage:improved_processor',
        A: 'refinedstorage:pattern',
        G: 'appliedenergistics2:semi_dark_monitor',
        E: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing'
})
event.shaped(Item.of('refinedstorage:crafter_manager', 1), ["PCG", "EMG", "PCG"], {
        P: 'refinedstorage:advanced_processor',
        C: '#refinedstorage:crafter',
        G: 'appliedenergistics2:semi_dark_monitor',
        E: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing'
})
//Morph o Tool Recipes
event.shaped(Item.of('morphtool:tool', 1), ["AB ", "CD ", "  D"], {
        A: '#forge:dyes/blue',
        B: '#forge:dyes/red',
        C: '#forge:dyes/green',
        D: '#forge:plates/iron'
})
event.shaped(Item.of('morphtool:tool').nbt({
            'morphtool:data': {
                resourcefulbees: { id: 'resourcefulbees:scraper', Count: 1 },
                astralsorcery: { id: 'astralsorcery:wand', Count: 1 },
                pneumaticcraft: { id: 'pneumaticcraft:pneumatic_wrench', Count: 1 },
                immersiveengineering: { id: 'immersiveengineering:hammer', Count: 1 },
                transport: { id: 'transport:rail_breaker', Count: 1 },
                botania: { id: 'botania:twig_wand', Count: 1, tag: { color1: 0, color2: 0 } },
                mekanism: { id: 'mekanism:configurator', Count: 1 },
                bloodmagic: { id: 'bloodmagic:ritualtinkerer', Count: 1 },
                thermal: { id: 'thermal:wrench', Count: 1 },
                rftoolsbase: { id: 'rftoolsbase:smartwrench', Count: 1 },
                create: { id: 'create:wrench', Count: 1 },
                chiselsandbits: { id: 'chiselsandbits:wrench_wood', Count: 1 },
                refinedstorage: { id: 'refinedstorage:wrench', Count: 1 },
                storagedrawers: { id: 'storagedrawers:drawer_key', Count: 1 },
                fluxnetworks: { id: 'fluxnetworks:flux_configurator', Count: 1 }
            }
        }),
        ['ABA', 'CFD', 'AEA'],
        {
            A: '#forge:storage_blocks/redstone',
            B: '#forge:gears/gold',
            C: '#forge:gears/iron',
            D: '#forge:gears/silver',
            E: '#forge:gears/copper',
            F: 'morphtool:tool'
    })
    //Extended Crafting
    event.shaped(Item.of('extendedcrafting:elite_table', 1), ["CDC", "ABA", "CDC"], {
        A: '#forge:plates/diamond',
        B: 'extendedcrafting:advanced_table',
        C: 'extendedcrafting:elite_component',
        D: 'extendedcrafting:elite_catalyst'
    })
    event.shaped(Item.of('extendedcrafting:ultimate_table', 1), ["CDC", "BAB", "CDC"], {
        A: 'extendedcrafting:elite_table',
        B: '#forge:plates/emerald',
        C: 'extendedcrafting:ultimate_component',
        D: 'extendedcrafting:ultimate_catalyst'
    })
    //Forbidden Arcanus
    event.shaped(Item.of('forbidden_arcanus:arcane_gold_pressure_plate', 1), ["CDC", "BAB", "CDC"], {
        A: 'forbidden_arcanus:arcane_gold_ingot',
        B: 'immersiveengineering:hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:cherrywood_pressure_plate', 1), ["CDC", "BAB", "CDC"], {
        A: 'forbidden_arcanus:cherrywood_planks',
        B: 'immersiveengineering:hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:edelwood_pressure_plate', 1), [" B ", " A ", " A "], {
        A: 'forbidden_arcanus:edelwood_planks',
        B: 'immersiveengineering:hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:mysterywood_pressure_plate', 1), [" B ", " A ", " A "], {
        A: 'forbidden_arcanus:mysterywood_planks',
        B: 'immersiveengineering:hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:polished_darkstone_pressure_plate', 1), [" B ", " A ", " A "], {
        A: 'forbidden_arcanus:polished_darkstone',
        B: 'immersiveengineering:hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:soul_extractor', 1), ["A  ", "BBC", "D  "], {
        A: 'minecraft:glass_bottle',
        B: 'minecraft:nether_bricks',
        C: 'minecraft:quartz_block',
        D: 'minecraft:quartz'
    })
    //Mekanism
    event.shaped(Item.of('mekanism:basic_chemical_tank', 1), ["BAB", "A A", "BAB"], {
        A: 'contenttweaker:compressed_plate',
        B: 'extendedcrafting:redstone_component'
    })
    event.shaped(Item.of('mekanism:basic_energy_cube', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:steel_casing',
        B: 'mekanism:energy_tablet',
        C: 'contenttweaker:compressed_plate',
        D: 'extendedcrafting:redstone_component'
    })
    event.shaped(Item.of('mekanism:advanced_energy_cube', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:basic_energy_cube',
        B: 'mekanism:energy_tablet',
        C: '#forge:plates/osmium',
        D: 'mekanism:alloys/infused'
    })
    event.shaped(Item.of('mekanism:elite_energy_cube', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:advanced_energy_cube',
        B: 'mekanism:energy_tablet',
        C: '#forge:plates/electrum',
        D: 'mekanism:alloys/reinforced'
    })
    event.shaped(Item.of('mekanism:elite_energy_cube', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:elite_energy_cube',
        B: 'mekanism:energy_tablet',
        C: '#forge:plates/diamond',
        D: 'mekanism:alloys/atomic'
    })
    event.shaped(Item.of('mekanism:basic_fluid_tank', 1), ["BAB", "ACA", "BAB"], {
        A: 'extendedcrafting:redstone_ingot',
        B: '#forge:plates/iron',
        C: 'cyclic:tank'
    })
    event.shaped(Item.of('mekanism:thermal_evaporation_block', 1), ["BAB", "ACA", "BAB"], {
        A: 'extendedcrafting:redstone_ingot',
        B: '#forge:plates/iron',
        C: 'cyclic:tank'
    })
    event.shaped(Item.of('mekanism:thermal_evaporation_controller', 1), ["BDB", "ACA", "AAA"], {
        A: 'mekanism:thermal_evaporation_block',
        B: '#forge:circuits/advanced',
        C: 'mekanism:basic_fluid_tank',
        D: 'appliedenergistics2:quartz_vibrant_glass'
    })
    event.shaped(Item.of('mekanism:basic_tier_installer', 1), ["DBD", "CAC", "DBD"], {
        A: 'appliedenergistics2:smooth_sky_stone_block',
        B: '#forge:circuits/basic',
        C: 'pneumaticcraft:compressed_iron_gear',
        D: 'extendedcrafting:redstone_component'
    })
    event.shaped(Item.of('mekanism:advanced_tier_installer', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:basic_tier_installer',
        B: '#forge:circuits/advanced',
        C: '#forge:gears/osmium',
        D: 'mekanism:alloys/infused'
    })
    event.shaped(Item.of('mekanism:elite_tier_installer', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:advanced_tier_installer',
        B: '#forge:circuits/elite',
        C: '#forge:gears/electrum',
        D: 'mekanism:alloys/reinforced'
    })
    event.shaped(Item.of('mekanism:ultimate_tier_installer', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:elite_tier_installer',
        B: '#forge:circuits/ultimate',
        C: '#forge:gears/diamond',
        D: 'mekanism:alloys/atomic'
    })
    event.shaped(Item.of('mekanism:basic_logistical_transporter', 8), ["   ", "ACA", " B "], {
        A: 'contenttweaker:compressed_plate',
        B: '#forge:circuits/basic',
        C: 'refinedpipes:basic_item_pipe'
    })
    event.shaped(Item.of('mekanism:basic_mechanical_pipe', 8), ["   ", "ABA", "   "], {
        A: 'contenttweaker:compressed_plate',
        B: 'refinedpipes:basic_fluid_pipe'
    })
    event.shaped(Item.of('mekanism:basic_pressurized_tube', 8), [" A ", "BCB", " A "], {
        A: 'appliedenergistics2:quartz_glass',
        B: 'contenttweaker:compressed_plate',
        C: 'mekanism:basic_mechanical_pipe'
    })
    event.shaped(Item.of('mekanism:basic_universal_cable', 8), ["   ", "ABA", "   "], {
        A: 'contenttweaker:compressed_plate',
        B: 'refinedpipes:basic_energy_pipe'
    })
    event.shaped(Item.of('mekanism:diversion_transporter', 2), [" B ", "ACA", " B "], {
        A: 'contenttweaker:compressed_plate',
        B: 'extendedcrafting:redstone_ingot',
        C: 'mekanism:restrictive_transporter'
    })
    event.shaped(Item.of('mekanism:restrictive_transporter', 2), [" B ", "ACA", " B "], {
        A: 'contenttweaker:compressed_plate',
        B: 'minecraft:iron_bars',
        C: 'mekanism:basic_logistical_transporter'
    })



    event.shaped(Item.of('mekanism:upgrade_anchor', 1), [" A ", "CBC", " A "], {
        A: 'appliedenergistics2:quartz_glass',
        B: '#forge:dusts/diamond',
        C: 'refinedpipes:basic_item_pipe'
    })
    event.shaped(Item.of('mekanism:upgrade_energy', 2), [" A ", "CBC", " A "], {
        A: 'appliedenergistics2:quartz_glass',
        B: '#forge:dusts/gold',
        C: '#mekanism:alloys/infused'
    })
    event.shaped(Item.of('mekanism:upgrade_filter', 1), [" A ", "CBC", " A "], {
        A: 'appliedenergistics2:quartz_glass',
        B: 'forge:dusts/tin',
        C: 'mekanism:basic_mechanical_pipe'
    })
    event.shaped(Item.of('mekanism:upgrade_gas', 2), [" A ", "CBC", " A "], {
        A: 'contenttweaker:compressed_plate',
        B: 'forge:dusts/iron',
        C: 'mekanism:restrictive_transporter'
    })
    event.shaped(Item.of('mekanism:upgrade_muffling', 1), [" A ", "CBC", " A "], {
        A: 'contenttweaker:compressed_plate',
        B: 'forge:dusts/steel',
        C: 'mekanism:restrictive_transporter'
    })
    event.shaped(Item.of('mekanism:upgrade_speed', 2), [" A ", "CBC", " A "], {
        A: 'contenttweaker:compressed_plate',
        B: 'forge:dusts/osmium',
        C: 'mekanism:basic_logistical_transporter'
    });
});