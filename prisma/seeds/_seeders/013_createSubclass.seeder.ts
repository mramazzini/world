import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import SubClasses from '../Subclasses/Subclasses.seed';
import SubclassFeatures from '../Subclasses/SubclassFeatures';
import HomebrewSubclassesSeed, {
  HomebrewSubclassFeaturesSeed,
} from '../Subclasses/HomebrewSubclasses.seed';
import createFeature from '../_helpers/createFeature';
import SubclassColumnedFeaturesSeed from '../Subclasses/SubclassColumnedFeatures.seed';

export const createSubclass = async (db: PrismaClient) => {
  // Create sub classes
  cinfo('Creating sub classes');
  for (const SubClass of SubClasses) {
    try {
      //make sure subclass has a classId and levels
      if (!SubClass.classId) {
        console.error('Subclass missing classId field:', SubClass.name);
        return;
      }
      cinfo('Creating sub class:', SubClass.name);
      await db.subClass.upsert({
        where: {
          id: SubClass.id,
        },
        update: SubClass,
        create: SubClass,
      });
      cinfo('Sub class created');
    } catch (error) {
      console.error('Error creating sub class:', SubClass.name, error);
      return;
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
        return;
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
      return;
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
        return;
      }
      if (!SubclassFeature.levels) {
        cerr('Subclass feature missing levels field:', SubclassFeature.name);
        return;
      }
      await createFeature(db, SubclassFeature);

      cinfo('Subclass feature created');
    } catch (error) {
      cerr('Error creating subclass feature', SubclassFeature.name, error);
      return;
    }
  }
  cinfo('Subclass features created');

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
        return;
      }
      if (!HomebrewSubclassFeature.levels) {
        cerr(
          'Homebrew subclass feature missing levels field:',
          HomebrewSubclassFeature.name
        );
        return;
      }
      await createFeature(db, HomebrewSubclassFeature);

      cinfo('Homebrew subclass feature created');
    } catch (error) {
      cerr(
        'Error creating homebrew subclass feature',
        HomebrewSubclassFeature.name,
        error
      );
      return;
    }
  }
  cinfo('Homebrew subclass features created');

  cinfo('Create subclass table columns');
  // Create subclass table columns
  for (const SubclassColumns of SubclassColumnedFeaturesSeed) {
    try {
      cinfo('Creating subclass column:', SubclassColumns.name);
      await db.subClassColumnedFeature.upsert({
        where: {
          id: SubclassColumns.id,
        },
        update: SubclassColumns,
        create: SubclassColumns,
      });
      cinfo('Subclass column created');
    } catch (error) {
      cerr('Error creating subclass column', SubclassColumns.name, error);
      return;
    }
  }
};
