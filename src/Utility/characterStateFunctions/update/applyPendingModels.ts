'use client';
import { CharacterInfo, SubClassInfo } from '@/lib/utils/types/types';
import { memoizeGetSubclass } from '../../globalCache';
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

  const newCharacter = { ...character };
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
        console.error('No state found on character');
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
      newCharacter.state.pendingLinks.subClass =
        newCharacter.state.pendingLinks.subClass.filter((s) => s !== subclass);
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
