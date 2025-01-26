import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import { ToolSeed } from '../Items/Tools/Tool.seed';
import ToolFeaturesSeed from '../Items/Tools/ToolFeatures.seed';
import createFeature from '../_helpers/createFeature';

//Upsert Tool
//Upsert Features
//link Features to tool

export const createTool = async (db: PrismaClient) => {
  //Create Tool
  cinfo('Creating tool');
  for (const Tool of ToolSeed) {
    try {
      cinfo('Creating tool:', Tool.name);
      if (!Tool.id) throw new Error('Tool missing id');

      await db.tool.upsert({
        where: {
          id: Tool.id,
        },
        update: Tool,
        create: Tool,
      });
      cinfo('Tool created');
    } catch (error) {
      cerr('Error creating tool:', Tool.name, error);
      throw new Error('Error creating tool');
    }
  }
  cinfo('Tool created');

  cinfo('Creating tool features');
  for (const ToolFeature of ToolFeaturesSeed) {
    cinfo('Creating tool feature:', ToolFeature.name);
    if (!ToolFeature.id) throw new Error('Tool Feature missing id');

    await createFeature(db, ToolFeature);
  }
  cinfo('Tool features created');
};
