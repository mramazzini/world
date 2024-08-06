export const toSpellLevel = (level: number | string) => {
  let newLevel = level;
  if (typeof level === "string") {
    newLevel = parseInt(level);
    if (isNaN(newLevel)) {
      return level;
    }
  }
  switch (newLevel) {
    case 0:
      return "Cantrip";
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return `${level}th`;
  }
};
