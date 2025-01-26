import { DiceCommand } from '@/hooks/useDiceRoller';

const FormulaDictionary: {
  [key in DiceCommand]: {
    title: string;
    description: string;
  };
} = {
  [DiceCommand.DEX]: {
    title: 'Dexterity',
    description: 'Your Dexterity modifier.',
  },
  [DiceCommand.STR]: {
    title: 'Strength',
    description: 'Your Strength modifier.',
  },
  [DiceCommand.CON]: {
    title: 'Constitution',
    description: 'Your Constitution modifier.',
  },
  [DiceCommand.WIS]: {
    title: 'Wisdom',
    description: 'Your Wisdom modifier.',
  },
  [DiceCommand.CHA]: {
    title: 'Charisma',
    description: 'Your Charisma modifier.',
  },
  [DiceCommand.INT]: {
    title: 'Intelligence',
    description: 'Your Intelligence modifier.',
  },
  [DiceCommand.PROF]: {
    title: 'Proficiency Bonus',
    description: 'Your proficiency bonus.',
  },
  [DiceCommand.SPA]: {
    title: 'Spell Attack Bonus',
    description: 'Your spell attack bonus.',
  },
  [DiceCommand.SDC]: {
    title: 'Spell Save DC',
    description: 'Your spell save DC.',
  },
  [DiceCommand.INIT]: {
    title: 'Initiative',
    description: 'Your initiative bonus.',
  },
  [DiceCommand.AC]: {
    title: 'Armor Class',
    description: 'Your armor class.',
  },
  [DiceCommand.ACROBATICS]: {
    title: 'Acrobatics',
    description: 'Your Acrobatics modifier.',
  },
  [DiceCommand.ANIMAL]: {
    title: 'Animal Handling',
    description: 'Your Animal Handling modifier.',
  },
  [DiceCommand.ARCANA]: {
    title: 'Arcana',
    description: 'Your Arcana modifier.',
  },
  [DiceCommand.ATHLETICS]: {
    title: 'Athletics',
    description: 'Your Athletics modifier.',
  },
  [DiceCommand.DECEPTION]: {
    title: 'Deception',
    description: 'Your Deception modifier.',
  },
  [DiceCommand.HISTORY]: {
    title: 'History',
    description: 'Your History modifier.',
  },
  [DiceCommand.INSIGHT]: {
    title: 'Insight',
    description: 'Your Insight modifier.',
  },
  [DiceCommand.INTIMIDATION]: {
    title: 'Intimidation',
    description: 'Your Intimidation modifier.',
  },
  [DiceCommand.INVESTIGATION]: {
    title: 'Investigation',
    description: 'Your Investigation modifier.',
  },
  [DiceCommand.MEDICINE]: {
    title: 'Medicine',
    description: 'Your Medicine modifier.',
  },
  [DiceCommand.NATURE]: {
    title: 'Nature',
    description: 'Your Nature modifier.',
  },
  [DiceCommand.PERCEPTION]: {
    title: 'Perception',
    description: 'Your Perception modifier.',
  },
  [DiceCommand.PERFORMANCE]: {
    title: 'Performance',
    description: 'Your Performance modifier.',
  },
  [DiceCommand.PERSUASION]: {
    title: 'Persuasion',
    description: 'Your Persuasion modifier.',
  },
  [DiceCommand.RELIGION]: {
    title: 'Religion',
    description: 'Your Religion modifier.',
  },
  [DiceCommand.SLEIGHT]: {
    title: 'Sleight of Hand',
    description: 'Your Sleight of Hand modifier.',
  },
  [DiceCommand.STEALTH]: {
    title: 'Stealth',
    description: 'Your Stealth modifier.',
  },
  [DiceCommand.SURVIVAL]: {
    title: 'Survival',
    description: 'Your Survival modifier.',
  },
};

export default FormulaDictionary;
