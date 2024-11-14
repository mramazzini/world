import { ArmorType, Prisma } from '@prisma/client';

//ArmorFeatureId start at 1
const ArmorSeed: Prisma.ArmorCreateManyInput[] = [
  {
    id: '1',
    name: 'Padded Armor',
    armorClass: 11,
    armorType: ArmorType.LIGHT,
  },
  {
    id: '2',
    name: 'Leather Armor',
    armorClass: 11,
    armorType: ArmorType.LIGHT,
  },
  {
    id: '3',
    name: 'Studded Leather Armor',
    armorClass: 12,
    armorType: ArmorType.LIGHT,
  },
  {
    id: '4',
    name: 'Hide Armor',
    armorClass: 12,
    armorType: ArmorType.MEDIUM,
  },
  {
    id: '5',
    name: 'Chain Shirt',
    armorClass: 13,
    armorType: ArmorType.MEDIUM,
  },
  {
    id: '6',
    name: 'Scale Mail',
    armorClass: 14,
    armorType: ArmorType.MEDIUM,
  },
  {
    id: '7',
    name: 'Spiked Armor',
    armorClass: 14,
    armorType: ArmorType.MEDIUM,
  },
  {
    id: '8',
    name: 'Breastplate',
    armorClass: 14,
    armorType: ArmorType.MEDIUM,
  },
  {
    id: '9',
    name: 'Half Plate',
    armorClass: 15,
    armorType: ArmorType.MEDIUM,
  },
  {
    id: '10',
    name: 'Ring Mail',
    armorClass: 14,
    armorType: ArmorType.HEAVY,
  },
  {
    id: '11',
    name: 'Chain Mail',
    armorClass: 16,
    armorType: ArmorType.HEAVY,
  },
  {
    id: '12',
    name: 'Splint Armor',
    armorClass: 17,
    armorType: ArmorType.HEAVY,
  },
  {
    id: '13',
    name: 'Plate Armor',
    armorClass: 18,
    armorType: ArmorType.HEAVY,
  },
  {
    id: '14',
    name: 'Shield',
    armorClass: 2,
    armorType: ArmorType.SHIELDS,
  },
];

const armorIds = {
  paddedArmor: '1',
  leatherArmor: '2',
  studdedLeatherArmor: '3',
  hideArmor: '4',
  chainShirt: '5',
  scaleMail: '6',
  spikedArmor: '7',
  breastplate: '8',
  halfPlate: '9',
  ringMail: '10',
  chainMail: '11',
  splintArmor: '12',
  plateArmor: '13',
  shield: '14',
};

export { ArmorSeed, armorIds };
