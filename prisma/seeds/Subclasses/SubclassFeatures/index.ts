import FighterSubclassFeatures from './Fighter.seed';
import ClericSubclassFeatures from './Cleric.seed';
import BarbarianSubclassFeatures from './Barbarian.seed';
import BardSubclassFeatures from './Bard.seed';
import WizardSubclassFeatures from './Wizard.seed';
import DruidSubclassFeatures from './Druid.seed';
import MonkSubclassFeatures from './Monk.seed';
import PaladinSubclassFeatures from './Paladin.seed';
import RangerSubclassFeatures from './Ranger.seed';
import RogueSubclassFeatures from './Rogue.seed';
import SorcererSubclassFeatures from './Sorcerer.seed';
import WarlockSubclassFeatures from './Warlock.seed';
import ArtificerSubclassFeatures from './Artificer.seed';
import generateId from '../../_helpers/generateId';
import SubClasses from '../Subclasses.seed';
import { Prisma } from '@prisma/client';
let count = 1;
const SubclassFeatures: Prisma.FeatureCreateManyInput[] = [
  // ...FighterSubclassFeatures,
  ...ClericSubclassFeatures,
  ...BarbarianSubclassFeatures,
  ...BardSubclassFeatures,
  // ...WizardSubclassFeatures,
  ...DruidSubclassFeatures,
  ...MonkSubclassFeatures,
  ...PaladinSubclassFeatures,
  ...RangerSubclassFeatures,
  // ...RogueSubclassFeatures,
  // ...SorcererSubclassFeatures,
  // ...WarlockSubclassFeatures,
  ...ArtificerSubclassFeatures,
].map((feature, index, arr) => {
  const featureParent = SubClasses.find(
    (subClass) =>
      subClass.id === feature.subClassId ||
      // @ts-expect-error - I dont know why this is throwing an error but it works fine
      subClass.id === feature.spellCastingSubclassId
  );
  if (!featureParent)
    throw new Error(
      `Error creating subclass feature: ${feature.name} from ${feature.subClassId}`
    );
  const id = generateId('subclass', feature.name, featureParent.name, count);
  count++;
  const nextSubclassFeature = arr[index + 1];
  if (!nextSubclassFeature) return { ...feature, id };
  if (
    nextSubclassFeature.subClassId !== feature.subClassId ||
    // @ts-expect-error - I dont know why this is throwing an error but it works fine
    nextSubclassFeature.spellCastingSubclassId !==
      // @ts-expect-error - I dont know why this is throwing an error but it works fine
      feature.spellCastingSubclassId
  ) {
    count = 1;
  }
  return { ...feature, id };
});

export default SubclassFeatures;
