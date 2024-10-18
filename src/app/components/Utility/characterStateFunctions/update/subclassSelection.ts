import { CharacterInfo, SubClassID } from "@/lib/utils/types/types";

export const subclassSelection: PrismaJson.StateCallback = async (
  char,
  c,
  from
) => {
  const state = char.state as PrismaJson.CharacterState;
  const subClassIDs = c as SubClassID[];
  return {
    ...state,
    pendingLinks: {
      ...state.pendingLinks,
      subClass: [...state.pendingLinks.subClass, ...subClassIDs],
    },
  };
};
