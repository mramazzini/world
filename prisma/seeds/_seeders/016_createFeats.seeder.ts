import { cerr, cinfo, cwarn } from "@/lib/utils/chalkLog";
import { Prisma, PrismaClient } from "@prisma/client";
import FeatSeed from "../Feats/Feats.seed";
import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
export const createFeats = async (db: PrismaClient) => {
  cinfo("Creating Feats");
  for (const feat of FeatSeed) {
    try {
      cinfo("Creating feat:", feat.name);
      //make sure feat has a featId and levels
      if (!feat.id) {
        cerr("Feat missing id field:", feat.name);
        return;
      }

      //verify extendedTable integrity
      if (feat.features) {
        for (const feature of feat.features as PrismaJson.Feature[]) {
          if (feature.extendedTable) {
            if (!verifyTableIntegrity(feature.extendedTable)) {
              cerr("Error verifying table integrity for feat:", feat.name);
              return;
            }
          }
        }
      }
      //upsert feat
      await db.feat.upsert({
        where: { id: feat.id },
        update: feat,
        create: feat,
      });

      cinfo("Feat created");
    } catch (error) {
      cerr("Error creating feat", feat.name, error);
      return;
    }
  }
};
