import { setCharacterState } from '@/store/sheetSlice';
import useCharacterState from './useCharacter/useCharacterState';
import { useAppDispatch } from '@/store/hooks';

const useFeatureGroupMutator = () => {
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  const activate = (featureId: string) => {
    if (!state) return;
    const newActiveFeatures = [...state.activeFeatureFromGroupsIds];
    newActiveFeatures.push(featureId);
    const uniqueActiveFeatures = Array.from(new Set(newActiveFeatures));
    dispatch(
      setCharacterState({
        ...state,
        activeFeatureFromGroupsIds: [...uniqueActiveFeatures],
      })
    );
  };

  const deactivate = (featureId: string) => {
    if (!state) return;
    const newActiveFeatures = [...state.activeFeatureFromGroupsIds];
    dispatch(
      setCharacterState({
        ...state,
        activeFeatureFromGroupsIds: [
          ...newActiveFeatures.filter((id) => id !== featureId),
        ],
      })
    );
  };
  return { activate, deactivate };
};

export default useFeatureGroupMutator;
