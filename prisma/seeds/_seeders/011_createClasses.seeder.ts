import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import Classes from '../Classes/Class.seed';
import createFeature from '../_helpers/createFeature';
import ClassFeaturesSeed from '../Classes/Features.seed';
import ColumnedFeatureSeed from '../Classes/ColumnedFeature.seed';
import ClassChoicesSeed from '../Classes/ClassChoices.seed';

export const createClasses = async (db: PrismaClient) => {
  // Create classes
  cinfo('Creating classes');
  for (const Class of Classes) {
    try {
      cinfo('Creating class:', Class.name);
      await db.class.upsert({
        where: {
          id: Class.id,
        },
        update: Class,
        create: Class,
      });
      cinfo('Class created');
    } catch (error) {
      cerr('Error creating class:', Class.name, error);
      throw new Error('Error creating class');
    }
  }
  cinfo('Classes created');

  //Create class features
  cinfo('Creating class features');
  for (const feature of ClassFeaturesSeed) {
    try {
      cinfo('Creating class feature:', feature.name);
      if (!feature.classId && !feature.spellCastingClassId) {
        cerr('Feature missing classId field:', feature.name);
        throw new Error('Feature missing classId field');
      }
      await createFeature(db, feature);
      cinfo('Class feature created');
    } catch (error) {
      cerr('Error creating class feature:', feature.name, error);
      throw new Error('Error creating class feature');
    }
  }
  cinfo('Class features created');
  //Create Columned Features
  // cinfo('Creating columned features');
  for (const columnedFeature of ColumnedFeatureSeed) {
    try {
      cinfo('Creating columned feature:', columnedFeature.name);
      await db.columnedFeature.upsert({
        where: {
          id: columnedFeature.id,
        },
        update: columnedFeature,
        create: columnedFeature,
      });
      cinfo('Columned feature created');
    } catch (error) {
      cerr('Error creating columned feature:', columnedFeature.name, error);
      throw new Error('Error creating columned feature');
    }
  }
  cinfo('Columned features created');

  //create class Choices
  cinfo('Creating class choices');
  for (const choice of ClassChoicesSeed) {
    try {
      cinfo('Creating class choice:', choice.description);
      await db.choice.upsert({
        where: {
          id: choice.id,
        },
        update: choice,
        create: choice,
      });
      cinfo('Class choice created');
    } catch (error) {
      cerr('Error creating class choice:', choice.description, error);
      throw new Error('Error creating class choice');
    }
  }
};
