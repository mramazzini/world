'use client';
import { memoizeGetSubclass } from '../../globalCache';
import { getFeat } from '@/lib/actions/db/feat/read.actions';
import {
  linkCharacterToFeat,
  linkCharacterToSubClass,
} from '@/lib/actions/db/character/update.actions';
import { CharacterInfo, SubClassInfo } from '@/lib/types/modelInfo';
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

  const newCharacter = { ...character };
  if (pendingSubclasses) {
    for (const subclass of pendingSubclasses) {
      try {
        await linkCharacterToSubClass(character.id, subclass);
      } catch (error) {
        console.error('Error linking character to subclass', error);
        return character;
      }
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

      newCharacter.state.pendingLinks.subClass =
        newCharacter.state.pendingLinks.subClass.filter((s) => s !== subclass);
    }
  }
  if (pendingFeats) {
    for (const feat of pendingFeats) {
      try {
        await linkCharacterToFeat(character.id, feat);
      } catch (error) {
        console.error('Error linking character to feat', error);
        return character;
      }
      const featData = await getFeat(feat);
      if (!featData) {
        continue;
      }
      newCharacter.Feats = [...(newCharacter.Feats || []), featData];
      if (!newCharacter.state) {
        console.error('No state found on character');
        return character;
      }

      newCharacter.state.pendingLinks.feats =
        newCharacter.state.pendingLinks.feats.filter((f) => f !== feat);
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
