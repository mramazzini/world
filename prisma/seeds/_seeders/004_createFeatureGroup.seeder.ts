import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import {
  FeatureGroupSeed,
  FeaturesFromFeatureGroupSeed,
} from '../FeatureGroup/FeatureGroup.seed';
import FeatureGroupEffectsSeed from '../FeatureGroup/FeatureGroupEffects.seed';
import FeatureGroupChoicesSeed from '../FeatureGroup/FeatureGroupChoices.seed';

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

  //create feature group effects
  cinfo('Creating feature group effects');
  for (const effect of FeatureGroupEffectsSeed) {
    try {
      cinfo('Creating feature group effect:', effect.id);
      await db.effect.upsert({
        where: {
          id: effect.id,
        },
        update: effect,
        create: effect,
      });
      cinfo('Feature group effect created');
    } catch (error) {
      cerr('Error creating feature group effect:', effect.id, error);
      throw new Error('Error creating feature group effect');
    }
  }

  cinfo('Feature group effects created');
  cinfo('Creating feature group choices');
  //create feature group choices
  for (const choice of FeatureGroupChoicesSeed) {
    try {
      cinfo('Creating feature group choice:', choice.id);
      await db.choice.upsert({
        where: {
          id: choice.id,
        },
        update: choice,
        create: choice,
      });
      cinfo('Feature group choice created');
    } catch (error) {
      cerr('Error creating feature group choice:', choice.id, error);
      throw new Error('Error creating feature group choice');
    }
  }
};
