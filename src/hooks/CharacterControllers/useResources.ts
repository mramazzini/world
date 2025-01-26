import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import useCharacterState from '../useCharacter/useCharacterState';
import useDiceRoller from '../useDiceRoller';
import { ResourceData } from '@/lib/types/types';
import { setResources } from '@/store/sheetSlice';

const useResources = () => {
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  const activeEffects = useAppSelector((state) => state.sheet.activeEffects);
  const { rollFormula } = useDiceRoller();

  useEffect(() => {
    const getResources = async () => {
      const resources: ResourceData[] = [];

      for (const effect of activeEffects) {
        if (effect.EffectToResource) {
          for (const r of effect.EffectToResource) {
            const max = (await rollFormula(r.scalingFormula)).total;
            resources.push({
              resource: r.Resource,
              max: max,
              current: max - (state?.resourcesUsed[r.Resource.id] || 0),
              refreshOn: r.refreshOn,
            });
          }
        }
      }

      return resources;
    };
    getResources().then((resources) => {
      console.log(activeEffects);

      dispatch(setResources(resources));
    });
  }, [activeEffects, state, rollFormula, dispatch]);
};

export default useResources;
