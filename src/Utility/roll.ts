export const roll = (num: number, die: number, plus: number = 0): number => {
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += Math.floor(Math.random() * die) + 1;
  }
  return total + plus;
};

function rollDice(diceStr: string) {
  const [count, sides] = diceStr.split('d').map(Number);
  // Enforce the maximum number of dice rolls
  if (count > 100) {
    throw new Error('Cannot roll more than 100 dice at a time.');
  }
  const rolls = [];
  let total = 0;
  for (let i = 0; i < count; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    rolls.push(roll);
    total += roll;
  }
  return { total, rolls, diceType: sides };
}
// Main parser function with TypeScript types and max roll protection
export function rollFromFormula(formula: string) {
  const dicePattern = /(\d+)d(\d+)/g;
  let total = 0;
  const rollsDetails: {
    diceType: number;
    rolled: number[];
  }[] = [];
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
  } catch (e) {
    console.error(formula, e);
    throw new Error('Invalid formula');
  }
  // Return the result object
  return {
    total,
    rolls: rollsDetails,
  };
}
