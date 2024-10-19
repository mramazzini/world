import {
  WeaponAttack,
  WeaponInfo,
  WeaponPropertyNames,
} from "@/lib/utils/types/types";
import { Size, Weapon } from "@prisma/client";
import { AbilityToModifier } from "./characterStateFunctions/calc/AbilityToModifier";

const WeaponDescription = (
  weapon: Weapon,
  strength: number,
  dexterity: number,
  profBonus: number,
  creatureSize?: Size
) => {
  const thrown = weapon.properties.find(
    (prop) => prop.property.name === WeaponPropertyNames.Thrown
  );
  const isFinesse = weapon.properties.some(
    (prop) => prop.property.name === WeaponPropertyNames.Finesse
  );
  const versatile = weapon.properties.find(
    (prop) => prop.property.name === WeaponPropertyNames.Versatile
  );
  const isTwoHanded = weapon.properties.some(
    (prop) => prop.property.name === WeaponPropertyNames.TwoHanded
  );
  const isAmmunition = weapon.properties.some(
    (prop) => prop.property.name === WeaponPropertyNames.Ammunition
  );
  const hasReach = weapon.properties.some(
    (prop) => prop.property.name === WeaponPropertyNames.Reach
  );
  const range = weapon.properties.find(
    (prop) => prop.property.name === WeaponPropertyNames.Range
  );
  const isSpecial = weapon.properties.some(
    (prop) => prop.property.name === WeaponPropertyNames.Special
  );
  const versatileDamage = versatile?.versatileDamage;
  const minRange = range?.range;
  const maxRange = range?.maxRange;
  const thrownMinRange = thrown ? thrown?.range : null;
  const thrownMaxRange = thrown ? thrown?.maxRange : null;
  const isRanged = weapon.isRanged;
  const dexMod = AbilityToModifier(dexterity);
  const strMod = AbilityToModifier(strength);
  const sizeMultiplier =
    creatureSize === Size.LARGE
      ? 2
      : creatureSize === Size.HUGE
      ? 3
      : creatureSize === Size.GARGANTUAN
      ? 4
      : 1;

  let attacks: WeaponAttack[] = [];

  // All ranged attacks are dex based
  if (isRanged) {
    attacks.push({
      name: "Ranged weapon Attack",
      description: `+${
        dexMod + profBonus
      } to hit, range (${minRange}/${maxRange}) ft., one target. Hit: ${weapon.damage.map(
        (d, index) => {
          if (index === weapon.damage.length - 1) {
            return `${d.numberOfDice * sizeMultiplier}d${
              d.dice
            } + ${dexMod} ${d.type
              .toCapitalCase()
              .replaceAll("_", " ")} damage.`;
          }

          return `${d.numberOfDice * sizeMultiplier}d${
            d.dice
          } + ${dexMod} ${d.type
            .toCapitalCase()
            .replaceAll("_", " ")} damage + `;
        }
      )} `,
      attackDiceFormula: `1d20 + ${dexMod + profBonus}`,
      damageDiceFormula: `${weapon.damage.map((d, index) => {
        if (index === weapon.damage.length - 1) {
          return `${d.numberOfDice * sizeMultiplier}d${d.dice} + ${dexMod}`;
        }

        return `${d.numberOfDice * sizeMultiplier}d${d.dice} + ${dexMod} + `;
      })}`,
    });
  } else {
    // if finesse, use greater of dex and str
    const modifier = isFinesse ? Math.max(dexMod, strMod) : strMod;
    attacks.push({
      name: "Melee weapon Attack",
      description: `+${modifier + profBonus} to hit, reach ${
        hasReach ? "5 ft., 10 ft." : "5 ft."
      }, one target. Hit: ${weapon.damage.map((d, index) => {
        if (index === weapon.damage.length - 1) {
          return `${d.numberOfDice * sizeMultiplier}d${
            d.dice
          } + ${modifier} ${d.type
            .toCapitalCase()
            .replaceAll("_", " ")} damage`;
        }

        return `${d.numberOfDice * sizeMultiplier}d${
          d.dice
        } + ${modifier} ${d.type
          .toCapitalCase()
          .replaceAll("_", " ")} damage + `;
      })}`,
      attackDiceFormula: `1d20 + ${modifier + profBonus}`,
      damageDiceFormula: `${weapon.damage.map((d, index) => {
        if (index === weapon.damage.length - 1) {
          return `${d.numberOfDice * sizeMultiplier}d${d.dice} + ${modifier}`;
        }

        return `${d.numberOfDice * sizeMultiplier}d${d.dice} + ${modifier} + `;
      })}`,
    });

    // if versatile, add a second description for two handed damage\
    if (versatileDamage) {
      attacks.push({
        name: "Melee weapon Attack (Two-handed)",
        description: `+${modifier + profBonus} to hit, reach ${
          hasReach ? "5 ft., 10 ft." : "5 ft."
        }, one target. Hit: ${versatileDamage.numberOfDice * sizeMultiplier}d${
          versatileDamage.dice
        } + ${modifier} ${versatileDamage.type
          .toCapitalCase()
          .replaceAll("_", " ")} damage if used with two hands.`,
        attackDiceFormula: `1d20 + ${modifier + profBonus}`,
        damageDiceFormula: `${versatileDamage.numberOfDice * sizeMultiplier}d${
          versatileDamage.dice
        } + ${modifier}`,
      });
    }
    // if thrown, add a second description for thrown range
    if (thrown) {
      attacks.push({
        name: "Ranged weapon Attack",
        description: `+${
          modifier + profBonus
        } to hit, range (${thrownMinRange}/${thrownMaxRange}) ft., one target. Hit: ${weapon.damage.map(
          (d, index) => {
            if (index === weapon.damage.length - 1) {
              return `${d.numberOfDice * sizeMultiplier}d${
                d.dice
              } + ${modifier} ${d.type
                .toCapitalCase()
                .replaceAll("_", " ")} damage.`;
            }

            return `${d.numberOfDice * sizeMultiplier}d${
              d.dice
            } + ${modifier} ${d.type
              .toCapitalCase()
              .replaceAll("_", " ")} damage + `;
          }
        )} `,
        attackDiceFormula: `1d20 + ${modifier + profBonus}`,
        damageDiceFormula: `${weapon.damage.map((d, index) => {
          if (index === weapon.damage.length - 1) {
            return `${d.numberOfDice * sizeMultiplier}d${d.dice} + ${modifier}`;
          }

          return `${d.numberOfDice * sizeMultiplier}d${
            d.dice
          } + ${modifier} + `;
        })}`,
      });
    }
  }

  return attacks;
};

export default WeaponDescription;
