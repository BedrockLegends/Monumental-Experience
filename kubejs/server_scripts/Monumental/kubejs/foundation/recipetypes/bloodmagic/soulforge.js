onEvent('recipes', (event) => {
    event.recipes.bloodmagic.soulforge({
        type: 'bloodmagic:soulforge',
        input0: {
            item: 'bloodmagic:soulgemlesser'
        },
        input1: {
            tag: 'forge:gems/psigem'
        },
        input2: {
            tag: 'forge:ingots/psimetal'
        },
        input3: {
            item: 'bloodmagic:infusedslate'
        },
        output: {
            item: 'bloodmagic:soulgemcommon'
        },
        minimumDrain: 240.0,
        drain: 50.0
})
    event.recipes.bloodmagic.soulforge({
        type: 'bloodmagic:soulforge',
        input0: {
            item: 'minecraft:cauldron'
        },
        input1: {
            item: 'mana-and-artifice:stone_rune_blank'
        },
        input2: {
            item: 'potionsmaster:calcinatedlapis_powder'
        },
        input3: {
            tag: 'forge:gems/mana_diamond'
        },
        output: {
            item: 'bloodmagic:demoncrucible'
        },
        minimumDrain: 400.0,
        drain: 100.0
})
    event.recipes.bloodmagic.soulforge({
        type: 'bloodmagic:soulforge',
        input0: {
            item: 'bloodmagic:soulforge'
        },
        input1: {
            item: 'mana-and-artifice:stone_rune_blank'
        },
        input2: {
            item: 'potionsmaster:calcinatedlapis_powder'
        },
        input3: {
            item: 'botania:mana_glass'
        },
        output: {
            item: 'bloodmagic:demoncrystallizer'
        },
        minimumDrain: 500.0,
        drain: 100.0
})
    event.recipes.bloodmagic.soulforge({
        type: 'bloodmagic:soulforge',
        input0: {
            item: 'bloodmagic:soulgempetty'
        },
        input1: {
            item: 'occultism:spirit_attuned_gem'
        },
        input2: {
            tag: 'forge:gems/mana_diamond'
        },
        input3: {
            item: 'cyclic:apple_lapis'
        },
        output: {
            item: 'bloodmagic:soulgemlesser'
        },
        minimumDrain: 60.0,
        drain: 20.0
})
    event.recipes.bloodmagic.soulforge({
        type: 'bloodmagic:soulforge',
        input0: {
            item: 'psi:psidust'
        },
        input1: {
            item: 'naturesaura:tainted_gold'
        },
        input2: {
            item: 'mana-and-artifice:chimerite_gem'
        },
        input3: {
            item: 'potionsmaster:calcinatedlapis_powder'
        },
        output: {
            item: 'bloodmagic:soulgempetty'
        },
        minimumDrain: 1.0,
        drain: 1.0
    });
});
