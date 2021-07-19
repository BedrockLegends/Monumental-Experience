#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;
import mods.contenttweaker.block.BlockBuilder;

/*var concrete = new BlockBuilder(<blockmaterial:Rock>);
concrete.withHardnessAndResistance(0.5f);
concrete.withHarvestLevel(1);
concrete.withHarvestTool(<tooltype:pickaxe>);
concrete.withItemGroup(<itemgroup:building_blocks>);
concrete.withMaxStackSize(64);
concrete.withSlipperiness(0.5f);
concrete.build("concrete");
*/

new ItemBuilder()
  .withMaxStackSize(64)
  .build("compressed_plate");