import { Choice, ChoiceProtocol } from '@prisma/client';
import AddToInventoryResolver from './ChoiceResolvers/ItemResolvers/AddToInventoryResolver';
import ImproveAbilityScoreResolver from './ChoiceResolvers/AbilityScoreResolvers/ImproveAbilityScoreResolver';
import SetAbilityScoreResolver from './ChoiceResolvers/AbilityScoreResolvers/SetAbilityScoreResolver';
import SetArmorProficiencyResolver from './ChoiceResolvers/ArmorResolvers/SetArmorProfieciencyResolver';
import SetSavingThrowProficiency from './ChoiceResolvers/SavingThrowResolvers/SetSavingThrowProficiencyResolver';
import SetToolProficiencyResolver from './ChoiceResolvers/ToolResolvers/SetToolProficiencyResolver';
import SetLanguageProficiencyResolver from './ChoiceResolvers/LanguageResolvers/SetLanguageProficiencyResolver';
import SetSkillProficiencyResolver from './ChoiceResolvers/SkillResolvers/SetSkillProficiencyResolver';
import SetSkillExpertiseResolver from './ChoiceResolvers/SkillResolvers/SetSkillExpertiseResolver';
import AddToInventoryGroupedResolver from './ChoiceResolvers/ItemResolvers/AddToInventoryGroupedResolver/AddToInventoryGroupedResolver';
import AddKnownSpellResolver from './ChoiceResolvers/SpellResolvers/AddKnownSpellResolver';
import SetToolProficiencyGroupedResolver from './ChoiceResolvers/ToolResolvers/Grouped/SetToolProficiencyGroupedResolver';
import AddFreeSpellResolver from './ChoiceResolvers/SpellResolvers/AddFreeSpellResolver';
import UpgradeSkillProficiencyToExpertiseResolver from './ChoiceResolvers/SkillResolvers/UpgradeSkillProficiencyToExpertise';
import ChooseSubclassResolver from './ChoiceResolvers/SubclassResolver/ChooseSubclassResolver';

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
    case ChoiceProtocol.SET_SAVING_THROW_PROFICIENCY:
      return <SetSavingThrowProficiency choice={choice} />;
    case ChoiceProtocol.ADD_FREE_SPELL:
      return <AddFreeSpellResolver choice={choice} />;
    case ChoiceProtocol.ADD_KNOWN_SPELL:
      return <AddKnownSpellResolver choice={choice} />;
    case ChoiceProtocol.UPGRADE_SKILL_PROFICIENCY_TO_EXPERTISE:
      return <UpgradeSkillProficiencyToExpertiseResolver choice={choice} />;
    case ChoiceProtocol.CHOOSE_SUBCLASS:
      return <ChooseSubclassResolver choice={choice} />;
    // case ChoiceProtocol.SET_WEAPON_PROFICIENCY:

    default:
      return (
        <li>
          If you are reading this, max has goofed. Please send him this message,
          and kindly wait for him to fix this choice.
          <br />
          {choice.protocol}
        </li>
      );
  }
};

export default ChoiceResolverController;
