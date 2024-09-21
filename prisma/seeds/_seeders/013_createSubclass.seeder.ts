import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import SubClasses from "../Subclasses/Subclasses.seed";
import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import SubclassFeatures from "../SubclassFeatures";

export const createSubclass = async (db: PrismaClient) => {
  cinfo("Creating Subclass features");
  for (const SubclassFeature of SubclassFeatures) {
    try {
      cinfo("Creating subclass feature:", SubclassFeature.name);
      //make sure subclass feature has a subClassId and levels
      if (!SubclassFeature.subClassId) {
        cerr(
          "Subclass feature missing subClassId field:",
          SubclassFeature.name
        );
        return;
      }
      if (!SubclassFeature.levels) {
        cerr("Subclass feature missing levels field:", SubclassFeature.name);
        return;
      }
      //verify extendedTable integrity
      if (SubclassFeature.extendedTable) {
        if (
          !verifyTableIntegrity(
            SubclassFeature.extendedTable as PrismaJson.Table[]
          )
        ) {
          return;
        }
      }
      // instead of adding to db directly, we are adding to the SubclassFeatures array
      const sc = SubClasses.find((sc) => sc.id === SubclassFeature.subClassId);
      if (!sc) {
        cerr("Subclass not found for feature:", SubclassFeature.name);
        return;
      }
      if (!sc.features) {
        sc.features = [];
      }
      sc.features = [...(sc.features as PrismaJson.Feature[]), SubclassFeature];
      cinfo("Subclass feature created");
    } catch (error) {
      cerr("Error creating subclass feature", SubclassFeature.name, error);
      return;
    }
  }
  cinfo("Subclass features created");
  // Create sub classes
  cinfo("Creating sub classes");
  for (const SubClass of SubClasses) {
    try {
      //make sure subclass has a classId and levels
      if (!SubClass.classId) {
        console.error("Subclass missing classId field:", SubClass.name);
        return;
      }
      cinfo("Creating sub class:", SubClass.name);
      await db.subClass.upsert({
        where: {
          id: SubClass.id,
        },
        update: {},
        create: SubClass,
      });
      cinfo("Sub class created");
    } catch (error) {
      console.error("Error creating sub class:", SubClass.name, error);
      return;
    }
  }
  cinfo("Sub classes created");
};
