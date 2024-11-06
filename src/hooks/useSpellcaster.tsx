import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';
import useModifier from './useModifier';
import useProficiency from './useProficiency';

const useSpellcaster = () => {
  const character = useAppSelector((state) => state.character);
  const { proficiencyBonus } = useProficiency();
  const { getAbilityModifier } = useModifier();
  const spellcastingInfo = useMemo(() => {
    const infos = character?.Classes?.map((c) => c.spellCastingInfo) || [];
    return infos[0];
  }, [character]);

  const ability = useMemo(() => {
    return spellcastingInfo?.ability || 'INT';
  }, [spellcastingInfo]);

  const modifier = useMemo(() => {
    if (!ability) return 0;
    return getAbilityModifier(ability);
  }, [ability, getAbilityModifier]);

  const spellSaveDC = useMemo(() => {
    if (!modifier) return 0;
    return 8 + proficiencyBonus + modifier;
  }, [modifier, proficiencyBonus]);

  const spellAttackBonus = useMemo(() => {
    if (!modifier) return 0;
    return proficiencyBonus + modifier;
  }, [modifier, proficiencyBonus]);

  return {
    ability,
    modifier,
    spellSaveDC,
    spellAttackBonus,
    isSpellCaster: !!spellcastingInfo,
  };
};

export default useSpellcaster;
