import { Prisma } from '@prisma/client';
import { armorIds, ArmorSeed } from './Armor.seed';
import generateId from '../../_helpers/generateId';
let count = 1;
const ArmorFeaturesSeed: Prisma.FeatureCreateManyInput[] = [
  {
    name: 'Stealth Disadvantage',
    description: 'Padded Armor imposes disadvantage on Stealth checks.',
    armorId: armorIds.paddedArmor,
  },
  {
    name: 'Stealth Disadvantage',
    description: 'Scale Mail Armor imposes disadvantage on Stealth checks.',
    armorId: armorIds.scaleMail,
  },
  {
    name: 'Stealth Disadvantage',
    description: 'Spiked Armor imposes disadvantage on Stealth checks.',
    armorId: armorIds.spikedArmor,
  },
  {
    name: 'Stealth Disadvantage',
    description: 'Half Plate Armor imposes disadvantage on Stealth checks.',
    armorId: armorIds.halfPlate,
  },
  {
    name: 'Stealth Disadvantage',
    description: 'Ring Mail Armor imposes disadvantage on Stealth checks.',
    armorId: armorIds.ringMail,
  },
  {
    name: 'Stealth Disadvantage',
    description: 'Chain Mail Armor imposes disadvantage on Stealth checks.',
    armorId: armorIds.chainMail,
  },
  {
    name: 'Chain Mail Strength Requirement',
    description:
      'Chain Mail requires a Strength of 13 to wear. Otherwise, you have a -10 penalty to your speed.',
    armorId: armorIds.chainMail,
  },
  {
    name: 'Stealth Disadvantage',
    description: 'Splint Armor imposes disadvantage on Stealth checks.',
    armorId: armorIds.splintArmor,
  },
  {
    name: 'Splint Armor Strength Requirement',
    description:
      'Splint Armor requires a Strength of 15 to wear. Otherwise, you have a -10 penalty to your speed.',
    armorId: armorIds.splintArmor,
  },
  {
    name: 'Stealth Disadvantage',
    description: 'Splint Armor imposes disadvantage on Stealth checks.',
    armorId: armorIds.plateArmor,
  },
  {
    name: 'Plate Armor Strength Requirement',
    description:
      'Plate Armor requires a Strength of 15 to wear. Otherwise, you have a -10 penalty to your speed.',
    armorId: armorIds.plateArmor,
  },
].map((feature, index, arr) => {
  const featureParent = ArmorSeed.find((armor) => armor.id === feature.armorId);
  if (!featureParent?.name) throw new Error('Feature must have a name');
  const id = generateId('armor', feature.name, featureParent.name, count);
  count++;
  const nextArmorFeature = arr[index + 1];
  if (!nextArmorFeature) return { ...feature, id };
  if (nextArmorFeature.armorId !== feature.armorId) {
    count = 1;
  }
  return { ...feature, id };
});
export default ArmorFeaturesSeed;
