import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import Classes from "../Classes/Class.seed";

export const createClasses = async (db: PrismaClient) => {
  // Create classes
  cinfo("Creating classes");
  for (const Class of Classes) {
    try {
      cinfo("Creating class:", Class.name);
      await db.class.upsert({
        where: {
          id: Class.id,
        },
        update: {},
        create: Class,
      });
      cinfo("Class created");
    } catch (error) {
      cerr("Error creating class:", Class.name, error);
      return;
    }
  }
  cinfo("Classes created");
};
