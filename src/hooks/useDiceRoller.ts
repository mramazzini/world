import { useCallback } from 'react';
interface RollDetail {
  diceType: number;
  rolled: number[];
}
const useDiceRoller = () => {
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
    (formula: string) => {
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

      // Now evaluate the modified formula (with dice totals replaced)
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
    [rollDice]
  );
  return { rollDice, rollFormula };
};

export default useDiceRoller;
