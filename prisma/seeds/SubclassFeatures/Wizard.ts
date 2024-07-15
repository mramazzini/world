import { Prisma } from "@prisma/client";

const ids = {
  abjuration: 28,
  bladesinging: 29,
  chronurgy: 30,
  conjuration: 31,
  divination: 32,
  enchantment: 33,
  evocation: 34,
  graviturgy: 35,
  illusion: 36,
  necromancy: 37,
  scribes: 38,
  transmutation: 39,
  warMagic: 40,
};

const WizardSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [];

export default WizardSubclassFeatures;
