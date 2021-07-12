onEvent('recipes', (event) => {
    event.recipes.appliedenergistics2.inscriber(
        {
            "type": "appliedenergistics2:inscriber",
            "mode": "press",
            "result": {
              "item": "appliedenergistics2:printed_engineering_processor"
            },
            "ingredients": {
              "top": {
                "item": "appliedenergistics2:engineering_processor_press"
              },
              "middle": {
                "tag": "forge:plates/enderium"
              }
            }
          }
    );
    event.recipes.appliedenergistics2.inscriber(
        {
            "type": "appliedenergistics2:inscriber",
            "mode": "inscribe",
            "result": {
              "item": "appliedenergistics2:printed_logic_processor"
            },
            "ingredients": {
              "top": {
                "item": "appliedenergistics2:logic_processor_press"
              },
              "middle": {
                "tag": "forge:plates/electrum"
              }
            }
          }
    );
    event.recipes.appliedenergistics2.inscriber(
        {
            "type": "appliedenergistics2:inscriber",
            "mode": "inscribe",
            "result": {
              "item": "refinedstorage:advanced_processor"
            },
            "ingredients": {
              "top": {
                "tag": "forge:gems/silicon"
              },
              "middle": {
                "tag": "forge:dusts/redstone"
              },
              "bottom": {
                "item": "refinedstorage:raw_advanced_processor"
              }
            }
          }
    );
    event.recipes.appliedenergistics2.inscriber(
        {
            "type": "appliedenergistics2:inscriber",
            "mode": "inscribe",
            "result": {
              "item": "refinedstorage:basic_processor"
            },
            "ingredients": {
              "top": {
                "tag": "forge:gems/silicon"
              },
              "middle": {
                "tag": "forge:dusts/redstone"
              },
              "bottom": {
                "item": "refinedstorage:raw_basic_processor"
              }
            }
          }
    );
    //Extra Disks
    event.recipes.appliedenergistics2.inscriber(
      {
          "type": "appliedenergistics2:inscriber",
          "mode": "inscribe",
          "result": {
            "item": "extradisks:withering_processor"
          },
          "ingredients": {
            "top": {
              "item": "appliedenergistics2:printed_silicon"
            },
            "middle": {
              "tag": "forge:dusts/redstone"
            },
            "bottom": {
              "item": "extradisks:raw_withering_processor"
            }
          }
        }
  );
});