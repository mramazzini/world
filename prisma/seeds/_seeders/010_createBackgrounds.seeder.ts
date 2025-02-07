import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import Backgrounds from '../Backgrounds/Backgrounds.seed';
import BackgroundFeatures from '../Backgrounds/BackgroundFeatures.seed';
import createFeature from '../_helpers/createFeature';
import { createSlug } from '../_helpers/createSlug';
import BackgroundChoicesSeed from '../Backgrounds/BackgroundChoices.seed';
import BackgroundFeatureEffectSeed from '../Backgrounds/BackgroundEffects.seed';

export const createBackgrounds = async (db: PrismaClient) => {
  // Create Backgrounds
  cinfo('Creating backgrounds');
  for (const Background of Backgrounds) {
    try {
      cinfo('Creating background:', Background.name);
      await db.background.upsert({
        where: {
          id: Background.id,
        },
        update: {
          ...Background,
          slug: createSlug(Background.name),
        },
        create: {
          ...Background,
          slug: createSlug(Background.name),
        },
      });
      cinfo('Background created');
    } catch (error) {
      cerr('Error creating background:', Background.name, error);
      throw new Error('Error creating background');
    }
  }
  cinfo('Backgrounds created');

  // Create Background Features
  cinfo('Creating background features');
  for (const Feature of BackgroundFeatures) {
    try {
      cinfo('Creating feature:', Feature.name);
      //make sure feature has a classId and levels
      if (!Feature.backgroundId) {
        cerr('Feature missing backgroundId field:', Feature.name);
        throw new Error('Feature missing backgroundId field');
      }
      await createFeature(db, Feature);

      cinfo('Feature created');
    } catch (error) {
      cerr('Error creating background feature:', Feature.name, error);
      throw new Error('Error creating background feature');
    }
  }
  cinfo('Background features created');

  // Create Background Choices
  cinfo('Creating background choices');
  for (const Choice of BackgroundChoicesSeed) {
    try {
      cinfo('Creating choice:', Choice.id);
      await db.choice.upsert({
        where: {
          id: Choice.id,
        },
        update: {
          ...Choice,
        },
        create: {
          ...Choice,
        },
      });
      cinfo('Choice created');
    } catch (error) {
      cerr('Error creating background choice:', Choice.id, error);
      throw new Error('Error creating background choice');
    }
  }

  //create Background Feature effects
  cinfo('Creating background feature effects');
  for (const effect of BackgroundFeatureEffectSeed) {
    try {
      cinfo('Creating background feature effect:', effect.id);
      await db.effect.upsert({
        where: {
          id: effect.id,
        },
        update: {
          ...effect,
        },
        create: {
          ...effect,
        },
      });
      cinfo('Background feature effect created');
    } catch (error) {
      cerr('Error creating background feature effect:', effect.id, error);
      throw new Error('Error creating background feature effect');
    }
  }
};
