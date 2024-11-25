import { Choice, ChoiceProtocol } from '@prisma/client';
import AddToInventoryResolver from './ChoiceResolvers/ItemResolvers/AddToInventoryResolver';
import ImproveAbilityScoreResolver from './ChoiceResolvers/AbilityScoreResolvers/ImproveAbilityScoreResolver';
import SetAbilityScoreResolver from './ChoiceResolvers/AbilityScoreResolvers/SetAbilityScoreResolver';
import SetArmorProficiencyResolver from './ChoiceResolvers/ArmorResolvers/SetArmorProfieciencyResolver';
import SetSavingThrowProficiency from './ChoiceResolvers/SavingThrowResolvers/SetSavingThrowProficiencyResolver';
import SetToolProficiencyGroupedResolver from './ChoiceResolvers/ToolResolvers/SetToolProficiencyGroupedResolver';
import SetToolProficiencyResolver from './ChoiceResolvers/ToolResolvers/SetToolProficiencyResolver';
import SetLanguageProficiencyResolver from './ChoiceResolvers/LanguageResolvers/SetLanguageProficiencyResolver';
import SetSkillProficiencyResolver from './ChoiceResolvers/SkillResolvers/SetSkillProficiencyResolver';
import SetSkillExpertiseResolver from './ChoiceResolvers/SkillResolvers/SetSkillExpertiseResolver';
import AddToInventoryGroupedResolver from './ChoiceResolvers/ItemResolvers/AddToInventoryGroupedResolver/AddToInventoryGroupedResolver';

const ChoiceResolverController = ({ choice }: { choice: Choice }) => {
  switch (choice.protocol) {
    case ChoiceProtocol.ADD_TO_INVENTORY:
      return <AddToInventoryResolver choice={choice} />;
    case ChoiceProtocol.ADD_TO_INVENTORY_GROUPED:
      return <AddToInventoryGroupedResolver choice={choice} />;
    case ChoiceProtocol.IMPROVE_ABILITY_SCORE:
      return <ImproveAbilityScoreResolver choice={choice} />;
    case ChoiceProtocol.SET_ABILITY_SCORE:
      return <SetAbilityScoreResolver choice={choice} />;
    case ChoiceProtocol.SET_ARMOR_PROFICIENCY:
      return <SetArmorProficiencyResolver choice={choice} />;
    case ChoiceProtocol.SET_LANGUAGE_PROFICIENCY:
      return <SetLanguageProficiencyResolver choice={choice} />;
    case ChoiceProtocol.SET_SKILL_PROFICIENCY:
      return <SetSkillProficiencyResolver choice={choice} />;
    case ChoiceProtocol.SET_SKILL_EXPERTISE:
      return <SetSkillExpertiseResolver choice={choice} />;
    case ChoiceProtocol.SET_TOOL_PROFICIENCY:
      return <SetToolProficiencyResolver choice={choice} />;
    case ChoiceProtocol.SET_TOOL_PROFICIENCY_GROUPED:
      return <SetToolProficiencyGroupedResolver choice={choice} />;
    case ChoiceProtocol.SET_WEAPON_PROFICIENCY:
      return <li>Set Weapon Proficiency</li>;
    case ChoiceProtocol.SET_SAVING_THROW_PROFICIENCY:
      return <SetSavingThrowProficiency choice={choice} />;
  }
};

export default ChoiceResolverController;
