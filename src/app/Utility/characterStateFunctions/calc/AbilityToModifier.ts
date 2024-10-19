export const AbilityToModifier = (ability: number): number => {
  return Math.floor((ability - 10) / 2);
};
