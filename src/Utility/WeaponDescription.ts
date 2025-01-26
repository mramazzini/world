// import { WeaponAttack, WeaponPropertyNames } from '@/lib/types/types';
import { Size } from '@prisma/client';
// import { AbilityToModifier } from './characterStateFunctions/calc/AbilityToModifier';
import { ItemWeaponDataInfo } from '@/lib/types/modelInfo';

const WeaponDescription = (
  weapon: ItemWeaponDataInfo,
  strength: number,
  dexterity: number,
  profBonus: number,
  creatureSize?: Size
) => {
  // const thrown = weapon.Weapon.WeaponPropertyInstance.find(
  //   (prop) => prop.Property.name === WeaponPropertyNames.Thrown
  // );
  // const isFinesse = weapon.Weapon.WeaponPropertyInstance.some(
  //   (prop) => prop.Property.name === WeaponPropertyNames.Finesse
  // );
  // const versatile = weapon.Weapon.WeaponPropertyInstance.find(
  //   (prop) => prop.Property.name === WeaponPropertyNames.Versatile
  // );
  // // const isTwoHanded = weapon.properties.some(
  // //   (prop) => prop.property.name === WeaponPropertyNames.TwoHanded
  // // );
  // // const isAmmunition = weapon.properties.some(
  // //   (prop) => prop.property.name === WeaponPropertyNames.Ammunition
  // // );
  // const hasReach = weapon.Weapon.WeaponPropertyInstance.some(
  //   (prop) => prop.Property.name === WeaponPropertyNames.Reach
  // );
  // const range = weapon.Weapon.WeaponPropertyInstance.find(
  //   (prop) => prop.Property.name === WeaponPropertyNames.Range
  // );
  // // const isSpecial = weapon.properties.some(
  // //   (prop) => prop.property.name === WeaponPropertyNames.Special
  // // );
  // const versatileDamage = versatile?.versatileDamage;
  // const minRange = range?.range?.split('/')[0];
  // const maxRange = range?.range?.split('/')[1];
  // const dexMod = AbilityToModifier(dexterity);
  // const strMod = AbilityToModifier(strength);
  // const sizeMultiplier =
  //   creatureSize === Size.LARGE
  //     ? 2
  //     : creatureSize === Size.HUGE
  //       ? 3
  //       : creatureSize === Size.GARGANTUAN
  //         ? 4
  //         : 1;
  // const attacks: WeaponAttack[] = [];
  // // All ranged attacks are dex based
  // if (weapon.Weapon.isRanged) {
  //   attacks.push({
  //     name: 'Ranged weapon Attack',
  //     description: `+${
  //       dexMod + profBonus
  //     } to hit, range (${minRange}/${maxRange}) ft., one target. Hit: ${weapon.Weapon.damage.map(
  //       (d, index) => {
  //         if (index === weapon.Weapon.damage.length - 1) {
  //           return `${d.formula} + ${dexMod} ${d.type
  //             .toCapitalCase()
  //             .replaceAll('_', ' ')} damage.`;
  //         }
  //         return `${d.formula} + ${dexMod} ${d.type
  //           .toCapitalCase()
  //           .replaceAll('_', ' ')} damage + `;
  //       }
  //     )} `,
  //     attackDiceFormula: `1d20 + ${dexMod + profBonus}`,
  //     damageDiceFormula: `${weapon.Weapon.damage.map((d, index) => {
  //       if (index === weapon.Weapon.damage.length - 1) {
  //         return `${d.formula} + ${dexMod}`;
  //       }
  //       return `${d.formula} + ${dexMod} + `;
  //     })}`,
  //   });
  // } else {
  //   // if finesse, use greater of dex and str
  //   const modifier = isFinesse ? Math.max(dexMod, strMod) : strMod;
  //   attacks.push({
  //     name: 'Melee weapon Attack',
  //     description: `+${modifier + profBonus} to hit, reach ${
  //       hasReach ? '5 ft., 10 ft.' : '5 ft.'
  //     }, one target. Hit: ${weapon.Weapon.damage.map((d, index) => {
  //       const numberOfDice = parseInt(d.formula.split('d')[0]);
  //       const damageDice = parseInt(d.formula.split('d')[1]);
  //       if (index === weapon.Weapon.damage.length - 1) {
  //         return `${numberOfDice * sizeMultiplier}d${
  //           damageDice
  //         } + ${modifier} ${d.type
  //           .toCapitalCase()
  //           .replaceAll('_', ' ')} damage`;
  //       }
  //       return `${numberOfDice * sizeMultiplier}d${
  //         damageDice
  //       } + ${modifier} ${d.type
  //         .toCapitalCase()
  //         .replaceAll('_', ' ')} damage + `;
  //     })}`,
  //     attackDiceFormula: `1d20 + ${modifier + profBonus}`,
  //     damageDiceFormula: `${weapon.Weapon.damage.map((d, index) => {
  //       const numberOfDice = parseInt(d.formula.split('d')[0]);
  //       const damageDice = parseInt(d.formula.split('d')[1]);
  //       if (index === weapon.Weapon.damage.length - 1) {
  //         return `${numberOfDice * sizeMultiplier}d${damageDice} + ${modifier}`;
  //       }
  //       return `${numberOfDice * sizeMultiplier}d${damageDice} + ${modifier} + `;
  //     })}`,
  //   });
  //   // if versatile, add a second description for two handed damage\
  //   if (versatileDamage) {
  //     attacks.push({
  //       name: 'Melee weapon Attack (Two-handed)',
  //       description: `+${modifier + profBonus} to hit, reach ${
  //         hasReach ? '5 ft., 10 ft.' : '5 ft.'
  //       }, one target. Hit: ${
  //         versatileDamage.formula
  //       } + ${modifier} ${versatileDamage.type
  //         .toCapitalCase()
  //         .replaceAll('_', ' ')} damage if used with two hands.`,
  //       attackDiceFormula: `1d20 + ${modifier + profBonus}`,
  //       damageDiceFormula: `${versatileDamage.formula} + ${modifier}`,
  //     });
  //   }
  //   // if thrown, add a second description for thrown range
  //   if (thrown) {
  //     attacks.push({
  //       name: 'Ranged weapon Attack',
  //       description: `+${
  //         modifier + profBonus
  //       } to hit, range (${minRange}/${maxRange}) ft., one target. Hit: ${weapon.Weapon.damage.map(
  //         (d, index) => {
  //           if (index === weapon.Weapon.damage.length - 1) {
  //             return `${d.formula} + ${modifier} ${d.type
  //               .toCapitalCase()
  //               .replaceAll('_', ' ')} damage.`;
  //           }
  //           return `${d.formula} + ${modifier} ${d.type
  //             .toCapitalCase()
  //             .replaceAll('_', ' ')} damage + `;
  //         }
  //       )} `,
  //       attackDiceFormula: `1d20 + ${modifier + profBonus}`,
  //       damageDiceFormula: `${weapon.Weapon.damage.map((d, index) => {
  //         if (index === weapon.Weapon.damage.length - 1) {
  //           return `${d.formula} + ${modifier}`;
  //         }
  //         return `${d.formula} + ${modifier}`;
  //       })}`,
  //     });
  //   }
  // }
  // return attacks;
};

export default WeaponDescription;
