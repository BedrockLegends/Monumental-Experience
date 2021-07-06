onEvent('recipes', event => {
        event.shapeless('1x appliedenergistics2:crafting_terminal', ['appliedenergistics2:terminal', 'create:mechanical_crafter', 'appliedenergistics2:calculation_processor'])
        event.shapeless('1x refinedstorage:pattern', ['appliedenergistics2:blank_pattern'])
        event.shapeless('1x minecraft:red_sandstone', ['#forge:sandstone/colorless', '#forge:sandstone/colorless', '#forge:dyes/red'])
        event.shapeless('1x pamhc2foodextended:bananasplititem', ['#forge:tool_mixingbowl', '#forge:crops/banana', '#forge:icecreams', '#forge:fruits', 'pamhc2trees:walnutitem', '#forge:chocolatebar'])
        event.shapeless('1x pamhc2foodcore:cottoncandyitem', ['#forge:tool_mixingbowl', '#forge:sugar', '#forge:icecreams', '#forge:dyes'])
        event.shapeless('1x pamhc2foodextended:peachesandcreamoatmealitem', ['#forge:tool_pot', '#forge:crops/oats', '#forge:crops/peach', '#forge:cream', '#forge:water'])
        event.shapeless('1x pamhc2foodcore:cookingoilitem', ['#forge:tool_roller', 'pamhc2trees:walnutitem'])
})