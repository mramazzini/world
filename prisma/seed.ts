import Features from "./seeds/Classes/Features.seed";
import Classes from "./seeds/Classes/Class.seed";
import SubClasses from "./seeds/Subclasses/Subclasses.seed";
import CasterTypes from "./seeds/Classes/CasterType.seed";

import SubclassFeatures from "./seeds/SubclassFeatures";
import { SpellSeed } from "./seeds/Spells/spells.seed";
import { cwarn, cinfo, cerr, csuccess } from "@/lib/utils/chalkLog";
import { SpellLists } from "./seeds/Spells/SpellLists/SpellLists.seed";
import Backgrounds from "./seeds/Backgrounds/Backgrounds.seed";
import BackgroundFeatures from "./seeds/Backgrounds/BackgroundFeatures.seed";
import SpellListToSpellArr from "./seeds/Spells/SpellLists/SpellListToSpell.seed";
import Species from "./seeds/Races/Races.seed";
import Traits from "./seeds/Races/Traits.seed";
import { ClassicVariants } from "./seeds/Races/Variants/ClassicVariants";
import ClassicTraits from "./seeds/Races/Variants/ClassicTraits";
import { ItemsSeed } from "./seeds/Items/Items.seed";
import { ItemTypes, PrismaClient, Weapon } from "@prisma/client";
import createMaxyUser from "./seeds/User.seed";
import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import { ToolSeed } from "./seeds/Items/Tools/tools.seed";
import { Weapons } from "./seeds/Items/Weapons/Weapons.seed";
import { ArmorSeed } from "./seeds/Items/Armor/Armor.seed";
import { EquipmentPackSeed } from "./seeds/Items/EquipmentPack/EquipmentPack.seed";
import { getPotentialItemsFromClass } from "@/app/components/Utility/idExtraction";

