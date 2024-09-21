import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import { ItemsSeed } from "../Items/Items.seed";

export const createItems = async (db: PrismaClient) => {
  //Create Items
  cinfo("Creating items");
  for (const Item of ItemsSeed) {
    try {
      cinfo("Creating item:", Item.name);

      await db.item.upsert({
        where: {
          id: Item.id,
        },
        update: {},
        create: {
          ...Item,
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
};
