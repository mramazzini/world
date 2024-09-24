import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { EquipmentPackSeed } from "../Items/EquipmentPack/EquipmentPack.seed";
import { PrismaClient } from "@prisma/client";

export const createEquipmentPacks = async (db: PrismaClient) => {
  // create equipment packs
  cinfo("Creating equipment packs");
  let createdEquipmentPacks = [];
  for (const Pack of EquipmentPackSeed) {
    try {
      cinfo("Creating equipment pack:", Pack.name);
      const e = await db.equipmentPack.upsert({
        where: {
          id: Pack.id,
        },
        update: Pack,
        create: {
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
};