const db = new PrismaClient();
// db cleared with npm run nuke prior to seeding
const seed = async () => {
  // Create spells
  cinfo("Creating spells");
  for (const Spell of SpellSeed) {
    try {
      cinfo("Creating spell:", Spell.name);
      await db.spell.create({
        data: Spell,
      });
      cinfo("Spell created");
    } catch (error) {
      cerr("Error creating spell:", Spell.name, error);
      return;
    }
  }
  cinfo("Spells created");

  //create spell lists
  cinfo("Creating spell lists");
  for (const SpellList of SpellLists) {
    try {
      cinfo("Creating spell list:", SpellList.name);
      await db.spellList.create({
        data: SpellList,
      });
      cinfo("Spell list created");
    } catch (error) {
      cerr("Error creating spell list:", SpellList.name, error);
      return;
    }
  }
  cinfo("Spell lists created");

  //link spells to spell lists
  cinfo("Linking spells to spell lists");
  for (const SpellListToSpell of SpellListToSpellArr) {
    try {
      cinfo("Linking spell to spell list:", SpellListToSpell.spellId);
      await db.spellList.update({
        where: {
          id: SpellListToSpell.spellListId,
        },
        data: {
          Spells: {
            connect: {
              id: SpellListToSpell.spellId,
            },
          },
        },
      });
      cinfo("Spell linked to spell list");
    } catch (error) {
      cerr(
        "Error linking spell to spell list:",
        SpellListToSpell.spellId,
        error
      );
      return;
    }
  }
  // Create weapons
  cinfo("Creating weapons");

  for (const Weapon of Weapons) {
    try {
      cinfo("Creating weapon:", Weapon.name);
      const createdWeapon = await db.weapon.create({
        data: {
          ...Weapon,
          ammunitionId: null,
        },
      });
      cinfo("Weapon created");
    } catch (error) {
      cerr("Error creating weapon:", Weapon.name, error);
      return;
    }
  }
  cinfo("Weapons created");
  //Create Tools
  cinfo("Creating tools");
  for (const Tool of ToolSeed) {
    try {
      cinfo("Creating tool:", Tool.name);
      await db.tool.create({
        data: Tool,
      });
      cinfo("Tool created");
    } catch (error) {
      cerr("Error creating tool:", Tool.name, error);
      return;
    }
  }
  cinfo("Tools created");
  //Create Armor
  cinfo("Creating armor");
  for (const Armor of ArmorSeed) {
    try {
      cinfo("Creating armor:", Armor.name);
      await db.armor.create({
        data: Armor,
      });
      cinfo("Armor created");
    } catch (error) {
      cerr("Error creating armor:", Armor.name, error);
      return;
    }
  }
  cinfo("Armor created");

  // create equipment packs
  cinfo("Creating equipment packs");
  let createdEquipmentPacks = [];
  for (const Pack of EquipmentPackSeed) {
    try {
      cinfo("Creating equipment pack:", Pack.name);
      const e = await db.equipmentPack.create({
        data: {
          ...Pack,
          itemList: undefined,
        },
      });
      createdEquipmentPacks.push(e);
      cinfo("Equipment pack created");
    } catch (error) {
      cerr("Error creating equipment pack:", Pack.name, error);
      return;
    }
  }
  cinfo("Equipment packs created");

  //Create Items
  cinfo("Creating items");
  for (const Item of ItemsSeed) {
    try {
      cinfo("Creating item:", Item.name);

      await db.item.create({
        data: {
          ...Item,
          equipmentPackId:
            createdEquipmentPacks.find((p) => p.name === Item.name)?.id || null,
        },
      });
      cinfo("Item created");
    } catch (error) {
      cerr("Error creating item:", Item.name, error);
      console.error(error);
      return;
    }
  }
  cinfo("Items created");

  //After items are created, link ammunition to weapons
  cinfo("Linking ammunition to weapons");
  for (const Weapon of Weapons) {
    if (Weapon.ammunitionId) {
      try {
        cinfo("Linking ammunition to weapon:", Weapon.name);
        await db.weapon.update({
          where: {
            id: Weapon.id,
          },
          data: {
            ammunition: {
              connect: {
                id: Weapon.ammunitionId,
              },
            },
          },
        });
        cinfo("Ammunition linked to weapon");
      } catch (error) {
        cerr("Error linking ammunition to weapon:", Weapon.name, error);
        return;
      }
    }
  }
  cinfo("Ammunition linked to weapons");

  // populate equipment pack items
  cinfo("Populating equipment pack items");
  for (const Pack of createdEquipmentPacks) {
    try {
      cinfo("Populating equipment pack:", Pack.name);
      await db.equipmentPack.update({
        where: {
          id: Pack.id,
        },
        data: {
          itemList: EquipmentPackSeed.find((p) => p.name === Pack.name)
            ?.itemList,
        },
      });
      cinfo("Equipment pack populated");
    } catch (error) {
      cerr("Error populating equipment pack:", Pack.name, error);
      return;
    }
  }

  // Create Backgrounds
  cinfo("Creating backgrounds");
  for (const Background of Backgrounds) {
    try {
      cinfo("Creating background:", Background.name);
      await db.background.create({
        data: Background,
      });
      cinfo("Background created");
    } catch (error) {
      cerr("Error creating background:", Background.name, error);
      return;
    }
  }
  cinfo("Backgrounds created");

  // Create Background Features
  // cinfo("Creating background features");
  // for (const Feature of BackgroundFeatures) {
  //   try {
  //     cinfo("Creating feature:", Feature.name);
  //     //make sure feature has a classId and levels
  //     if (!Feature.backgroundId) {
  //       cerr("Feature missing backgroundId field:", Feature.name);
  //       return;
  //     }

  //     // verify extendedTable integrity
  //     if (Feature.extendedTable) {
  //       if (
  //         !verifyTableIntegrity(Feature.extendedTable as PrismaJson.Table[])
  //       ) {
  //         return;
  //       }
  //     }
  //     await db.backgroundFeature.create({
  //       data: Feature,
  //     });
  //     cinfo("Feature created");
  //   } catch (error) {
  //     cerr("Error creating background feature:", Feature.name, error);
  //     return;
  //   }
  // }
  // cinfo("Background features created");

  // Create classes
  cinfo("Creating classes");
  for (const Class of Classes) {
    try {
      cinfo("Creating class:", Class.name);
      await db.class.create({
        data: Class,
      });
      cinfo("Class created");
    } catch (error) {
      cerr("Error creating class:", Class.name, error);
      return;
    }
  }
  cinfo("Classes created");

  // link potential items to classes
  cinfo("Linking potential items to classes");
  for (const Class of Classes) {
    try {
      cinfo("Linking potential items to class:", Class.name);
      const items = getPotentialItemsFromClass(Class);
      await db.class.update({
        where: {
          id: Class.id,
        },
        data: {
          potentialEquipment: {
            connect: items.map((i) => ({ id: i })),
          },
        },
      });
      cinfo("Potential items linked to class");
    } catch (error) {
      cerr("Error linking potential items to class:", Class.name, error);
      return;
    }
  }

  // Create sub classes
  cinfo("Creating sub classes");
  for (const SubClass of SubClasses) {
    try {
      //make sure subclass has a classId and levels
      if (!SubClass.classId) {
        console.error("Subclass missing classId field:", SubClass.name);
        return;
      }
      cinfo("Creating sub class:", SubClass.name);
      await db.subClass.create({
        data: SubClass,
      });
      cinfo("Sub class created");
    } catch (error) {
      console.error("Error creating sub class:", SubClass.name, error);
      return;
    }
  }
  cinfo("Sub classes created");

  // cinfo("Creating Subclass features");
  // for (const SubclassFeature of SubclassFeatures) {
  //   try {
  //     cinfo("Creating subclass feature:", SubclassFeature.name);
  //     //make sure subclass feature has a subClassId and levels
  //     if (!SubclassFeature.subClassId) {
  //       cerr(
  //         "Subclass feature missing subClassId field:",
  //         SubclassFeature.name
  //       );
  //       return;
  //     }
  //     if (!SubclassFeature.levels) {
  //       cerr("Subclass feature missing levels field:", SubclassFeature.name);
  //       return;
  //     }
  //     //verify extendedTable integrity
  //     if (SubclassFeature.extendedTable) {
  //       if (
  //         !verifyTableIntegrity(
  //           SubclassFeature.extendedTable as PrismaJson.Table[]
  //         )
  //       ) {
  //         return;
  //       }
  //     }
  //     await db.subClassFeature.create({
  //       data: SubclassFeature,
  //     });
  //     cinfo("Subclass feature created");
  //   } catch (error) {
  //     cerr("Error creating subclass feature", SubclassFeature.name, error);
  //     return;
  //   }
  // }
  // cinfo("Subclass features created");

  //create species and traits
  cinfo("Creating Species");
  for (const r of Species) {
    try {
      cinfo("Creating species:", r.name);
      await db.race.create({
        data: r,
      });
      cinfo("Species created");
    } catch (error) {
      cerr("Error creating species:", r.name, error);
      return;
    }
  }
  cinfo("Species created");
  //create classic variants
  cinfo("Creating Classic Variants");
  for (const v of ClassicVariants) {
    try {
      cinfo("Creating classic variant:", v.name);
      if (!v.baseRaceId) {
        cerr("Classic variant missing raceId field:", v.name);
        return;
      }
      await db.raceVariant.create({
        data: v,
      });
      cinfo("Classic variant created");
    } catch (error) {
      cerr("Error creating classic variant:", v.name, error);
      return;
    }
  }
  cinfo("Creating Traits");
  for (const t of Traits) {
    try {
      cinfo("Creating trait:", t.name);
      if (!t.raceId && !t.raceVariantId) {
        cerr("Trait missing raceId field:", t.name);
        return;
      }
      if (
        t.extendedTable &&
        !verifyTableIntegrity(t.extendedTable as PrismaJson.Table[])
      ) {
        cerr("Error verifying extended table integrity:", t.name);
        return;
      }
      await db.racialTraits.create({
        data: t,
      });
      cinfo("Trait created");
    } catch (error) {
      cerr("Error creating trait:", t.name, error);
      return;
    }
  }
  cinfo("Traits created");
  cinfo("Creating Classic Traits");
  for (const t of ClassicTraits) {
    try {
      cinfo("Creating classic trait:", t.name);
      if (!t.raceId && !t.raceVariantId) {
        cerr("Classic trait missing raceId field:", t.name);
        return;
      }
      if (
        t.extendedTable &&
        !verifyTableIntegrity(t.extendedTable as PrismaJson.Table[])
      ) {
        cerr("Error verifying extended table integrity:", t.name);
        return;
      }
      await db.racialTraits.create({
        data: t,
      });
      cinfo("Classic trait created");
    } catch (error) {
      cerr("Error creating classic trait:", t.name, error);
      return;
    }
  }
  // await createMaxyUser(db);

  csuccess("✅ Successfully seeded database ✅");
};

seed()
  .catch((e) => {
    cerr(e);
    process.exit(1);
  })
  .finally(async () => {
    cinfo("Exiting...");
    await db.$disconnect();
  });
