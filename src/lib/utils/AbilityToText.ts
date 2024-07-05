// Maps STR to strength, DEX to dexterity, etc.
const AbilityToText = (ability: string) => {
  switch (ability) {
    case "STR":
      return "Strength";
    case "DEX":
      return "Dexterity";
    case "CON":
      return "Constitution";
    case "INT":
      return "Intelligence";
    case "WIS":
      return "Wisdom";
    case "CHA":
      return "Charisma";
    default:
      return "";
  }
};
export default AbilityToText;
