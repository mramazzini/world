import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import ExoticVariants from "../Races/Variants/ExoticVariants";
import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import ClassicTraits from "../Races/Variants/ClassicTraits";
import { ClassicVariants } from "../Races/Variants/ClassicVariants";

export const createVariants = async (db: PrismaClient) => {
  cinfo("Creating Classic Race Features");
  for (const t of ClassicTraits) {
    try {
      cinfo("Creating classic trait:", t.name);
      if (!t.raceVariantId) {
        cerr("Classic trait missing raceId field:", t.name);
        return;
      }
      if (
        t.extendedTable &&
        !verifyTableIntegrity(t.extendedTable as PrismaJson.Table[])
      ) {
        cerr("Error verifying extended table integrity:", t.name);
        return;
      }
      const r = ClassicVariants.find((r) => r.id === t.raceVariantId);
      if (!r) {
        cerr("Race not found for feature:", t.name);
        return;
      }
      if (!r.features) {
        r.features = [];
      }
      r.features = [...(r.features as PrismaJson.Feature[]), t];
      cinfo("Classic trait created");
    } catch (error) {
      cerr("Error creating classic trait:", t.name, error);
      return;
    }
  }
  //create classic variants
  cinfo("Creating Classic Variants");
  for (const v of ClassicVariants) {
    try {
      cinfo("Creating classic variant:", v.name);
      if (!v.baseRaceId) {
        cerr("Classic variant missing baseRaceId field:", v.name);
        return;
      }
      await db.raceVariant.upsert({
        where: {
          id: v.id,
        },
        update: v,
        create: v,
      });
      cinfo("Classic variant created");
    } catch (error) {
      cerr("Error creating classic variant:", v.name, error);
      return;
    }
  }

  //exotic species
  cinfo("Creating  Exotic Variants");
  //create exotic species
  for (const r of ExoticVariants) {
    try {
      cinfo("Creating exotic variant:", r.name);
      await db.raceVariant.upsert({
        where: {
          id: r.id,
        },
        update: r,
        create: r,
      });
      cinfo("Exotic variant created");
    } catch (error) {
      cerr("Error creating exotic variant:", r.name, error);
      return;
    }
  }
};
