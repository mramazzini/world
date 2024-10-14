import {
  CommandInteraction,
  Client,
  ApplicationCommandOptionType,
} from "discord.js";
import { Command } from "../command";

interface RollDetail {
  diceType: number;
  rolled: number[];
}

interface ParseResult {
  total: number;
  rolls: RollDetail[];
}

function rollDice(diceStr: string): {
  total: number;
  rolls: number[];
  diceType: number;
} {
  const [count, sides] = diceStr.split("d").map(Number);

  // Enforce the maximum number of dice rolls
  if (count > 100) {
    throw new Error("Cannot roll more than 100 dice at a time.");
  }

  let rolls: number[] = [];
  let total = 0;
  for (let i = 0; i < count; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    rolls.push(roll);
    total += roll;
  }
  return { total, rolls, diceType: sides };
}

// Main parser function with TypeScript types and max roll protection
function parseFormula(formula: string): ParseResult {
  const dicePattern = /(\d+)d(\d+)/g;
  let total = 0;
  let rollsDetails: RollDetail[] = [];

  // Replace all dice rolls with their rolled value
  formula = formula.replace(dicePattern, (match, countStr, sidesStr) => {
    const count = parseInt(countStr);
    const sides = parseInt(sidesStr);

    // Ensure no more than 50 dice are rolled
    if (count > 100) {
      throw new Error("Cannot roll more than 100 dice at a time.");
    }

    const { total: diceTotal, rolls, diceType } = rollDice(match);
    rollsDetails.push({ diceType, rolled: rolls });
    return diceTotal.toString(); // Replace with the rolled total for this dice set
  });

  // Now evaluate the modified formula (with dice totals replaced)
  try {
    total = eval(formula); // eval is used here to calculate the total, but handle with care
  } catch (error) {
    throw new Error("Invalid formula");
  }

  // Return the result object
  return {
    total,
    rolls: rollsDetails,
  };
}

export const Roll: Command = {
  name: "roll",
  description: "Takes a given dice formula and rolls it",
  options: [
    {
      name: "formula",
      description: "The dice formula to roll",
      type: ApplicationCommandOptionType.String,
    },
  ],
  run: async (client: Client, interaction: CommandInteraction) => {
    const formula = interaction.options.get("formula")?.value as string;

    const tokens = formula.split("");
    try {
      const rollResults = parseFormula(formula);
      const content = `> Rolled **${formula}**:
    > Total: **${rollResults.total}**
    > 
    > ${rollResults.rolls
      .map((roll) => {
        return `- d${roll.diceType}: **${roll.rolled.join(
          ", "
        )}** = **${roll.rolled.reduce((a, b) => a + b, 0)}**`;
      })
      .join("\n> ")} 
    `;
      await interaction.followUp({
        ephemeral: true,
        content,
      });
    } catch (error) {
      await interaction.followUp({
        ephemeral: true,
        content: `Cannot roll more than 100 dice at a time.`,
      });
    }
  },
};
