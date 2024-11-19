import { Choice, ChoiceProtocol } from '@prisma/client';
import SetSkillProficiencyResolver from './ChoiceResolvers/SetSkillProficiencyResolver';

const ChoiceResolverController = ({ choice }: { choice: Choice }) => {
  switch (choice.protocol) {
    case ChoiceProtocol.ADD_TO_INVENTORY:
      return <li>Add to Inventory</li>;
    case ChoiceProtocol.ADD_TO_INVENTORY_GROUPED:
      return <li>Add to Inventory Grouped</li>;
    case ChoiceProtocol.IMPROVE_ABILITY_SCORE:
      return <li>Improve Ability Score</li>;
    case ChoiceProtocol.SET_ABILITY_SCORE:
      return <li>Set Ability Score</li>;
    case ChoiceProtocol.SET_ARMOR_PROFICIENCY:
      return <li>Set Armor Proficiency</li>;
    case ChoiceProtocol.SET_LANGUAGE_PROFICIENCY:
      return <li>Set Language Proficiency</li>;
    case ChoiceProtocol.SET_SKILL_PROFICIENCY:
      return <SetSkillProficiencyResolver choice={choice} />;
    case ChoiceProtocol.SET_SKILL_EXPERTISE:
      return <li>Set Skill Expertise</li>;
    case ChoiceProtocol.SET_TOOL_PROFICIENCY:
      return <li>Set Tool Proficiency</li>;
    case ChoiceProtocol.SET_TOOL_PROFICIENCY_GROUPED:
      return <li>Set Tool Proficiency Grouped</li>;
    case ChoiceProtocol.SET_WEAPON_PROFICIENCY:
      return <li>Set Weapon Proficiency</li>;
    case ChoiceProtocol.SET_SAVING_THROW_PROFICIENCY:
      return <li>Set Saving Throw Proficiency</li>;
  }
};

export default ChoiceResolverController;
