import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import Backgrounds from '../Backgrounds/Backgrounds.seed';
import BackgroundFeatures from '../Backgrounds/BackgroundFeatures.seed';
import createFeature from '../_helpers/createFeature';

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
        update: Background,
        create: Background,
      });
      cinfo('Background created');
    } catch (error) {
      cerr('Error creating background:', Background.name, error);
      return;
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
        return;
      }
      await createFeature(db, Feature);

      cinfo('Feature created');
    } catch (error) {
      cerr('Error creating background feature:', Feature.name, error);
      return;
    }
  }
  cinfo('Background features created');
};
