import { useAppSelector } from '@/store/hooks';
import { Ability } from '@prisma/client';
import { useMemo } from 'react';

const useAbility = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const abilityScores = useMemo(() => {
    return {
      [Ability.STR]: character?.baseSTR || 10,
      [Ability.DEX]: character?.baseDEX || 10,
      [Ability.CON]: character?.baseCON || 10,
      [Ability.INT]: character?.baseINT || 10,
      [Ability.WIS]: character?.baseWIS || 10,
      [Ability.CHA]: character?.baseCHA || 10,
    };
  }, [
    character?.baseCHA,
    character?.baseCON,
    character?.baseDEX,
    character?.baseINT,
    character?.baseSTR,
    character?.baseWIS,
  ]);

  return abilityScores;
};

export default useAbility;
