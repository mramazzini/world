import { Language, Skill } from '@prisma/client';
import { src } from './types/types';
import { Ability } from '@prisma/client';
export const QUERY_LIMIT = 30;
export const NAVBAR_HEIGHT_TAILWIND = 'h-16';
export const NAVBAR_HEIGHT_REM = 4;
export const EXPANDED_NAVBAR_HEIGHT_REM = 16;
export const VERSION = '0.12.4';
export const officialSources: string[] = Object.values(src).filter(
  (s) => s !== src.homebrew
);

export const DISCORD_INVITE = 'https://discord.gg/gNmJU7ZZqs';

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
  'Human',
  'Elf',
  'Dwarf',
  'Halfling',
  'Gnome',
  'Half Elf',
  'Half Orc',
  'Tiefling',
  'Dragonborn',
];

export const classes: string[] = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard',
];

export const wikiLinks = [
  {
    name: 'Classes',
    href: '/class',
  },
  {
    name: 'Subclasses',
    href: '/subclass',
  },
  {
    name: 'Spells',
    href: '/spells',
  },
  {
    name: 'Spell Lists',
    href: '/spell-list',
  },
  {
    name: 'Backgrounds',
    href: '/background',
  },
  {
    name: 'Feats',
    href: '/feats',
  },
  {
    name: 'Species',
    href: '/species',
  },
  {
    name: 'Subspecies',
    href: '/subspecies',
  },
  {
    name: 'Creatures',
    href: '/creature',
  },
  {
    name: 'Items',
    href: '/item',
  },
];
