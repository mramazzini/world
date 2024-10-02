import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import Species from "../Species/Species.seed";
import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import Traits from "../Species/Traits.seed";

export const createSpecies = async (db: PrismaClient) => {
  cinfo("Creating species features");
  for (const t of Traits) {
    try {
      cinfo("Creating species features:", t.name);
      if (!t.speciesId) {
        cerr("Trait missing speciesId field:", t.name);
        return;
      }
      if (
        t.extendedTable &&
        !verifyTableIntegrity(t.extendedTable as PrismaJson.Table[])
      ) {
        cerr("Error verifying extended table integrity:", t.name);
        return;
      }
      const r = Species.find((r) => r.id === t.speciesId);
      if (!r) {
        cerr("No Species for feature found:", t.name);
        return;
      }
      if (!r.features) {
        r.features = [];
      }
      r.features = [...(r.features as PrismaJson.Feature[]), t];

      cinfo("Species Feature created");
    } catch (error) {
      cerr("Error creating species feature:", t.name, error);
      return;
    }
  }
  cinfo("Species Features created");

  //create species and traits
  cinfo("Creating Species");
  for (const r of Species) {
    try {
      cinfo("Creating species:", r.name);
      await db.species.upsert({
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
