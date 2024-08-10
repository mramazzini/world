import Features from "./seeds/Features.seed";
import Classes from "./seeds/Class.seed";
import SubClasses from "./seeds/Subclasses.seed";
import CasterTypes from "./seeds/CasterType.seed";
import Weapons from "./seeds/Weapons.seed";
import Properties from "./seeds/Properties.seed";
import WeaponToPropertyArr from "./seeds/WeaponToProperty.seed";
import CustomFields from "./seeds/CustomFields.seed";
import SubclassFeatures from "./seeds/SubclassFeatures";
import Spells from "./seeds/Spells/spells.seed";
import { cwarn, cinfo, cerr, csuccess } from "@/lib/utils/chalkLog";
import SpellLists from "./seeds/Spells/SpellLists/SpellLists.seed";
import { SpellListToSpell } from "@prisma/client";
import SpellListToSpellArr from "./seeds/Spells/SpellLists/SpellListToSpell.seed";
import {
  PrismaClient,
  Weapon,
  WeaponProperty,
  WeaponToProperty,
} from "@prisma/client";
import createMaxyUser from "./seeds/User.seed";
import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import { src } from "@/lib/types";

const db = new PrismaClient();
// db cleared with npm run nuke prior to seeding
const seed = async () => {
  // Create spells
  cinfo("Creating spells");
  for (const Spell of Spells) {
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

  //linking spellLists to spells
  cinfo("Creating spell list to spell links");
  for (const s of SpellListToSpellArr) {
    try {
      cinfo("Creating spell list to spell link:", s.spellId);
      await db.spellListToSpell.create({
        data: s,
      });
      cinfo("Spell list to spell link created");
    } catch (error) {
      cerr("Error creating spell list to spell link:", s.spellId, error);
      return;
    }
  }

  // Create caster types
  cinfo("Creating caster types");
  for (const CasterType of CasterTypes) {
    try {
      cinfo("Creating caster type:", CasterType.name);
      await db.casterType.create({
        data: CasterType,
      });
      cinfo("Caster type created");
    } catch (error) {
      cerr("Error creating caster type:", CasterType.name, error);
      return;
    }
  }
  cinfo("Caster types created");

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

  // Create features
  cinfo("Creating features");
  for (const Feature of Features) {
    try {
      cinfo("Creating feature:", Feature.name);
      //make sure feature has a classId and levels
      if (!Feature.classId) {
        cerr("Feature missing classId field:", Feature.name);
        return;
      }
      if (!Feature.levels) {
        cerr("Feature missing levels field:", Feature.name);
        return;
      }
      // verify extendedTable integrity
      if (Feature.extendedTable) {
        if (
          !verifyTableIntegrity(Feature.extendedTable as PrismaJson.Table[])
        ) {
          return;
        }
      }
      await db.feature.create({
        data: Feature,
      });
      cinfo("Feature created");
    } catch (error) {
      cerr("Error creating feature:", Feature.name, error);
      return;
    }
  }
  cinfo("Features created");

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

  cinfo("Creating Subclass features");
  for (const SubclassFeature of SubclassFeatures) {
    try {
      cinfo("Creating subclass feature:", SubclassFeature.name);
      //make sure subclass feature has a subClassId and levels
      if (!SubclassFeature.subClassId) {
        cerr(
          "Subclass feature missing subClassId field:",
          SubclassFeature.name
        );
        return;
      }
      if (!SubclassFeature.levels) {
        cerr("Subclass feature missing levels field:", SubclassFeature.name);
        return;
      }
      //verify extendedTable integrity
      if (SubclassFeature.extendedTable) {
        if (
          !verifyTableIntegrity(
            SubclassFeature.extendedTable as PrismaJson.Table[]
          )
        ) {
          return;
        }
      }
      await db.subClassFeature.create({
        data: SubclassFeature,
      });
      cinfo("Subclass feature created");
    } catch (error) {
      cerr("Error creating subclass feature", SubclassFeature.name, error);
      return;
    }
  }
  cinfo("Subclass features created");

  //Create custom fields
  cinfo("Creating custom fields");
  for (const CustomField of CustomFields) {
    try {
      cinfo("Creating custom field:", CustomField.name);
      //make sure custom field has a classId
      if (!CustomField.classId && !CustomField.subClassId) {
        cerr("Custom field missing classId or subClassID:", CustomField.name);
        return;
      }

      await db.customField.create({
        data: CustomField,
      });
      cinfo("Custom field created");
    } catch (error) {
      cerr("Error creating custom field:", CustomField.name, error);
      return;
    }
  }
  cinfo("Custom fields created");

  // Create weapons
  cinfo("Creating weapons");
  let weapons: Weapon[] = [];
  for (const Weapon of Weapons) {
    try {
      cinfo("Creating weapon:", Weapon.name);
      const createdWeapon = await db.weapon.create({
        data: Weapon,
      });
      weapons.push(createdWeapon);
      cinfo("Weapon created");
    } catch (error) {
      cerr("Error creating weapon:", Weapon.name, error);
      return;
    }
  }
  cinfo("Weapons created");
  // Create properties
  cinfo("Creating Weapon properties");
  let properties: WeaponProperty[] = [];
  for (const Property of Properties) {
    try {
      cinfo("Creating property:", Property.name);
      const createdProperty = await db.weaponProperty.create({
        data: Property,
      });
      properties.push(createdProperty);
      cinfo("Property created");
    } catch (error) {
      cerr("Error creating property:", Property.name, error);
      return;
    }
  }
  cinfo("Properties created");

  //Link weapons and properties
  cinfo("Linking weapons and properties");
  for (const WeaponToProperty of WeaponToPropertyArr) {
    try {
      cinfo(
        "Linking weapon -",
        WeaponToProperty.weaponName,
        "- with properties:",
        WeaponToProperty.properties.join(", ")
      );
      // Find the weapon in the weapons array
      const weapon = weapons.find(
        (w) => w.name === WeaponToProperty.weaponName
      );
      if (!weapon) {
        cerr("Weapon not found:", WeaponToProperty.weaponName);
        return;
      }
      // Find the properties in the properties array
      const propertiesToLink = properties.filter((p) =>
        WeaponToProperty.properties.includes(p.name)
      );
      if (propertiesToLink.length !== WeaponToProperty.properties.length) {
        cerr(
          "Not all properties found for weapon:",
          WeaponToProperty.weaponName
        );
        return;
      }
      // Link the properties to the weapon
      for (const property of propertiesToLink) {
        try {
          await db.weaponToProperty.create({
            data: {
              weaponId: weapon.id,
              weaponPropertyId: property.id,
            },
          });
        } catch (error) {
          cerr("Error linking weapon and properties\n", error);
          return;
        }
      }
      cinfo("Weapon linked with properties");
    } catch (error) {
      cerr("Error linking weapon and properties\n", error);
      return;
    }
  }
  await createMaxyUser(db);

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
