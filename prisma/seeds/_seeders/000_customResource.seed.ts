import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import CustomResourceSeed from '../CustomResource/CustomResource.seed';

export const createCustomResources = async (db: PrismaClient) => {
  cinfo('Creating customResources');
  for (const CustomResource of CustomResourceSeed) {
    try {
      cinfo('Creating customResource:', CustomResource.name);
      await db.customResource.upsert({
        where: {
          id: CustomResource.id,
        },
        update: {
          ...CustomResource,
        },
        create: {
          ...CustomResource,
        },
      });
      cinfo('CustomResource created');
    } catch (error) {
      cerr('Error creating customResource:', CustomResource.name, error);
      throw new Error('Error creating customResource');
    }
  }
  cinfo('CustomResources created');
};
