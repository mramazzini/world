import { useCallback } from 'react';
import useModifier from './useModifier';
import { useAppSelector } from '@/store/hooks';
interface RollDetail {
  diceType: number;
  rolled: number[];
}

export enum DiceCommand {
  STR = 'STR',
  DEX = 'DEX',
  CON = 'CON',
  INT = 'INT',
  WIS = 'WIS',
  CHA = 'CHA',
  PROF = 'PROF', // Proficiency
  SPA = 'SPA', //Spell Attack
  SDC = 'SDC', //Spell DC
  INIT = 'INIT', //Initiative
  AC = 'AC', //Armor Class
  ACROBATICS = 'ACROBATICS',
  ANIMAL = 'ANIMAL_HANDLING',
  ARCANA = 'ARCANA',
  ATHLETICS = 'ATHLETICS',
  DECEPTION = 'DECEPTION',
  HISTORY = 'HISTORY',
  INSIGHT = 'INSIGHT',
  INTIMIDATION = 'INTIMIDATION',
  INVESTIGATION = 'INVESTIGATION',
  MEDICINE = 'MEDICINE',
  NATURE = 'NATURE',
  PERCEPTION = 'PERCEPTION',
  PERFORMANCE = 'PERFORMANCE',
  PERSUASION = 'PERSUASION',
  RELIGION = 'RELIGION',
  SLEIGHT = 'SLEIGHT_OF_HAND',
  STEALTH = 'STEALTH',
  SURVIVAL = 'SURVIVAL',
}

const useDiceRoller = () => {
  const { getAbilityModifier, getSkillModifier } = useModifier();
  const {
    proficiencyBonus,
    armorClass,
    initiative,
    spellAttackBonus,
    spellSaveDC,
  } = useAppSelector((state) => state.sheet);

  const getDiceCommandValue = useCallback(
    (command: DiceCommand) => {
      switch (command) {
        case DiceCommand.DEX:
        case DiceCommand.STR:
        case DiceCommand.CON:
        case DiceCommand.WIS:
        case DiceCommand.CHA:
        case DiceCommand.INT:
          return getAbilityModifier(command);
        case DiceCommand.PROF:
          return proficiencyBonus;
        case DiceCommand.SPA:
          return spellAttackBonus;
        case DiceCommand.SDC:
          return spellSaveDC;
        case DiceCommand.INIT:
          return initiative;
        case DiceCommand.AC:
          return armorClass;
        default:
          return getSkillModifier(command);
      }
    },
    [
      getAbilityModifier,
      getSkillModifier,
      proficiencyBonus,
      spellAttackBonus,
      spellSaveDC,
      armorClass,
      initiative,
    ]
  );

  const getTokensFromFormula = useCallback(
    async (formula: string) => {
      const diceCommandValues = Object.values(DiceCommand);
      const regex = new RegExp(`\\b(${diceCommandValues.join('|')})\\b`, 'g');

      let match;
      const result: { text: string; value?: number }[] = [];
      let lastIndex = 0;

      while ((match = regex.exec(formula)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          result.push({ text: formula.slice(lastIndex, match.index) });
        }

        // Add the matched word with its value
        const command = match[0];
        result.push({
          text: command,
          value: getDiceCommandValue(command as DiceCommand),
        });

        // Update last index
        lastIndex = regex.lastIndex;
      }

      // Add remaining text after the last match
      if (lastIndex < formula.length) {
        result.push({ text: formula.slice(lastIndex) });
      }

      return result;
    },
    [getDiceCommandValue]
  );

  const rollDice = useCallback(
    (
      diceStr: string
    ): {
      total: number;
      rolls: number[];
      diceType: number;
    } => {
      const [count, sides] = diceStr.split('d').map(Number);

      // Enforce the maximum number of dice rolls
      if (count > 100) {
        throw new Error('Cannot roll more than 100 dice at a time.');
      }

      const rolls: number[] = [];
      let total = 0;
      for (let i = 0; i < count; i++) {
        const roll = Math.floor(Math.random() * sides) + 1;
        rolls.push(roll);
        total += roll;
      }
      return { total, rolls, diceType: sides };
    },
    []
  );

  const rollFormula = useCallback(
    async (formula: string) => {
      const dicePattern = /(\d+)d(\d+)/g;
      let total = 0;
      const rollsDetails: RollDetail[] = [];

      // Replace all dice rolls with their rolled value
      formula = formula.replace(dicePattern, (match, countStr, sidesStr) => {
        const count = parseInt(countStr);

        // Ensure no more than 50 dice are rolled
        if (count > 100) {
          throw new Error('Cannot roll more than 100 dice at a time.');
        }

        const { total: diceTotal, rolls, diceType } = rollDice(match);
        rollsDetails.push({ diceType, rolled: rolls });
        return diceTotal.toString(); // Replace with the rolled total for this dice set
      });

      // Replace all dice commands with their values
      const tokens = await getTokensFromFormula(formula);
      tokens.forEach((token) => {
        if (token.value !== undefined) {
          formula = formula.replace(token.text, token.value.toString());
        }
      });

      // Now evaluate the modified formula (with dice totals replaced)
      formula = formula.replaceAll('min', 'Math.min');
      formula = formula.replaceAll('max', 'Math.max');
      formula = formula.replaceAll('Max', 'Math.max');
      formula = formula.replaceAll('Min', 'Math.min');
      try {
        total = eval(formula); // eval is used here to calculate the total, but handle with care
      } catch (error) {
        console.error(error);
        return {
          total: 0,
          rolls: [],
          status: 'error',
        };
      }

      // Return the result object
      return {
        total,
        rolls: rollsDetails,
        status: 'success',
      };
    },
    [rollDice, getTokensFromFormula]
  );
  return { rollDice, rollFormula, getDiceCommandValue, getTokensFromFormula };
};

export default useDiceRoller;
