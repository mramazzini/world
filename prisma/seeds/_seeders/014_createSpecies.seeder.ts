import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import Species from '../Species/Species.seed';
import SpeciesFeaturesSeed from '../Species/SpeciesFeatures.seed';
import createFeature from '../_helpers/createFeature';
import { createSlug } from '../_helpers/createSlug';
import SpeciesChoicesSeed from '../Species/SpeciesChoices.seed';

export const createSpecies = async (db: PrismaClient) => {
  //create species and traits
  cinfo('Creating Species');
  for (const r of Species) {
    try {
      cinfo('Creating species:', r.name);
      await db.species.upsert({
        where: {
          id: r.id,
        },
        update: {
          ...r,
          slug: createSlug(r.name),
        },
        create: {
          ...r,
          slug: createSlug(r.name),
        },
      });
      cinfo('Species created');
    } catch (error) {
      cerr('Error creating species:', r.name, error);
      throw new Error('Error creating species');
    }
  }
  cinfo('Species created');

  cinfo('Creating species features');
  for (const t of SpeciesFeaturesSeed) {
    try {
      cinfo('Creating species features:', t.name);
      if (!t.speciesId) {
        cerr('Trait missing speciesId field:', t.name);
        throw new Error('Trait missing speciesId field');
      }
      await createFeature(db, t);

      cinfo('Species Feature created');
    } catch (error) {
      cerr('Error creating species feature:', t.name, error);
      throw new Error('Error creating species feature');
    }
  }
  cinfo('Species Features created');

  cinfo('Create Species Choices');

  for (const choice of SpeciesChoicesSeed) {
    try {
      cinfo('Creating species choice:', choice.id);
      await db.choice.upsert({
        where: {
          id: choice.id,
        },
        update: {
          ...choice,
        },
        create: {
          ...choice,
        },
      });
      cinfo('Species choice created');
    } catch (error) {
      cerr('Error creating species choice:', choice.id, error);
      throw new Error('Error creating species choice');
    }
  }
};
