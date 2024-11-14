'use client';
import {
  linkCharacterToFeat,
  linkCharacterToSubClass,
} from '@/lib/actions/db/character/update.actions';
import { CharacterInfo } from '@/lib/types/modelInfo';

export const applyPendingModels = async (
  character: CharacterInfo
): Promise<CharacterInfo> => {
  const pendingSubclasses = character.state?.pendingLinks?.subClass;
  let noSubclasses = false;
  let noClasses = false;
  let noFeats = false;
  if (!pendingSubclasses || pendingSubclasses.length == 0) {
    noSubclasses = true;
  }
  const pendingClasses = character.state?.pendingLinks?.Class;
  if (!pendingClasses || pendingClasses.length == 0) {
    noClasses = true;
  }
  const pendingFeats = character.state?.pendingLinks?.feats;
  if (!pendingFeats || pendingFeats.length == 0) {
    noFeats = true;
  }
  if (noSubclasses && noClasses && noFeats) {
    return character;
  }

  let newCharacter = { ...character };
  if (pendingSubclasses) {
    for (const subclass of pendingSubclasses) {
      try {
        const res = await linkCharacterToSubClass(character.id, subclass);
        if (!res) return character;
        if (!newCharacter.state) return character;
        newCharacter = {
          ...res,
          state: {
            ...newCharacter.state,
            pendingLinks: {
              ...newCharacter.state.pendingLinks,
              subClass: newCharacter.state.pendingLinks.subClass.filter(
                (s) => s !== subclass
              ),
            },
          },
        };
      } catch (error) {
        console.error('Error linking character to subclass', error);
        return character;
      }
    }
  }
  if (pendingFeats) {
    for (const feat of pendingFeats) {
      try {
        const res = await linkCharacterToFeat(character.id, feat);
        if (!res) return character;
        if (!newCharacter.state) return character;
        newCharacter = {
          ...res,
          state: {
            ...newCharacter.state,
            pendingLinks: {
              ...newCharacter.state.pendingLinks,
              feats: newCharacter.state.pendingLinks.feats.filter(
                (f) => f !== feat
              ),
            },
          },
        };
      } catch (error) {
        console.error('Error linking character to feat', error);
        return character;
      }
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
