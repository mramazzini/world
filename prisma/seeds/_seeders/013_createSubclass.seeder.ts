import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import SubClasses from '../Subclasses/Subclasses.seed';
import SubclassFeatures from '../Subclasses/SubclassFeatures';
import HomebrewSubclassesSeed, {
  HomebrewFeatureEffectSeed,
  HomebrewSubclassFeaturesSeed,
} from '../Subclasses/HomebrewSubclasses.seed';
import createFeature from '../_helpers/createFeature';
import { createSlug } from '../_helpers/createSlug';
import SubclassFeatureEffects from '../Subclasses/SubclassFeatureEffects';

export const createSubclass = async (db: PrismaClient) => {
  // Create sub classes
  cinfo('Creating sub classes');
  for (const SubClass of SubClasses) {
    try {
      //make sure subclass has a classId and levels
      if (!SubClass.classId) {
        console.error('Subclass missing classId field:', SubClass.name);
        throw new Error('Error creating subclass ');
      }
      cinfo('Creating sub class:', SubClass.name);
      await db.subClass.upsert({
        where: {
          id: SubClass.id,
        },
        update: {
          ...SubClass,
          slug: createSlug(SubClass.name),
        },
        create: {
          ...SubClass,
          slug: createSlug(SubClass.name),
        },
      });
      cinfo('Sub class created');
    } catch (error) {
      console.error('Error creating sub class:', SubClass.name, error);
      throw new Error('Error creating sub class');
    }
  }
  cinfo('Sub classes created');

  //creatt homebrew subclasses
  cinfo('Creating homebrew subclasses');
  for (const HomebrewSubclass of HomebrewSubclassesSeed) {
    try {
      //make sure subclass has a class
      if (!HomebrewSubclass.classId) {
        console.error(
          'Homebrew subclass missing classId field:',
          HomebrewSubclass.name
        );
        throw new Error('Error creating subclass');
      }
      cinfo('Creating homebrew subclass:', HomebrewSubclass.name);
      await db.subClass.upsert({
        where: {
          id: HomebrewSubclass.id,
        },
        update: HomebrewSubclass,
        create: HomebrewSubclass,
      });
      cinfo('Homebrew subclass created');
    } catch (error) {
      console.error(
        'Error creating homebrew subclass:',
        HomebrewSubclass.name,
        error
      );
      throw new Error('Error creating homebrew subclass');
    }
  }
  cinfo('Homebrew subclasses created');

  cinfo('Creating Subclass features');
  for (const SubclassFeature of SubclassFeatures) {
    try {
      cinfo('Creating subclass feature:', SubclassFeature.name);
      //make sure subclass feature has a subClassId and levels
      if (
        !SubclassFeature.subClassId &&
        !SubclassFeature.spellCastingSubclassId
      ) {
        cerr(
          'Subclass feature missing subClassId field:',
          SubclassFeature.name,
          SubclassFeature.id
        );
        throw new Error('Error creating subclass feature');
      }

      await createFeature(db, SubclassFeature);

      cinfo('Subclass feature created');
    } catch (error) {
      cerr('Error creating subclass feature', SubclassFeature.name, error);
      throw new Error('Error creating subclass feature');
    }
  }
  cinfo('Subclass features created');

  cinfo('Create subclass feature effects');
  for (const effect of SubclassFeatureEffects) {
    try {
      cinfo('Creating subclass feature effect:', effect.id);
      await db.effect.upsert({
        where: {
          id: effect.id,
        },
        update: effect,
        create: effect,
      });
      cinfo('Subclass feature effect created');
    } catch (error) {
      cerr('Error creating subclass feature effect', effect.id, error);
      return;
    }
  }

  cinfo('Homebrew subclass features');
  for (const HomebrewSubclassFeature of HomebrewSubclassFeaturesSeed) {
    try {
      cinfo(
        'Creating homebrew subclass feature:',
        HomebrewSubclassFeature.name
      );
      //make sure subclass feature has
      if (
        !HomebrewSubclassFeature.subClassId &&
        !HomebrewSubclassFeature.spellCastingSubclassId
      ) {
        cerr(
          'Homebrew subclass feature missing subClassId field:',
          HomebrewSubclassFeature.name
        );
        throw new Error('Error creating homebrew subclass feature');
      }

      await createFeature(db, HomebrewSubclassFeature);

      cinfo('Homebrew subclass feature created');
    } catch (error) {
      cerr(
        'Error creating homebrew subclass feature',
        HomebrewSubclassFeature.name,
        error
      );
      throw new Error('Error creating homebrew subclass feature');
    }
  }
  cinfo('Homebrew subclass features created');

  cinfo('Homebrew subclass feature effects');
  for (const effect of HomebrewFeatureEffectSeed) {
    try {
      cinfo('Creating homebrew subclass feature effect:', effect.id);
      await db.effect.upsert({
        where: {
          id: effect.id,
        },
        update: effect,
        create: effect,
      });
      cinfo('Homebrew subclass feature effect created');
    } catch (error) {
      cerr('Error creating homebrew subclass feature effect', effect.id, error);
      return;
    }
  }
};
