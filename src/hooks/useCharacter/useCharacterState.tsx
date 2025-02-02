import { useAppSelector } from '@/store/hooks';
import { CharacterState } from '@prisma/client';

const useCharacterState = (): CharacterState | null => {
  const state = useAppSelector((state) => state.sheet.state);

  if (!state) return null;

  return state as CharacterState;
};

export default useCharacterState;
