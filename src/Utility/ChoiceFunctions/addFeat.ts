import { FeatID } from '@/lib/types/types';

export const addFeats: PrismaJson.StateCallback = (char, c, from) => {
  const feats = c as FeatID[];
  const s = char.state as PrismaJson.CharacterState;
  console.log(from);
  return {
    ...s,
    pendingLinks: {
      ...s.pendingLinks,
      feats,
    },
  };
};
