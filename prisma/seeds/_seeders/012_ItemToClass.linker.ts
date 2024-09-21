import { getPotentialItemsFromClass } from "@/app/components/Utility/idExtraction";
import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import Classes from "../Classes/Class.seed";

export const itemToClass = async (db: PrismaClient) => {
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
};
