import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import Species from "../Races/Races.seed";
import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import Traits from "../Races/Traits.seed";

export const createSpecies = async (db: PrismaClient) => {
  cinfo("Creating race features");
  for (const t of Traits) {
    try {
      cinfo("Creating race features:", t.name);
      if (!t.raceId) {
        cerr("Trait missing raceId field:", t.name);
        return;
      }
      if (
        t.extendedTable &&
        !verifyTableIntegrity(t.extendedTable as PrismaJson.Table[])
      ) {
        cerr("Error verifying extended table integrity:", t.name);
        return;
      }
      const r = Species.find((r) => r.id === t.raceId);
      if (!r) {
        cerr("No Race for feature found:", t.name);
        return;
      }
      if (!r.features) {
        r.features = [];
      }
      r.features = [...(r.features as PrismaJson.Feature[]), t];

      cinfo("Race Feature created");
    } catch (error) {
      cerr("Error creating race feature:", t.name, error);
      return;
    }
  }
  cinfo("Race Features created");

  //create species and traits
  cinfo("Creating Species");
  for (const r of Species) {
    try {
      cinfo("Creating species:", r.name);
      await db.race.upsert({
        where: {
          id: r.id,
        },
        update: r,
        create: r,
      });
      cinfo("Species created");
    } catch (error) {
      cerr("Error creating species:", r.name, error);
      return;
    }
  }
  cinfo("Species created");
};
