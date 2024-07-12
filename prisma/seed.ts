import Features from "./seeds/Features";
import Classes from "./seeds/Class";
import SubClasses from "./seeds/SubClasses";
import CasterTypes from "./seeds/CasterType";
import Weapons from "./seeds/Weapons";
import Properties from "./seeds/Properties";
import WeaponToPropertyArr from "./seeds/WeaponToProperty";
import CustomFields from "./seeds/CustomFields";
import {
  PrismaClient,
  Weapon,
  WeaponProperty,
  WeaponToProperty,
} from "@prisma/client";
const db = new PrismaClient();
const seed = async () => {
  // clear the database
  console.log("Clearing database");
  await db.feature.deleteMany({});
  await db.subClass.deleteMany({});
  await db.class.deleteMany({});
  await db.casterType.deleteMany({});
  await db.weaponToProperty.deleteMany({});
  await db.weapon.deleteMany({});
  await db.weaponProperty.deleteMany({});

  console.log("Database cleared");

  // Create caster types
  console.log("Creating caster types");
  for (const CasterType of CasterTypes) {
    try {
      console.log("Creating caster type", CasterType.name);
      await db.casterType.create({
        data: CasterType,
      });
      console.log("Caster type created");
    } catch (error) {
      console.error("Error creating caster type", CasterType.name, error);
      return;
    }
  }

  // Create classes
  console.log("Creating classes");
  for (const Class of Classes) {
    try {
      console.log("Creating class", Class.name);
      await db.class.create({
        data: Class,
      });
      console.log("Class created");
    } catch (error) {
      console.error("Error creating class", Class.name, error);
      return;
    }
  }
  console.log("Classes created");

  // Create features
  console.log("Creating features");
  for (const Feature of Features) {
    try {
      console.log("Creating feature", Feature.name);
      await db.feature.create({
        data: Feature,
      });
      console.log("Feature created");
    } catch (error) {
      console.error("Error creating feature", Feature.name, error);
      return;
    }
  }
  console.log("Features created");

  //Create custom fields
  console.log("Creating custom fields");
  for (const CustomField of CustomFields) {
    try {
      console.log("Creating custom field", CustomField.name);
      await db.customField.create({
        data: CustomField,
      });
      console.log("Custom field created");
    } catch (error) {
      console.error("Error creating custom field", CustomField.name, error);
      return;
    }
  }
  console.log("Custom fields created");

  // Create sub classes

  // Create weapons
  console.log("Creating weapons");
  let weapons: Weapon[] = [];
  for (const Weapon of Weapons) {
    try {
      console.log("Creating weapon", Weapon.name);
      const createdWeapon = await db.weapon.create({
        data: Weapon,
      });
      weapons.push(createdWeapon);
      console.log("Weapon created");
    } catch (error) {
      console.error("Error creating weapon", Weapon.name, error);
      return;
    }
  }
  // Create properties
  console.log("Creating Weapon properties");
  let properties: WeaponProperty[] = [];
  for (const Property of Properties) {
    try {
      console.log("Creating property", Property.name);
      const createdProperty = await db.weaponProperty.create({
        data: Property,
      });
      properties.push(createdProperty);
      console.log("Property created");
    } catch (error) {
      console.error("Error creating property", Property.name, error);
      return;
    }
  }
  console.log("Properties created");

  //Link weapons and properties
  console.log("Linking weapons and properties");
  for (const WeaponToProperty of WeaponToPropertyArr) {
    try {
      console.log(
        "Linking weapon",
        WeaponToProperty.weaponName,
        "with properties",
        WeaponToProperty.properties.join(", ")
      );
      // Find the weapon in the weapons array
      const weapon = weapons.find(
        (w) => w.name === WeaponToProperty.weaponName
      );
      if (!weapon) {
        console.error("Weapon not found", WeaponToProperty.weaponName);
        return;
      }
      // Find the properties in the properties array
      const propertiesToLink = properties.filter((p) =>
        WeaponToProperty.properties.includes(p.name)
      );
      if (propertiesToLink.length !== WeaponToProperty.properties.length) {
        console.error(
          "Not all properties found for weapon",
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
          console.error("Error linking weapon and properties", error);
          return;
        }
      }
      console.log("Weapon linked with properties");
    } catch (error) {
      console.error("Error linking weapon and properties", error);
      return;
    }
  }

  console.log("✅ Successfully seeded database ✅");
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Exiting...");
    await db.$disconnect();
  });
