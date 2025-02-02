import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import { SubSpeciesSeed } from '../Subspecies/Subspecies.seed';
import SubSpeciesFeatureSeed from '../Subspecies/SubspeciesFeatures.seed';
import createFeature from '../_helpers/createFeature';
import { createSlug } from '../_helpers/createSlug';
import SubSpeciesChoicesSeed from '../Subspecies/SubspeciesChoices.seed';

export const createSubspecies = async (db: PrismaClient) => {
  //create subSpecies and traits
  cinfo('Creating subSpecies');
  for (const r of SubSpeciesSeed) {
    try {
      cinfo('Creating subspecies:', r.name);
      if (!r.speciesId) {
        cerr('Trait missing speciesId field:', r.name);
        throw new Error('Error creating subspecies');
      }
      await db.subSpecies.upsert({
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
      cinfo('subSpecies created');
    } catch (error) {
      cerr('Error creating subspecies:', r.name, error);
      throw new Error('Error creating subspecies');
    }
  }
  cinfo('Species created');

  cinfo('Creating subSpecies features');
  for (const t of SubSpeciesFeatureSeed) {
    try {
      cinfo('Creating subSpecies features:', t.name);
      if (!t.subSpeciesId) {
        cerr('Trait missing subspeciesId field:', t.name);
        throw new Error('Error creating subspecies feature');
      }
      await createFeature(db, t);

      cinfo('Species Feature created');
    } catch (error) {
      cerr('Error creating subSpecies feature:', t.name, error);
      throw new Error('Error creating subSpecies feature');
    }
  }
  cinfo('Species Features created');

  cinfo('Create SubSpecies Choices');

  for (const choice of SubSpeciesChoicesSeed) {
    try {
      cinfo('Creating subspecies choice:', choice.id);
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
      cinfo('SubSpecies Choice created');
    } catch (error) {
      cerr('Error creating subspecies choice:', choice.id, error);
      throw new Error('Error creating subspecies choice');
    }
  }
};
