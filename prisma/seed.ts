import Features from "./seeds/Features";
import Classes from "./seeds/Class";
import SubClasses from "./seeds/SubClasses";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
const seed = async () => {
  // clear the database
  await db.feature.deleteMany({});
  await db.subClass.deleteMany({});
  await db.class.deleteMany({});

  // Create classes and get their ids
  const classes = await db.class.createMany({ data: Classes });
  console.log(classes);
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
