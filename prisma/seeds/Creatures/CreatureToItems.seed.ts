import { itemIds } from "../Items/ItemIds";
import { creatureIds } from "./Creature.seed";

const CreatureToItemsSeed: {
  creatureID: number;
  itemID: number;
}[] = [
  {
    creatureID: creatureIds.acolyte,
    itemID: itemIds.club,
  },
  {
    creatureID: creatureIds.archmage,
    itemID: itemIds.dagger,
  },
  {
    creatureID: creatureIds.assassin,
    itemID: itemIds.shortsword,
  },
  {
    creatureID: creatureIds.assassin,
    itemID: itemIds.crossbowLight,
  },
  {
    creatureID: creatureIds.bandit,
    itemID: itemIds.scimitar,
  },
  {
    creatureID: creatureIds.bandit,
    itemID: itemIds.crossbowLight,
  },
  {
    creatureID: creatureIds.banditCaptain,
    itemID: itemIds.scimitar,
  },
  {
    creatureID: creatureIds.banditCaptain,
    itemID: itemIds.dagger,
  },
  {
    creatureID: creatureIds.berserker,
    itemID: itemIds.greataxe,
  },
  {
    creatureID: creatureIds.commoner,
    itemID: itemIds.club,
  },
  {
    creatureID: creatureIds.cultist,
    itemID: itemIds.scimitar,
  },
  {
    creatureID: creatureIds.cultFanatic,
    itemID: itemIds.dagger,
  },
  {
    creatureID: creatureIds.druid,
    itemID: itemIds.quarterstaff,
  },
  {
    creatureID: creatureIds.gladiator,
    itemID: itemIds.gladiatorSpear,
  },
  {
    creatureID: creatureIds.guard,
    itemID: itemIds.spear,
  },
  {
    creatureID: creatureIds.knight,
    itemID: itemIds.greatsword,
  },
  {
    creatureID: creatureIds.knight,
    itemID: itemIds.crossbowHeavy,
  },
  {
    creatureID: creatureIds.mage,
    itemID: itemIds.dagger,
  },
  {
    creatureID: creatureIds.noble,
    itemID: itemIds.rapier,
  },
  { creatureID: creatureIds.priest, itemID: itemIds.mace },
  {
    creatureID: creatureIds.scout,
    itemID: itemIds.shortsword,
  },
  {
    creatureID: creatureIds.scout,
    itemID: itemIds.longbow,
  },
  {
    creatureID: creatureIds.spy,
    itemID: itemIds.shortsword,
  },
  {
    creatureID: creatureIds.spy,
    itemID: itemIds.crossbowHand,
  },
  {
    creatureID: creatureIds.thug,
    itemID: itemIds.mace,
  },
  {
    creatureID: creatureIds.thug,
    itemID: itemIds.crossbowHeavy,
  },
  {
    creatureID: creatureIds.tribalWarrior,
    itemID: itemIds.spear,
  },
  {
    creatureID: creatureIds.veteran,
    itemID: itemIds.longsword,
  },
  {
    creatureID: creatureIds.veteran,
    itemID: itemIds.crossbowHeavy,
  },
  {
    creatureID: creatureIds.veteran,
    itemID: itemIds.shortsword,
  },
];

export default CreatureToItemsSeed;
