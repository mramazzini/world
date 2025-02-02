import { useEffect } from 'react';
import { EffectGrantsGroupInfo, FeatureInfo } from '@/lib/types/modelInfo';
import useCharacterState from '../useCharacter/useCharacterState';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setActiveFeatureFromGroups,
  setFeatureGroups,
} from '@/store/sheetSlice';

const useFeatureGroup = () => {
  const { activeEffects, featureGroups } = useAppSelector(
    (state) => state.sheet
  );
  const state = useCharacterState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const groups: EffectGrantsGroupInfo[] = [];

    activeEffects.forEach((effect) => {
      if (effect.EffectGrantsGroup) {
        for (const group of effect.EffectGrantsGroup) {
          groups.push(group);
        }
      }
    });

    dispatch(setFeatureGroups(groups));
  }, [activeEffects, dispatch]);

  useEffect(() => {
    if (!state) return;
    const ids = state.activeFeatureFromGroupsIds;
    const active = featureGroups.reduce<FeatureInfo[]>((acc, group) => {
      for (const feature of group.FeatureGroup.FeaturesInGroup) {
        if (ids.includes(feature.id)) {
          //This as will probaly break things so FIXME TODO ETC
          acc.push(feature as FeatureInfo);
        }
      }
      return acc;
    }, []);
    dispatch(setActiveFeatureFromGroups(active));
  }, [state, featureGroups, dispatch]);
};

export default useFeatureGroup;
