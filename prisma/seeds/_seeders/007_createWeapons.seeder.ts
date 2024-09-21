import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import { Weapons } from "../Items/Weapons/Weapons.seed";

export const createWeapons = async (db: PrismaClient) => {
  // Create weapons
  cinfo("Creating weapons");

  for (const Weapon of Weapons) {
    try {
      cinfo("Creating weapon:", Weapon.name);
      await db.weapon.upsert({
        where: {
          id: Weapon.id,
        },
        update: {},
        create: {
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
};
