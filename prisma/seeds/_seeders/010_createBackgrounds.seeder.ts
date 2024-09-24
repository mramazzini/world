import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import Backgrounds from "../Backgrounds/Backgrounds.seed";
import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import BackgroundFeatures from "../Backgrounds/BackgroundFeatures.seed";

export const createBackgrounds = async (db: PrismaClient) => {
  // Create Background Features
  cinfo("Creating background features");
  for (const Feature of BackgroundFeatures) {
    try {
      cinfo("Creating feature:", Feature.name);
      //make sure feature has a classId and levels
      if (!Feature.backgroundId) {
        cerr("Feature missing backgroundId field:", Feature.name);
        return;
      }

      // verify extendedTable integrity
      if (Feature.extendedTable) {
        if (
          !verifyTableIntegrity(Feature.extendedTable as PrismaJson.Table[])
        ) {
          return;
        }
      }
      //  instead of adding to db directly, we are adding to the BackgroundFeatures array
      const b = Backgrounds.find((b) => b.id === Feature.backgroundId);
      if (!b) {
        cerr("Background not found for feature:", Feature.name);
        return;
      }
      if (!b.features) {
        b.features = [];
      }
      b.features = [...(b.features as PrismaJson.Feature[]), Feature];
      cinfo("Feature created");
    } catch (error) {
      cerr("Error creating background feature:", Feature.name, error);
      return;
    }
  }
  cinfo("Background features created");
  // Create Backgrounds
  cinfo("Creating backgrounds");
  for (const Background of Backgrounds) {
    try {
      cinfo("Creating background:", Background.name);
      await db.background.upsert({
        where: {
          id: Background.id,
        },
        update: Background,
        create: Background,
      });
      cinfo("Background created");
    } catch (error) {
      cerr("Error creating background:", Background.name, error);
      return;
    }
  }
  cinfo("Backgrounds created");
};
