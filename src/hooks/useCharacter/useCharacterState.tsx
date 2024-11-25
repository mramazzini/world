import { useAppSelector } from '@/store/hooks';

const useCharacterState = () => {
  const state = useAppSelector((state) => state.sheet.state);

  if (!state) return null;

  return state;
};

export default useCharacterState;
