import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import { ToolSeed } from "../Items/Tools/tools.seed";
export const createTools = async (db: PrismaClient) => {
  //Create Tools
  cinfo("Creating tools");
  for (const Tool of ToolSeed) {
    try {
      cinfo("Creating tool:", Tool.name);
      await db.tool.upsert({
        where: {
          id: Tool.id,
        },
        update: Tool,
        create: Tool,
      });
      cinfo("Tool created");
    } catch (error) {
      cerr("Error creating tool:", Tool.name, error);
      return;
    }
  }
  cinfo("Tools created");
};
