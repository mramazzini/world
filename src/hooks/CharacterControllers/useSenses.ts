import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setBlindsight,
  setDarkvision,
  setPassivePerception,
  setTremorsense,
  setTruesight,
} from '@/store/sheetSlice';
import { useEffect } from 'react';
import useModifier from '../useModifier';
import { Skill } from '@prisma/client';

const useSenses = () => {
  const { combinedSpecies, activeEffects } = useAppSelector(
    (state) => state.sheet
  );
  const { getSkillModifier } = useModifier();

  const dispatch = useAppDispatch();

  //blindsight
  useEffect(() => {
    const effectBlindsights = activeEffects
      .map((effect) => effect.blindsight)
      .filter((blindsight) => blindsight !== null);

    const maxBlindsight = Math.max(
      ...effectBlindsights,
      combinedSpecies?.blindSight || 0
    );
    dispatch(setBlindsight(maxBlindsight));
  }, [activeEffects, combinedSpecies, dispatch]);

  //darkvision
  useEffect(() => {
    const effectDarkvisions = activeEffects
      .map((effect) => effect.darkvision)
      .filter((darkvision) => darkvision !== null);

    const maxDarkvision = Math.max(
      ...effectDarkvisions,
      combinedSpecies?.darkvision || 0
    );
    dispatch(setDarkvision(maxDarkvision));
  }, [activeEffects, combinedSpecies, dispatch]);

  //tremorsense
  useEffect(() => {
    const effectTremorsenses = activeEffects
      .map((effect) => effect.tremorsense)
      .filter((tremorsense) => tremorsense !== null);

    const maxTremorsense = Math.max(...effectTremorsenses);
    dispatch(setTremorsense(maxTremorsense));
  }, [activeEffects, combinedSpecies, dispatch]);

  //truesight
  useEffect(() => {
    const effectTruesights = activeEffects
      .map((effect) => effect.truesight)
      .filter((truesight) => truesight !== null);

    const maxTruesight = Math.max(...effectTruesights);
    dispatch(setTruesight(maxTruesight));
  }, [activeEffects, combinedSpecies, dispatch]);

  //passive perception
  useEffect(() => {
    const pp = 10 + getSkillModifier(Skill.PERCEPTION);
    dispatch(setPassivePerception(pp));
  }, [getSkillModifier, dispatch]);
};

export default useSenses;
