import { SubClassID } from '@/lib/utils/types/types';

export const subclassSelection: PrismaJson.StateCallback = async (
  char,
  c,
  from
) => {
  const state = char.state as PrismaJson.CharacterState;
  const subClassIDs = c as SubClassID[];
  console.log(from);
  return {
    ...state,
    pendingLinks: {
      ...state.pendingLinks,
      subClass: [...state.pendingLinks.subClass, ...subClassIDs],
    },
  };
};
