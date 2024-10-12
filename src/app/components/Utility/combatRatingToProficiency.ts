export const combatRatingToProficiency = (combatRating: number): number => {
  if (combatRating <= 4) {
    return 2;
  }
  const mod = combatRating % 4;
  const prof = Math.floor(combatRating / 4) + 1;
  if (mod === 0) {
    return prof;
  } else {
    return prof + 1;
  }
};
