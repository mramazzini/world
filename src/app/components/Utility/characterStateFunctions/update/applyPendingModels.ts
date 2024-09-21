"use client";
import { CharacterInfo, SubClassID, SubClassInfo } from "@/lib/types";
import { memoizeGetSubclass } from "../../globalCache";
export const applyPendingModels = async (
  character: CharacterInfo
): Promise<CharacterInfo> => {
  const pendingSubclasses = character.state?.pendingLinks?.subClass;
  let noSubclasses = false;
  let noClasses = false;
  if (!pendingSubclasses || pendingSubclasses.length == 0) {
    noSubclasses = true;
  }
  const pendingClasses = character.state?.pendingLinks?.Class;
  if (!pendingClasses || pendingClasses.length == 0) {
    noClasses = true;
  }
  if (noSubclasses && noClasses) {
    return character;
  }

  let newCharacter = { ...character };
  if (pendingSubclasses) {
    for (const subclass of pendingSubclasses) {
      const subclassData = (await memoizeGetSubclass(subclass)) as SubClassInfo;
      if (!subclassData) {
        continue;
      }
      newCharacter.SubClasses = [
        ...(newCharacter.SubClasses || []),
        subclassData,
      ];
      if (!newCharacter.state) {
        console.error("No state found on character");
        return character;
      }
      newCharacter.state.features = [
        ...(newCharacter.state?.features || []),
        ...subclassData.features.map((f) => {
          return {
            feature: f,
            source: subclassData.name,
          };
        }),
      ];
    }
  }
  //   if (pendingClasses) {
  //     for (const classId of pendingClasses) {
  //       const classData = await memoizeGetSubclass(classId);
  //       if (!classData) {
  //         continue;
  //       }
  //       newCharacter.Classes = [...(newCharacter.Classes || []), classData];
  //     }
  //   }
  return newCharacter;
};
