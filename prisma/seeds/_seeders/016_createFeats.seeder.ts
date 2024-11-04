import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import FeatSeed from '../Feats/Feats.seed';
import FeatFeaturesSeed from '../Feats/FeatFeatures.seed';
import createFeature from '../_helpers/createFeature';
export const createFeats = async (db: PrismaClient) => {
  cinfo('Creating Feats');
  for (const feat of FeatSeed) {
    try {
      cinfo('Creating feat:', feat.name);
      //make sure feat has a featId and levels
      if (!feat.id) {
        cerr('Feat missing id field:', feat.name);
        return;
      }

      //upsert feat
      await db.feat.upsert({
        where: { id: feat.id },
        update: feat,
        create: feat,
      });

      cinfo('Feat created');
    } catch (error) {
      cerr('Error creating feat', feat.name, error);
      return;
    }
  }
  //create feat features
  cinfo('Feats created');
  cinfo('Creating Feat features');
  for (const featFeature of FeatFeaturesSeed) {
    try {
      cinfo('Creating feat features:', featFeature.name);
      //make sure featFeature has a featId
      if (!featFeature.featId) {
        cerr('Feat missing featId field:', featFeature.name);
        return;
      }
      //@ts-expect-error Extendedtable is valid
      await createFeature(db, featFeature);
      cinfo('Feat Feature created');
    } catch (error) {
      cerr('Error creating feat feature:', featFeature.name, error);
      return;
    }
  }
};
