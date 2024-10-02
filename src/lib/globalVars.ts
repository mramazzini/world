import { Language, Species, Skill } from "@prisma/client";
import { Property, src, WeaponPropertyNames } from "./utils/types/types";
import { Ability } from "@prisma/client";
export const QUERY_LIMIT = 30;
export const NAVBAR_HEIGHT_REM = 4;
export const VERSION = "0.7.3";
export const officialSources: string[] = Object.values(src).filter(
  (s) => s !== src.homebrew
);

export const DISCORD_INVITE = "https://discord.gg/gNmJU7ZZqs";

export const skills: Skill[] = Object.values(Skill);

export const skillAtritbuteMap: Record<Skill, Ability> = {
  ACROBATICS: Ability.DEX,
  ANIMAL_HANDLING: Ability.WIS,
  ARCANA: Ability.INT,
  ATHLETICS: Ability.STR,
  DECEPTION: Ability.CHA,
  HISTORY: Ability.INT,
  INSIGHT: Ability.WIS,
  INTIMIDATION: Ability.CHA,
  INVESTIGATION: Ability.INT,
  MEDICINE: Ability.WIS,
  NATURE: Ability.INT,
  PERCEPTION: Ability.WIS,
  PERFORMANCE: Ability.CHA,
  PERSUASION: Ability.CHA,
  RELIGION: Ability.INT,
  SLEIGHT_OF_HAND: Ability.DEX,
  STEALTH: Ability.DEX,
  SURVIVAL: Ability.WIS,
};

export const languages = Object.values(Language);

export const species: string[] = [
  "Human",
  "Elf",
  "Dwarf",
  "Halfling",
  "Gnome",
  "Half Elf",
  "Half Orc",
  "Tiefling",
  "Dragonborn",
];

export const classes: string[] = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

export const WeaponProperties: Record<WeaponPropertyNames, Property> = {
  Ammunition: {
    name: "Ammunition",
    description:
      "You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack. Loading a one-handed weapon requires a free hand. At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield. If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon. A sling must be loaded to deal any damage when used in this way.",
  },
  Finesse: {
    name: "Finesse",
    description:
      "When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.",
  },
  Heavy: {
    name: "Heavy",
    description:
      "Creatures that are Small or Tiny have disadvantage on attack rolls with heavy weapons. A heavy weapon's size and bulk make it too large for a Small or Tiny creature to use effectively.",
  },
  Light: {
    name: "Light",
    description:
      "A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.",
  },
  Loading: {
    name: "Loading",
    description:
      "Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make.",
  },
  Range: {
    name: "Range",
    description:
      "A weapon that can be used to make a ranged attack has a range shown in parentheses after the ammunition or thrown property. The range lists two numbers. The first is the weapon’s normal range in feet, and the second indicates the weapon’s maximum range. When attacking a target beyond normal range, you have disadvantage on the attack roll. You can’t attack a target beyond the weapon’s long range.",
  },
  Reach: {
    name: "Reach",
    description:
      "This weapon adds 5 feet to your reach when you attack with it. This property also determines your reach for opportunity attacks with a reach weapon.",
  },
  Special: {
    name: "Special",
    description:
      "A weapon with the special property has unusual rules governing its use, explained in the weapon's description.",
  },
  Thrown: {
    name: "Thrown",
    description:
      "If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.",
  },
  "Two-Handed": {
    name: "Two-Handed",
    description:
      "This weapon requires two hands to use. This property is relevant only when you attack with the weapon, not when you simply hold it.",
  },
  Versatile: {
    name: "Versatile",
    description:
      "This weapon can be used with one or two hands. A damage value in parentheses appears with the property—the damage when the weapon is used with two hands to make a melee attack.",
  },
};
