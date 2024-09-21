import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import { ArmorSeed } from "../Items/Armor/Armor.seed";

export const createArmor = async (db: PrismaClient) => {
  //Create Armor
  cinfo("Creating armor");
  for (const Armor of ArmorSeed) {
    try {
      cinfo("Creating armor:", Armor.name);
      await db.armor.upsert({
        where: {
          id: Armor.id,
        },
        update: {},
        create: Armor,
      });
      cinfo("Armor created");
    } catch (error) {
      cerr("Error creating armor:", Armor.name, error);
      return;
    }
  }
  cinfo("Armor created");
};
