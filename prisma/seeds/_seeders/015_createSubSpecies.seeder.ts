import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import { SubSpeciesSeed } from '../Subspecies/Subspecies.seed';
import SubSpeciesFeatureSeed from '../Subspecies/SubspeciesFeatures.seed';
import createFeature from '../_helpers/createFeature';

export const createSubspecies = async (db: PrismaClient) => {
  //create subSpecies and traits
  cinfo('Creating subSpecies');
  for (const r of SubSpeciesSeed) {
    try {
      cinfo('Creating subspecies:', r.name);
      if (!r.speciesId) {
        cerr('Trait missing speciesId field:', r.name);
        return;
      }
      await db.subSpecies.upsert({
        where: {
          id: r.id,
        },
        update: r,
        create: r,
      });
      cinfo('subSpecies created');
    } catch (error) {
      cerr('Error creating subspecies:', r.name, error);
      return;
    }
  }
  cinfo('Species created');

  cinfo('Creating subSpecies features');
  for (const t of SubSpeciesFeatureSeed) {
    try {
      cinfo('Creating subSpecies features:', t.name);
      if (!t.subSpeciesId) {
        cerr('Trait missing subspeciesId field:', t.name);
        return;
      }
      await createFeature(db, t);

      cinfo('Species Feature created');
    } catch (error) {
      cerr('Error creating subSpecies feature:', t.name, error);
      return;
    }
  }
  cinfo('Species Features created');
};
