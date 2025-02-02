import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import Classes from '../Classes/Class.seed';
import createFeature from '../_helpers/createFeature';
import ClassFeaturesSeed from '../Classes/Features.seed';
import ColumnedFeatureSeed from '../Classes/ColumnedFeature.seed';
import ClassChoicesSeed from '../Classes/ClassChoices.seed';
import MulticlassingSeed from '../Classes/MultiClassing.seed';
import MulticlassingChoicesSeed from '../Classes/MultiClassingChoices.seed';
import SpellCasterSeed from '../Classes/SpellCaster.seed';
import ClassFeatureEffectSeed from '../Classes/FeatureEffects.seed';
import ClassEffectChoices from '../Classes/ClassEffectChoices.seed';

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
  cinfo('Creating columned features');
  for (const columnedFeature of ColumnedFeatureSeed) {
    try {
      cinfo('Creating columned feature:', columnedFeature.name);
      await db.columnedFeature.upsert({
        where: {
          classId_featureId: {
            classId: columnedFeature.classId,
            featureId: columnedFeature.featureId,
          },
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

  cinfo('Class choices created');

  //Create Class MulticlassInfo
  cinfo('Creating class multiclass info');
  for (const _class of MulticlassingSeed) {
    try {
      cinfo('Creating class multiclass info:', _class.classId);
      await db.multiClassingInfo.upsert({
        where: {
          classId: _class.classId,
        },
        update: _class,
        create: _class,
      });
      cinfo('Class multiclass info created');
    } catch (error) {
      cerr('Error creating class multiclass info:', _class.classId, error);
      throw new Error('Error creating class multiclass info');
    }
  }

  cinfo('Class multiclass info created');

  cinfo('Creating Class Multiclass Choices');
  for (const choice of MulticlassingChoicesSeed) {
    try {
      cinfo('Creating class multiclass choice:', choice.description);
      await db.choice.upsert({
        where: {
          id: choice.id,
        },
        update: choice,
        create: choice,
      });
      cinfo('Class multiclass choice created');
    } catch (error) {
      cerr(
        'Error creating class multiclass choice:',
        choice.description,
        error
      );
      throw new Error('Error creating class multiclass choice');
    }
  }

  cinfo('Class multiclass choices created');

  cinfo('Creating Class spellcasting info');

  for (const _class of SpellCasterSeed) {
    try {
      if (!_class.classId) continue;
      cinfo('Creating class spellcasting info:', _class.classId);
      await db.spellCasting.upsert({
        where: {
          classId: _class.classId,
        },
        update: _class,
        create: _class,
      });
      cinfo('Class spellcasting info created');
    } catch (error) {
      cerr('Error creating class spellcasting info:', _class.classId, error);
      throw new Error('Error creating class spellcasting info');
    }
  }
  //create feature effects
  cinfo('Creating feature effects');
  for (const effect of ClassFeatureEffectSeed) {
    try {
      cinfo('Creating feature effect:', effect.id);
      await db.effect.upsert({
        where: {
          id: effect.id,
        },
        update: effect,
        create: effect,
      });
      cinfo('Feature effect created');
    } catch (error) {
      cerr('Error creating feature effect:', effect.id, error);
      throw new Error('Error creating feature effect');
    }
  }
  cinfo('Feature effects created');
  //create effect choice
  cinfo('Creating effect choices');
  for (const choice of ClassEffectChoices) {
    try {
      cinfo('Creating effect choice:', choice.description);
      await db.choice.upsert({
        where: {
          id: choice.id,
        },
        update: choice,
        create: choice,
      });
      cinfo('Effect choice created');
    } catch (error) {
      cerr('Error creating effect choice:', choice.description, error);
      throw new Error('Error creating effect choice');
    }
  }
};
