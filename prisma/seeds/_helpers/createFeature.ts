import verifyTableIntegrity from '@/lib/utils/verifyTableIntegrity';
import { Prisma, PrismaClient } from '@prisma/client';

export default async function createFeature(
  db: PrismaClient,
  feature: Prisma.FeatureCreateManyInput
) {
  if (feature.extendedTable) {
    if (!verifyTableIntegrity(feature.extendedTable as PrismaJson.Table[])) {
      throw new Error(`Error verifying table integrity for ${feature.name}`);
    }
  }
  try {
    await db.feature.upsert({
      where: {
        id: feature.id,
      },
      update: feature,
      create: feature,
    });
    console.info(`Feature created: ${feature.name}`);
  } catch (error) {
    console.error(`Error creating feature: ${feature.name}`, error);
    throw new Error(`Error creating feature: ${feature.name}`);
  }
}
