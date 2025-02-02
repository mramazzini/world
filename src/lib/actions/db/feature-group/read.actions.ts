import { DBMetadata, SingleDataQuery } from '@/lib/types/metadata';
import { FeatureGroupInfo } from '@/lib/types/modelInfo';
import { PrismaClient } from '@prisma/client';
import { FeatureInfoIncludeTemplate } from '../dbIncludeTemplates';

const FeatureGroupInfoTemplate = {
  include: {
    FeaturesInGroup: {
      include: FeatureInfoIncludeTemplate,
    },
  },
};

export async function getFeatureGroupMetadata(): Promise<DBMetadata[]> {
  const db = new PrismaClient();
  const res = await db.featureGroup.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      flavorText: true,
      slug: true,
      // updatedAt: true,
    },
  });
  await db.$disconnect();
  return res;
}
export async function getFeatureGroup({
  query,
  type,
}: SingleDataQuery): Promise<FeatureGroupInfo | null> {
  const db = new PrismaClient();

  const res = await db.featureGroup.findFirst({
    where: {
      [type]: query,
    },
    ...FeatureGroupInfoTemplate,
  });
  await db.$disconnect();

  return res;
}
