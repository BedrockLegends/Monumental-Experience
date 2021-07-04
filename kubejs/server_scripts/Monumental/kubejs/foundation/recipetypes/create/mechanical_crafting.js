onEvent('recipes', (event) => {
    const data = {
        recipes: [
            {
                pattern: [" AAA ", "AQPQA", "APSPA", "AQPQA", " AAA "],
                key: {
                    P: '#forge:treated_wood',
                    S: 'create:large_cogwheel',
                    A: 'create:andesite_alloy',
                    Q: '#forge:sheetmetals/iron'
                },
                result: Item.of('create:crushing_wheel', 2)
            },
            {
                pattern: ["ABA", "CDC", "CCC"],
                key: {
                    B: 'appliedenergistics2:calculation_processor',
                    C: 'contenttweaker:compressed_plate',
                    A: '#thermal:rockwool',
                    D: '#forge:chests'
                },
                result: Item.of('appliedenergistics2:cell_workbench', 1)
            },
            {
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: 'contenttweaker:compressed_plate',
                    C: '#forge:gems/fluix',
                    B: 'appliedenergistics2:quartz_glass'
                },
                result: Item.of('appliedenergistics2:energy_acceptor', 1)
            },
            {
                pattern: ["ABA", "CDC", "ABA"],
                key: {
                    A: '#forge:sheetmetals/steel',
                    B: 'contenttweaker:compressed_plate',
                    C: '#forge:gems/fluix',
                    D: 'immersiveengineering:charging_station'
                },
                result: Item.of('appliedenergistics2:charger', 1)
            },
            {
                pattern: ["AAA", "ABA", "ACA"],
                key: {
                    B: 'routerreborn:furnace',
                    A: 'contenttweaker:compressed_plate',
                    C: 'appliedenergistics2:energy_acceptor'
                },
                result: Item.of('appliedenergistics2:vibration_chamber', 1)
            },
            {
                pattern: ["ABA", "C D", "ABA"],
                key: {
                    A: 'contenttweaker:compressed_plate',
                    B: 'cyclic:tank',
                    C: 'appliedenergistics2:annihilation_core',
                    D: 'appliedenergistics2:formation_core'
                },
                result: Item.of('appliedenergistics2:fluid_interface', 1)
            },
            {
                pattern: ["ABA", "CDC", "AEA"],
                key: {
                    A: '#forge:plates/enderium',
                    B: 'create:mechanical_piston',
                    C: 'contenttweaker:compressed_plate',
                    D: 'pneumaticcraft:printed_circuit_board',
                    E: 'appliedenergistics2:purified_fluix_crystal'
                },
                result: Item.of('appliedenergistics2:inscriber', 1)
            },
            {
                pattern: ["ABA", "C D", "ABA"],
                key: {
                    A: 'contenttweaker:compressed_plate',
                    B: 'appliedenergistics2:quartz_glass',
                    C: 'appliedenergistics2:formation_core',
                    D: 'appliedenergistics2:annihilation_core'
                },
                result: Item.of('appliedenergistics2:interface', 1)
            },
            {
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: 'contenttweaker:compressed_plate',
                    B: 'thermal:obsidian_glass',
                    C: '#forge:dusts/fluix'
                },
                result: Item.of('appliedenergistics2:condenser', 1)
            },
            {
                pattern: ["ABA", "C C", "ABA"],
                key: {
                    A: 'contenttweaker:compressed_plate',
                    B: 'appliedenergistics2:engineering_processor',
                    C: 'appliedenergistics2:fluix_glass_cable'
                },
                result: Item.of('appliedenergistics2:drive', 1)
            },
            {
                pattern: ["ABA", "B B", "CCC"],
                key: {
                    A: 'appliedenergistics2:quartz_glass',
                    B: 'extendedcrafting:redstone_component',
                    C: 'contenttweaker:compressed_plate'
                },
                result: Item.of('appliedenergistics2:empty_storage_cell', 1)
            },
            {
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: '#forge:ingots/refined_glowstone',
                    B: 'appliedenergistics2:fluix_pearl',
                    C: 'appliedenergistics2:engineering_processor'
                },
                result: Item.of('appliedenergistics2:2_cubed_spatial_cell_component', 1)
            },
            {
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: '#forge:ingots/refined_glowstone',
                    B: 'appliedenergistics2:2_cubed_spatial_cell_component',
                    C: 'appliedenergistics2:engineering_processor'
                },
                result: Item.of('appliedenergistics2:16_cubed_spatial_cell_component', 1)
            },
            {
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: '#forge:ingots/refined_glowstone',
                    B: 'appliedenergistics2:16_cubed_spatial_cell_component',
                    C: 'appliedenergistics2:engineering_processor'
                },
                result: Item.of('appliedenergistics2:128_cubed_spatial_cell_component', 1)
            },
            {
                pattern: ["PQP", "QBQ", "PQP"],
                key: {
                    P: '#forge:plates/steel',
                    B: 'storagenetwork:inventory',
                    Q: 'storagenetwork:speed_upgrade'
                },
                result: Item.of('storagenetwork:collector', 1)
            },
            {
                pattern: ["PSP", "QBQ", "PTP"],
                key: {
                    P: 'minecraft:sea_lantern',
                    B: 'storagenetwork:inventory_remote',
                    Q: 'immersiveengineering:coil_mv',
                    T: '#forge:storage_blocks/steel',
                    S: 'immersiveengineering:insulating_glass'
                },
                result: Item.of('storagenetwork:crafting_remote', 1)
            },
            {
                pattern: ["PQP", "QBQ", "PQP"],
                key: {
                    P: '#forge:plates/steel',
                    B: 'storagenetwork:inventory',
                    Q: 'storagenetwork:stack_upgrade'
                },
                result: Item.of('storagenetwork:exchange', 1)
            },
            {
                pattern: ["PQP", "QBQ", "PQP"],
                key: {
                    P: '#forge:sheetmetals/steel',
                    B: 'create:mechanical_crafter',
                    Q: 'storagenetwork:kabel'
                },
                result: Item.of('storagenetwork:inventory', 1)
            },
            {
                pattern: ["PQP", "QBQ", "PQP"],
                key: {
                    P: '#forge:sheetmetals/electrum',
                    B: 'storagenetwork:inventory',
                    Q: '#forge:gears/constantan'
                },
                result: Item.of('storagenetwork:request', 1)
            },
            {
                pattern: ["PQP", "SBS", "PQP"],
                key: {
                    P: '#forge:plates/steel',
                    B: 'storagenetwork:kabel',
                    Q: 'extendedcrafting:redstone_ingot',
                    S: '#forge:plates/electrum'
                },
                result: Item.of('storagenetwork:speed_upgrade', 1)
            },
            {
                pattern: ["PQP", "SBS", "PQP"],
                key: {
                    P: '#forge:plates/steel',
                    B: 'storagenetwork:kabel',
                    Q: 'extendedcrafting:redstone_ingot',
                    S: '#forge:rods/blaze'
                },
                result: Item.of('storagenetwork:stack_upgrade', 1)
            },
            {
                pattern: ["iei", "igi", "ibi"],
                key: {
                    e: 'immersiveengineering:insulating_glass',
                    g: 'cyclic:ender_eye_reuse',
                    i: '#forge:ingots/compressed_iron',
                    b: 'immersiveengineering:circuit_board'
                },
                result: Item.of('shrink:shrinking_device', 1)
            },
            {
                pattern: [" S ", "QBQ", " T "],
                key: {
                    B: 'storagenetwork:master',
                    Q: '#forge:gears/electrum',
                    T: '#forge:storage_blocks/glowstone',
                    S: 'immersiveengineering:insulating_glass'
                },
                result: Item.of('storagenetwork:inventory_remote', 1)
            },
            {
                pattern: ["PPP", "QBQ", "PPP"],
                key: {
                    P: '#forge:plates/steel',
                    B: 'refinedpipes:advanced_item_pipe',
                    Q: '#forge:gears/electrum'
                },
                result: Item.of('storagenetwork:kabel', 4)
            },
            {
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: 'extendedcrafting:redstone_component',
                    B: '#forge:gems/certus_quartz',
                    C: 'appliedenergistics2:logic_processor'
                },
                result: Item.of('appliedenergistics2:1k_cell_component', 1)
            },
            {
                pattern: ["RdR", "dMd", "RdR"],
                key: {
                    M: 'rftoolsutility:charged_porter',
                    R: 'extendedcrafting:redstone_catalyst',
                    d: '#forge:plates/diamond'
                },
                result: Item.of('rftoolsutility:advanced_charged_porter', 1)
            },
            {
                pattern: ["ioi", "oRo", " o "],
                key: {
                    R: 'extendedcrafting:redstone_catalyst',
                    i: '#forge:plates/steel',
                    o: 'minecraft:ender_eye'
                },
                result: Item.of('rftoolsutility:charged_porter', 1)
            },
            {
                pattern: ["rqr", "TFT", "rqr"],
                key: {
                    r: 'extendedcrafting:redstone_component',
                    T: 'immersiveengineering:wirecoil_redstone',
                    F: 'rftoolsbase:machine_frame',
                    q: 'extendedcrafting:redstone_catalyst'
                },
                result: Item.of('rftoolsutility:dialing_device', 1)
            },
            {
                pattern: ["RzR", "zFz", "RzR"],
                key: {
                    z: 'extendedcrafting:luminessence',
                    R: 'extendedcrafting:redstone_catalyst',
                    F: 'rftoolsbase:machine_frame'
                },
                result: Item.of('rftoolsutility:matter_beamer', 1)
            },
            {
                pattern: ["QRQ", "RFR", "QRQ"],
                key: {
                    Q: 'extendedcrafting:redstone_component',
                    R: 'extendedcrafting:redstone_catalyst',
                    F: 'rftoolsbase:machine_frame'
                },
                result: Item.of('rftoolsutility:matter_booster', 1)
            },
            {
                pattern: ["iii", "rFr", "oso"],
                key: {
                    r: 'extendedcrafting:redstone_catalyst',
                    F: 'rftoolsbase:machine_frame',
                    i: '#forge:sheetmetals/steel',
                    o: 'minecraft:ender_eye',
                    s: 'cyclic:ender_eye_reuse'
                },
                result: Item.of('rftoolsutility:matter_receiver', 1)
            },
            {
                pattern: ["oso", "rFr", "iii"],
                key: {
                    r: 'extendedcrafting:redstone_catalyst',
                    F: 'rftoolsbase:machine_frame',
                    i: '#forge:sheetmetals/steel',
                    o: 'minecraft:ender_eye',
                    s: 'cyclic:ender_eye_reuse'
                },
                result: Item.of('rftoolsutility:matter_transmitter', 1)
            },
            {
                pattern: ["rYr", "TAT", "rYr"],
                key: {
                    A: 'rftoolsbase:machine_base',
                    r: 'extendedcrafting:redstone_component',
                    Y: 'extendedcrafting:redstone_catalyst',
                    T: 'immersiveengineering:wirecoil_redstone'
                },
                result: Item.of('rftoolsutility:simple_dialer', 1)
            },
            {
                pattern: ["rzr", "oFo", "rPr"],
                key: {
                    z: '#forge:storage_blocks/fire_dragon_scale',
                    P: '#forge:heart',
                    r: 'extendedcrafting:redstone_catalyst',
                    F: 'rftoolsbase:machine_frame',
                    o: '#forge:bones/dragon'
                },
                result: Item.of('rftoolsutility:spawner', 1)
            },
            {
                pattern: ["GGG", "bFb", "iii"],
                key: {
                    b: '#forge:bucket',
                    F: 'cyclic:tank',
                    G: 'immersiveengineering:insulating_glass',
                    i: '#forge:plates/steel'
                },
                result: Item.of('rftoolsutility:tank', 1)
            },
            {
                pattern: ["ToT", "gFg", "TsT"],
                key: {
                    g: '#forge:gears/quartz',
                    T: '#forge:sheetmetals/steel',
                    F: 'immersiveengineering:heavy_engineering',
                    o: '#forge:plates/steel',
                    s: 'create:electron_tube'
                },
                result: Item.of('rftoolsstorage:modular_storage', 1)
            },
            {
                pattern: ["ToT", "gFg", "TsT"],
                key: {
                    g: 'immersiveengineering:electron_tube',
                    T: '#forge:sheetmetals/steel',
                    F: 'immersiveengineering:heavy_engineering',
                    o: '#forge:gears/enderium',
                    s: 'immersiveengineering:circuit_board'
                },
                result: Item.of('rftoolsstorage:storage_scanner', 1)
            },
            {
                pattern: ["qsq", "rpr", "qaq"],
                key: {
                    p: 'rftoolsbase:machine_frame',
                    q: 'rftoolspower:blazing_rod',
                    r: 'extendedcrafting:redstone_catalyst',
                    s: 'rftoolsbase:infused_enderpearl',
                    a: 'pneumaticcraft:printed_circuit_board'
                },
                result: Item.of('rftoolspower:blazing_generator', 1)
            },
            {
                pattern: [" X ", "sFs", " X "],
                key: {
                    X: 'botania:blaze_block',
                    s: '#forge:gems/dimensional',
                    F: 'rftoolsbase:machine_frame'
                },
                result: Item.of('rftoolspower:blazing_infuser', 1)
            },
            {
                pattern: ["sds", "rRr", "sas"],
                key: {
                    r: 'thermal:rf_coil',
                    R: 'pneumaticcraft:compressed_iron_gear',
                    d: '#forge:plates/diamond',
                    s: '#forge:plates/steel',
                    a: 'extendedcrafting:redstone_catalyst'
                },
                result: Item.of('rftoolspower:power_core1', 1)
            },
            {
                pattern: ["ses", "rRr", "sas"],
                key: {
                    r: 'thermal:rf_coil',
                    R: 'pneumaticcraft:compressed_iron_gear',
                    s: '#forge:gems/dimensional',
                    a: 'extendedcrafting:redstone_catalyst',
                    e: '#forge:plates/diamond'
                },
                result: Item.of('rftoolspower:power_core2', 1)
            },
            {
                pattern: ["sds", "rRr", "ses"],
                key: {
                    r: 'thermal:rf_coil',
                    R: 'pneumaticcraft:compressed_iron_gear',
                    s: '#forge:gems/dimensional',
                    d: '#forge:plates/diamond',
                    e: '#forge:plates/emerald'
                },
                result: Item.of('rftoolspower:power_core3', 1)
            },
            {
                pattern: ["rKr", "KFK", "rKr"],
                key: {
                    K: 'rftoolspower:power_core1',
                    r: 'extendedcrafting:redstone_component',
                    F: 'rftoolsbase:machine_frame'
                },
                result: Item.of('rftoolspower:cell1', 1)
            },
            {
                pattern: ["rKr", "KPK", "rKr"],
                key: {
                    K: 'rftoolspower:power_core2',
                    P: 'rftoolspower:cell1',
                    r: 'extendedcrafting:redstone_component'
                },
                result: Item.of('rftoolspower:cell2', 1)
            },
            {
                pattern: ["rKr", "KPK", "rKr"],
                key: {
                    K: 'rftoolspower:power_core3',
                    P: 'rftoolspower:cell2',
                    r: 'extendedcrafting:redstone_component'
                },
                result: Item.of('rftoolspower:cell3', 1)
            },
            {
                pattern: ["CCC", "CXC", "CCC"],
                key: {
                    X: '#forge:gears/iron',
                    C: 'immersiveengineering:windmill_blade'
                },
                result: Item.of('immersiveengineering:windmill', 1)
            },
            {
                pattern: [" C ", "CXC", " C "],
                key: {
                    X: '#forge:rods/steel',
                    C: 'immersiveengineering:waterwheel_segment'
                },
                result: Item.of('immersiveengineering:watermill', 1)
            },
            {
                pattern: ["S T", "CXC", "CCC"],
                key: {
                    X: 'immersiveengineering:coil_hv',
                    C: '#forge:sheetmetals/iron',
                    T: 'immersiveengineering:connector_hv',
                    S: 'immersiveengineering:connector_mv'
                },
                result: Item.of('immersiveengineering:transformer_hv', 1)
            },
            {
                pattern: ["S T", "CXC", "CCC"],
                key: {
                    X: 'immersiveengineering:coil_mv',
                    C: '#forge:sheetmetals/iron',
                    T: 'immersiveengineering:connector_mv',
                    S: 'immersiveengineering:connector_lv'
                },
                result: Item.of('immersiveengineering:transformer', 1)
            },
            {
                pattern: ["SSS", "CXC", "CTC"],
                key: {
                    X: 'create:integrated_circuit',
                    C: '#forge:sheetmetals/constantan',
                    T: 'immersiveengineering:coil_hv',
                    S: '#forge:sheetmetals/steel'
                },
                result: Item.of('immersiveengineering:thermoelectric_generator', 1)
            },
            {
                pattern: ["XTX", "TAT", "XTX"],
                key: {
                    X: '#forge:sheetmetals/steel',
                    A: '#forge:gears/electrum',
                    T: 'immersiveengineering:component_iron'
                },
                result: Item.of('immersiveengineering:heavy_engineering', 1)
            },
            {
                pattern: ["AWA", "CSC", "AWA"],
                key: {
                    A: '#forge:sheetmetals/iron',
                    C: 'create:electron_tube',
                    W: '#forge:plates/steel',
                    S: '#forge:gears/bronze'
                },
                result: Item.of('immersiveengineering:rs_engineering', 1)
            },
            {
                pattern: ["qsq", "rpr", "qaq"],
                key: {
                    p: 'rftoolsbase:machine_frame',
                    q: 'immersiveengineering:alloybrick',
                    r: 'extendedcrafting:redstone_catalyst',
                    s: 'rftoolsbase:infused_enderpearl',
                    a: 'pneumaticcraft:printed_circuit_board'
                },
                result: Item.of('rftoolsbuilder:builder', 1)
            },
            {
                pattern: ["ABA", "CDC", "ACA"],
                key: {
                    A: 'extendedcrafting:redstone_component',
                    B: 'appliedenergistics2:calculation_processor',
                    C: 'appliedenergistics2:1k_cell_component',
                    D: 'appliedenergistics2:quartz_glass'
                },
                result: Item.of('appliedenergistics2:4k_cell_component', 1)
            },
            {
                pattern: ["ABA", "CDC", "ACA"],
                key: {
                    A: '#forge:ingots/refined_glowstone',
                    B: 'appliedenergistics2:calculation_processor',
                    C: 'appliedenergistics2:4k_cell_component',
                    D: 'appliedenergistics2:quartz_glass'
                },
                result: Item.of('appliedenergistics2:16k_cell_component', 1)
            },
            {
                pattern: ["ABA", "CDC", "ACA"],
                key: {
                    A: '#forge:ingots/refined_glowstone',
                    B: 'appliedenergistics2:calculation_processor',
                    C: 'appliedenergistics2:16k_cell_component',
                    D: 'appliedenergistics2:quartz_glass'
                },
                result: Item.of('appliedenergistics2:64k_cell_component', 1)
            },
            {
                pattern: ["AAA", "BCB", "DED"],
                key: {
                    A: 'appliedenergistics2:quartz_glass',
                    B: 'appliedenergistics2:drive',
                    C: 'appliedenergistics2:fluix_glass_cable',
                    D: 'contenttweaker:compressed_plate',
                    E: 'appliedenergistics2:logic_processor'
                },
                result: Item.of('appliedenergistics2:io_port', 1)
            },
            {
                pattern: ["ABA", "CDE", "ABA"],
                key: {
                    A: 'contenttweaker:compressed_plate',
                    B: 'appliedenergistics2:quartz_glass',
                    C: 'appliedenergistics2:annihilation_core',
                    D: 'create:mechanical_crafter',
                    E: 'appliedenergistics2:formation_core'
                },
                result: Item.of('appliedenergistics2:molecular_assembler', 1)
            },
            {
                pattern: [" C ", "IGI", "YXY"],
                key: {
                    C: 'thermal:rf_coil',
                    I: '#forge:plates/steel',
                    G: '#forge:gears/gold',
                    X: 'immersiveengineering:circuit_board',
                    Y: '#forge:gears/lapis'
                },
                result: Item.of('thermal:dynamo_lapidary', 1)
            },
            {
                pattern: [" C ", "IGI", "GXG"],
                key: {
                    C: 'thermal:rf_coil',
                    I: '#forge:plates/steel',
                    G: '#forge:gears/bronze',
                    X: 'immersiveengineering:circuit_board'
                },
                result: Item.of('thermal:dynamo_compression', 1)
            },
            {
                pattern: [" C ", "IYI", "YXY"],
                key: {
                    C: 'thermal:rf_coil',
                    I: '#forge:plates/iron',
                    X: 'immersiveengineering:circuit_board',
                    Y: '#forge:gears/invar'
                },
                result: Item.of('thermal:dynamo_magmatic', 1)
            },
            {
                pattern: [" C ", "IGI", "YXY"],
                key: {
                    C: 'thermal:rf_coil',
                    I: '#forge:plates/steel',
                    X: 'immersiveengineering:circuit_board',
                    Y: '#pneumaticcraft:reinforced_stone',
                    G: '#forge:gears/steel'
                },
                result: Item.of('thermal:dynamo_stirling', 1)
            },
            {
                pattern: [" C ", "IGI", "YXY"],
                key: {
                    C: 'thermal:rf_coil',
                    I: '#forge:plates/steel',
                    X: '#forge:dusts/redstone',
                    Y: '#forge:gears/constantan',
                    G: '#forge:gears/bronze'
                },
                result: Item.of('thermal:dynamo_numismatic', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:plates/steel',
                    P: 'thermal:rf_coil',
                    X: 'minecraft:blast_furnace',
                    Y: '#forge:sand'
                },
                result: Item.of('thermal:machine_smelter', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/copper',
                    P: 'thermal:rf_coil',
                    X: 'cyclic:tank',
                    Y: '#thermal:glass/hardened'
                },
                result: Item.of('thermal:machine_bottler', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/copper',
                    P: 'thermal:rf_coil',
                    X: 'thermal:saw_blade',
                    Y: '#forge:stone'
                },
                result: Item.of('thermal:machine_sawmill', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/invar',
                    P: 'thermal:rf_coil',
                    X: '#thermal:glass/hardened',
                    Y: '#forge:plates/copper'
                },
                result: Item.of('thermal:machine_refinery', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/constantan',
                    P: 'thermal:rf_coil',
                    X: '#forge:rods/blaze',
                    Y: '#chipped:nether_bricks'
                },
                result: Item.of('thermal:machine_pyrolyzer', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/copper',
                    P: 'thermal:rf_coil',
                    X: 'minecraft:piston',
                    Y: 'minecraft:flint'
                },
                result: Item.of('thermal:machine_pulverizer', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/constantan',
                    P: 'thermal:rf_coil',
                    X: 'create:mechanical_press',
                    Y: '#forge:plates/bronze'
                },
                result: Item.of('thermal:machine_frame', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/copper',
                    P: 'thermal:rf_coil',
                    X: 'extendedcrafting:redstone_component',
                    Y: 'minecraft:bricks'
                },
                result: Item.of('thermal:machine_furnace', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/copper',
                    P: 'thermal:rf_coil',
                    X: '#forge:workbenches',
                    Y: '#forge:ingots/tin'
                },
                result: Item.of('thermal:machine_crafter', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/invar',
                    P: 'thermal:rf_coil',
                    X: '#thermal:glass/hardened',
                    Y: '#forge:ices/ice'
                },
                result: Item.of('thermal:machine_chiller', 1)
            },
            {
                pattern: [" X ", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/constantan',
                    P: 'thermal:rf_coil',
                    X: 'minecraft:compass',
                    Y: '#forge:ingots/tin'
                },
                result: Item.of('thermal:machine_centrifuge', 1)
            },
            {
                pattern: ["SXS", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/lumium',
                    P: 'thermal:rf_coil',
                    X: 'gardentools:irrigation_core',
                    Y: '#thermal:glass/hardened',
                    S: 'cyclic:terra_preta'
                },
                result: Item.of('thermal:machine_insolator', 1)
            },
            {
                pattern: ["XXX", "YCY", "IPI"],
                key: {
                    C: 'thermal:machine_frame',
                    I: '#forge:gears/constantan',
                    P: 'thermal:rf_coil',
                    X: 'minecraft:brewing_stand',
                    Y: '#thermal:glass/hardened'
                },
                result: Item.of('thermal:machine_brewer', 1)
            },
            {
                pattern: ["SXS", "YPY", "ICI"],
                key: {
                    C: 'thermal:rf_coil',
                    I: '#forge:gears/invar',
                    P: 'thermal:machine_frame',
                    X: 'create:blaze_burner',
                    Y: '#chipped:nether_bricks',
                    S: '#thermal:glass/hardened'
                },
                result: Item.of('thermal:machine_crucible', 1)
            },
            {
                pattern: ["IGI", "GTG", "IGI"],
                key: {
                    G: '#thermal:glass/hardened',
                    I: '#forge:sheetmetals/steel',
                    T: '#forge:gears/bronze'
                },
                result: Item.of('thermal:machine_insolator', 1)
            },
            {
                pattern: ["AAA", "BCB", "DED"],
                key: {
                    A: 'appliedenergistics2:quartz_glass',
                    B: 'appliedenergistics2:drive',
                    C: 'appliedenergistics2:fluix_glass_cable',
                    D: 'contenttweaker:compressed_plate',
                    E: 'appliedenergistics2:logic_processor'
                },
                result: Item.of('appliedenergistics2:io_port', 1)
            },
            {
                pattern: ["ABA", "CDC", "AEA"],
                key: {
                    A: 'contenttweaker:compressed_plate',
                    B: 'appliedenergistics2:chest',
                    C: 'appliedenergistics2:fluix_glass_cable',
                    D: 'appliedenergistics2:16k_cell_component',
                    E: 'appliedenergistics2:engineering_processor'
                },
                result: Item.of('appliedenergistics2:security_station', 1)
            },
            {
                pattern: ["AAA", "BCB", "DED"],
                key: {
                    A: 'thermal:obsidian_glass',
                    B: 'appliedenergistics2:fluix_glass_cable',
                    C: 'appliedenergistics2:io_port',
                    D: 'contenttweaker:compressed_plate',
                    E: 'appliedenergistics2:engineering_processor'
                },
                result: Item.of('appliedenergistics2:spatial_io_port', 1)
            },
            {
                pattern: ["ABA", "C C", "DED"],
                key: {
                    A: 'thermal:obsidian_glass',
                    B: 'appliedenergistics2:terminal',
                    C: 'appliedenergistics2:fluix_glass_cable',
                    D: 'contenttweaker:compressed_plate',
                    E: 'appliedenergistics2:purified_fluix_crystal'
                },
                result: Item.of('appliedenergistics2:chest', 1)
            },
            {
                pattern: ["qqq", "rpr", "qqq"],
                key: {
                    p: '#forge:gears/electrum',
                    q: '#pneumaticcraft:reinforced_stone',
                    r: '#forge:plates/electrum'
                },
                result: Item.of('rftoolsbase:machine_base', 1)
            },
            {
                pattern: ["qpq", "rir", "qpq"],
                key: {
                    i: 'thermal:enderium_glass',
                    p: '#forge:gears/lapis',
                    q: '#forge:sheetmetals/steel',
                    r: '#forge:sheetmetals/electrum'
                },
                result: Item.of('rftoolsbase:machine_frame', 1)
            },
            {
                pattern: ["qsq", "rpr", "qsq"],
                key: {
                    p: 'rftoolsbase:machine_frame',
                    q: '#forge:gems/dimensional',
                    r: '#forge:gems/diamond',
                    s: '#forge:dusts/redstone'
                },
                result: Item.of('rftoolsbase:machine_infuser', 1)
            },
            {
                pattern: ["iei", "xgx", "ibi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    g: 'appliedenergistics2:1k_cell_component',
                    i: '#forge:gems/silicon',
                    b: 'extendedcrafting:redstone_component',
                    x: 'appliedenergistics2:quartz_vibrant_glass'
                },
                result: Item.of('refinedstorage:1k_storage_part', 1)
            },
            {
                pattern: ["iei", "xbx", "ixi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    i: 'refinedstorage:basic_processor',
                    b: 'extendedcrafting:redstone_component',
                    x: 'refinedstorage:1k_storage_part'
                },
                result: Item.of('refinedstorage:4k_storage_part', 1)
            },
            {
                pattern: ["iei", "xbx", "ixi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    i: 'refinedstorage:improved_processor',
                    b: 'extendedcrafting:redstone_component',
                    x: 'refinedstorage:4k_storage_part'
                },
                result: Item.of('refinedstorage:16k_storage_part', 1)
            },
            {
                pattern: ["iei", "xbx", "ixi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    i: 'refinedstorage:advanced_processor',
                    b: 'extendedcrafting:redstone_component',
                    x: 'refinedstorage:16k_storage_part'
                },
                result: Item.of('refinedstorage:64k_storage_part', 1)
            },
            {
                pattern: ["iei", "xgx", "ibi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    i: '#forge:gems/silicon',
                    b: 'extendedcrafting:redstone_component',
                    x: 'appliedenergistics2:quartz_vibrant_glass',
                    g: 'appliedenergistics2:1k_fluid_cell_component'
                },
                result: Item.of('refinedstorage:64k_fluid_storage_part', 1)
            },
            {
                pattern: ["iei", "xgx", "ixi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    g: 'cyclic:tank',
                    i: 'refinedstorage:basic_processor',
                    x: 'refinedstorage:64k_fluid_storage_part'
                },
                result: Item.of('refinedstorage:256k_fluid_storage_part', 1)
            },
            {
                pattern: ["S S", "WQW", "NBN"],
                key: {
                    B: 'create:electron_tube',
                    Q: 'quantumstorage:qsu',
                    N: '#forge:plates/gold',
                    W: 'minecraft:iron_bars',
                    S: '#forge:gears/iron'
                },
                result: Item.of('quantumstorage:controller', 1)
            },
            {
                pattern: ["PWE", "QBZ", "PWE"],
                key: {
                    P: '#forge:dusts/diamond',
                    B: 'cyclic:laser',
                    W: 'createaddition:capacitor',
                    Q: 'mininggadgets:upgrade_empty',
                    Z: 'create:electron_tube',
                    E: '#forge:plates/iron'
                },
                result: Item.of('mininggadgets:mininggadget', 1)
            },
            {
                pattern: ["PWP", "QBQ", "PWP"],
                key: {
                    P: 'extendedcrafting:redstone_ingot',
                    B: '#forge:gears/diamond',
                    W: '#forge:plates/lapis_lazuli',
                    Q: 'immersiveengineering:insulating_glass'
                },
                result: Item.of('mininggadgets:upgrade_empty', 1)
            },
            {
                pattern: ["PPP", "QBQ", "PPP"],
                key: {
                    P: '#forge:sheetmetals/iron',
                    B: 'immersiveengineering:circuit_board',
                    Q: 'mininggadgets:upgrade_empty'
                },
                result: Item.of('mininggadgets:modificationtable', 1)
            },
            {
                pattern: ["LXL", "XWX", "LXL"],
                key: {
                    X: '#forge:sand',
                    L: '#forge:gravel',
                    W: '#forge:storage_blocks/clay'
                },
                result: Item.of('minecraft:light_gray_concrete_powder', 8)
            },
            {
                pattern: ["PAP", "PAP", "III"],
                key: {
                    P: 'mekanismgenerators:solar_generator',
                    A: '#mekanism:alloys/infused',
                    I: 'contenttweaker:compressed_plate'
                },
                result: Item.of('mekanismgenerators:advanced_solar_generator', 1)
            },
            {
                pattern: ["OWO", "XCX", "OAO"],
                key: {
                    C: 'mekanism:electrolytic_core',
                    X: '#mekanism:alloys/infused',
                    W: 'mekanism:steel_casing',
                    O: '#forge:plates/osmium',
                    A: '#forge:circuits/basic'
                },
                result: Item.of('mekanismgenerators:gas_burning_generator', 1)
            },
            {
                pattern: ["III", "WOW", "CFC"],
                key: {
                    W: '#forge:plates/osmium',
                    I: 'contenttweaker:compressed_plate',
                    O: 'routerreborn:furnace',
                    C: '#forge:plates/bronze',
                    F: '#forge:circuits/basic'
                },
                result: Item.of('mekanismgenerators:heat_generator', 1)
            },
            {
                pattern: ["QQQ", "AIA", "OEO"],
                key: {
                    Q: 'mekanismgenerators:solar_panel',
                    A: '#mekanism:alloys/infused',
                    I: '#forge:circuits/basic',
                    E: 'mekanism:energy_tablet',
                    O: '#forge:plates/osmium'
                },
                result: Item.of('mekanismgenerators:solar_generator', 1)
            },
            {
                pattern: ["CPC", "XBX", "CWC"],
                key: {
                    B: 'minecraft:blast_furnace',
                    C: '#forge:ingots/obsidian',
                    P: 'create:electron_tube',
                    W: 'createaddition:capacitor',
                    X: 'immersiveengineering:insulating_glass'
                },
                result: Item.of('cyclic:melter', 1)
            },
            {
                pattern: ["CPC", "XBX", "CWC"],
                key: {
                    B: 'create:basin',
                    C: '#forge:ingots/obsidian',
                    P: '#forge:plates/lapis_lazuli',
                    W: 'create:electron_tube',
                    X: 'immersiveengineering:insulating_glass'
                },
                result: Item.of('cyclic:solidifier', 1)
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.result, recipe.pattern, recipe.key);
    });
});
