import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import Species from '../Species/Species.seed';
import SpeciesFeaturesSeed from '../Species/SpeciesFeatures.seed';
import createFeature from '../_helpers/createFeature';

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
        update: r,
        create: r,
      });
      cinfo('Species created');
    } catch (error) {
      cerr('Error creating species:', r.name, error);
      return;
    }
  }
  cinfo('Species created');

  cinfo('Creating species features');
  for (const t of SpeciesFeaturesSeed) {
    try {
      cinfo('Creating species features:', t.name);
      if (!t.speciesId) {
        cerr('Trait missing speciesId field:', t.name);
        return;
      }
      await createFeature(db, t);

      cinfo('Species Feature created');
    } catch (error) {
      cerr('Error creating species feature:', t.name, error);
      return;
    }
  }
  cinfo('Species Features created');
};
