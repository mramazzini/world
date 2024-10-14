import { Prisma, Time } from "@prisma/client";
import { creatureIds } from "./Creature.seed";
import { spellIds } from "../Spells/spells.seed";

const CreatureToSpellSeed: {
  creatureId: number;
  spellId: number;
  free?: boolean;
  limited?: {
    amount: number;
    time: Time;
  };
}[] = [
  {
    creatureId: creatureIds.acolyte,
    spellId: spellIds.light,
  },
  {
    creatureId: creatureIds.acolyte,
    spellId: spellIds.sacredFlame,
  },
  {
    creatureId: creatureIds.acolyte,
    spellId: spellIds.thaumaturgy,
  },
  {
    creatureId: creatureIds.acolyte,
    spellId: spellIds.bless,
  },
  {
    creatureId: creatureIds.acolyte,
    spellId: spellIds.cureWounds,
  },
  {
    creatureId: creatureIds.acolyte,
    spellId: spellIds.sanctuary,
  },
  {
    creatureId: creatureIds.archmage,
    spellId: spellIds.disguiseSelf,
    free: true,
  },
  {
    creatureId: creatureIds.archmage,
    spellId: spellIds.invisibility,
    free: true,
  },
  ...[
    spellIds.firebolt,
    spellIds.light,
    spellIds.mageHand,
    spellIds.prestidigitation,
    spellIds.shockingGrasp,
    spellIds.detectMagic,
    spellIds.identify,
    spellIds.mageArmor,
    spellIds.magicMissile,
    spellIds.detectThoughts,
    spellIds.mirrorImage,
    spellIds.mistyStep,
    spellIds.counterspell,
    spellIds.fly,
    spellIds.lightningBolt,
    spellIds.banishment,
    spellIds.fireShield,
    spellIds.stoneSkin,
    spellIds.coneOfCold,
    spellIds.scrying,
    spellIds.wallOfForce,
    spellIds.globeOfInvulnerability,
    spellIds.teleport,
    spellIds.mindBlank,
    spellIds.timeStop,
  ].map((spellId) => ({
    creatureId: creatureIds.archmage,
    spellId,
  })),
  ...[
    spellIds.light,
    spellIds.sacredFlame,
    spellIds.thaumaturgy,
    spellIds.command,
    spellIds.inflictWounds,
    spellIds.shieldOfFaith,
    spellIds.holdPerson,
    spellIds.spiritualWeapon,
  ].map((spellId) => ({ creatureId: creatureIds.cultFanatic, spellId })),
  ...[
    spellIds.druidcraft,
    spellIds.produceFlame,
    spellIds.shillelagh,
    spellIds.entangle,
    spellIds.speakWithAnimals,
    spellIds.longstrider,
    spellIds.thunderwave,
    spellIds.animalMessenger,
    spellIds.barkskin,
  ].map((spellId) => ({ creatureId: creatureIds.druid, spellId })),
  ...[
    spellIds.firebolt,
    spellIds.light,
    spellIds.mageHand,
    spellIds.prestidigitation,
    spellIds.detectMagic,
    spellIds.mageArmor,
    spellIds.magicMissile,
    spellIds.shield,
    spellIds.mistyStep,
    spellIds.suggestion,
    spellIds.counterspell,
    spellIds.fireball,
    spellIds.fly,
    spellIds.greaterInvisibility,
    spellIds.iceStorm,
    spellIds.coneOfCold,
  ].map((spellId) => ({ creatureId: creatureIds.mage, spellId })),
  ...[
    spellIds.light,
    spellIds.sacredFlame,
    spellIds.thaumaturgy,
    spellIds.cureWounds,
    spellIds.guidingBolt,
    spellIds.sanctuary,
    spellIds.spiritualWeapon,
    spellIds.lesserRestoration,
    spellIds.spiritGuardians,
    spellIds.dispelMagic,
  ].map((spellId) => ({
    creatureId: creatureIds.priest,
    spellId,
  })),
  ...[spellIds.detectEvilAndGood].map((spellId) => ({
    creatureId: creatureIds.deva,
    spellId,
    free: true,
  })),
  ...[spellIds.commune, spellIds.raiseDead].map((spellId) => ({
    creatureId: creatureIds.deva,
    spellId,
    limited: { amount: 1, time: Time.DAY },
  })),
  ...[spellIds.detectEvilAndGood, spellIds.invisibility].map((spellId) => ({
    creatureId: creatureIds.planetar,
    spellId,
    free: true,
  })),
  ...[
    spellIds.bladeBarrier,
    spellIds.dispelEvilAndGood,
    spellIds.flameStrike,
    spellIds.raiseDead,
  ].map((spellId) => ({
    creatureId: creatureIds.planetar,
    spellId,
    limited: { amount: 3, time: Time.DAY },
  })),
  ...[spellIds.commune, spellIds.controlWeather, spellIds.insectPlague].map(
    (spellId) => ({
      creatureId: creatureIds.planetar,
      spellId,
      limited: { amount: 1, time: Time.DAY },
    })
  ),
  ...[spellIds.detectEvilAndGood, spellIds.invisibility].map((spellId) => ({
    creatureId: creatureIds.solar,
    spellId,
    free: true,
  })),
  ...[
    spellIds.bladeBarrier,
    spellIds.dispelEvilAndGood,
    spellIds.resurrection,
  ].map((spellId) => ({
    creatureId: creatureIds.solar,
    spellId,
    limited: { amount: 3, time: Time.DAY },
  })),
  ...[spellIds.commune, spellIds.controlWeather].map((spellId) => ({
    creatureId: creatureIds.solar,
    spellId,
    limited: { amount: 1, time: Time.DAY },
  })),
];

export default CreatureToSpellSeed;
