import Features from "./seeds/Features";
import Classes from "./seeds/Class";
import SubClasses from "./seeds/SubClasses";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
const seed = async () => {
  // clear the database
  console.log("Clearing database");
  await db.feature.deleteMany({});
  await db.subClass.deleteMany({});
  await db.class.deleteMany({});
  console.log("Database cleared");
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
    }
  }
  console.log("Features created");
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
