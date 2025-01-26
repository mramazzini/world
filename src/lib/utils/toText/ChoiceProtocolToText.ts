import { ChoiceProtocol } from '@prisma/client';

// const ChoiceProtocol: {
//   SET_SKILL_PROFICIENCY: 'SET_SKILL_PROFICIENCY';
//   SET_SKILL_EXPERTISE: 'SET_SKILL_EXPERTISE';
//   SET_TOOL_PROFICIENCY: 'SET_TOOL_PROFICIENCY';
//   SET_TOOL_PROFICIENCY_GROUPED: 'SET_TOOL_PROFICIENCY_GROUPED';
//   SET_SAVING_THROW_PROFICIENCY: 'SET_SAVING_THROW_PROFICIENCY';
//   SET_ARMOR_PROFICIENCY: 'SET_ARMOR_PROFICIENCY';
//   SET_WEAPON_PROFICIENCY: 'SET_WEAPON_PROFICIENCY';
//   ADD_TO_INVENTORY: 'ADD_TO_INVENTORY';
//   ADD_TO_INVENTORY_GROUPED: 'ADD_TO_INVENTORY_GROUPED';
//   SET_LANGUAGE_PROFICIENCY: 'SET_LANGUAGE_PROFICIENCY';
//   SET_ABILITY_SCORE: 'SET_ABILITY_SCORE';
//   IMPROVE_ABILITY_SCORE: 'IMPROVE_ABILITY_SCORE';
// };

export const ChoiceProtocolToText = (choice: ChoiceProtocol) => {
  switch (choice) {
    case ChoiceProtocol.SET_SKILL_PROFICIENCY:
      return 'Set Skill Proficiency';
    case ChoiceProtocol.SET_SKILL_EXPERTISE:
      return 'Set Skill Expertise';
    case ChoiceProtocol.SET_TOOL_PROFICIENCY:
      return 'Set Tool Proficiency';
    case ChoiceProtocol.SET_TOOL_PROFICIENCY_GROUPED:
      return 'Set Tool Proficiency';
    case ChoiceProtocol.SET_SAVING_THROW_PROFICIENCY:
      return 'Set Saving Throw Proficiency';
    case ChoiceProtocol.SET_ARMOR_PROFICIENCY:
      return 'Set Armor Proficiency';
    case ChoiceProtocol.SET_WEAPON_PROFICIENCY:
      return 'Set Weapon Proficiency';
    case ChoiceProtocol.ADD_TO_INVENTORY:
      return 'Add to Inventory';
    case ChoiceProtocol.ADD_TO_INVENTORY_GROUPED:
      return 'Add to Inventory';
    case ChoiceProtocol.SET_LANGUAGE_PROFICIENCY:
      return 'Set Language Proficiency';
    case ChoiceProtocol.SET_ABILITY_SCORE:
      return 'Set Ability Score';

    default:
      return 'Unknown choice';
  }
};
