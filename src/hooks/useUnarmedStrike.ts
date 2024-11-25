// import useCharacterState from './useCharacter/useCharacterState';
import useModifier from './useModifier';
import useProficiency from './useProficiency';

const useUnarmedStrike = () => {
  //   const state = useCharacterState();
  const { getAbilityModifier } = useModifier();
  const { proficiencyBonus } = useProficiency();

  return 1 + getAbilityModifier('STR') + proficiencyBonus;
};

export default useUnarmedStrike;
