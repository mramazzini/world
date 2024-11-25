import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import {
  FeatureGroupSeed,
  FeaturesFromFeatureGroupSeed,
} from '../FeatureGroup/FeatureGroup.seed';

export const createFeatureGroup = async (db: PrismaClient) => {
  cinfo('Creating feature groups');
  for (const group of FeatureGroupSeed) {
    try {
      cinfo('Creating feature group:', group.name);
      await db.featureGroup.upsert({
        where: {
          id: group.id,
        },
        update: group,
        create: group,
      });
      cinfo('Feature group created');
    } catch (error) {
      cerr('Error creating feature group:', group.name, error);
      throw new Error('Error creating feature group');
    }
  }

  cinfo('Feature groups created');

  cinfo('Creating feature group features');
  for (const feature of FeaturesFromFeatureGroupSeed) {
    try {
      cinfo('Creating feature group feature:', feature.name);
      await db.feature.upsert({
        where: {
          id: feature.id,
        },
        update: feature,
        create: feature,
      });
      cinfo('Feature group feature created');
    } catch (error) {
      cerr('Error creating feature group feature:', feature.name, error);
      throw new Error('Error creating feature group feature');
    }
  }
};
