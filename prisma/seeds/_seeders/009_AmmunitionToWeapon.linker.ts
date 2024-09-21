import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import { Weapons } from "../Items/Weapons/Weapons.seed";

export const ammunitionToWeapon = async (db: PrismaClient) => {
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
};
