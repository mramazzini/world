import FighterSubclassFeatures from "./Fighter";
import ClericSubclassFeatures from "./Cleric";
import BarbarianSubclassFeatures from "./Barbarian";
import BardSubclassFeatures from "./Bard";
import WizardSubclassFeatures from "./Wizard";
import DruidSubclassFeatures from "./Druid";
import MonkSubclassFeatures from "./Monk";
import PaladinSubclassFeatures from "./Paladin";
// import RangerSubclassFeatures from "./Ranger";
// import RogueSubclassFeatures from "./Rogue";
// import SorcererSubclassFeatures from "./Sorcerer";
// import WarlockSubclassFeatures from "./Warlock";

const SubclassFeatures = [
  ...FighterSubclassFeatures,
  ...ClericSubclassFeatures,
  ...BarbarianSubclassFeatures,
  ...BardSubclassFeatures,
  ...WizardSubclassFeatures,
  ...DruidSubclassFeatures,
  ...MonkSubclassFeatures,
  ...PaladinSubclassFeatures,
  // ...RangerSubclassFeatures,
  // ...RogueSubclassFeatures,
  // ...SorcererSubclassFeatures,
  // ...WarlockSubclassFeatures,
];

export default SubclassFeatures;
