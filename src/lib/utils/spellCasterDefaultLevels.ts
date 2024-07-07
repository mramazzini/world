import { SpellLevel } from "../types";
export const fullCasterSpellLevels: SpellLevel[] = [
  //Wizards, Clerics, Sorcerers, Bards

  { 1: 2 }, // 1st level
  { 1: 3 }, // 2nd level
  { 1: 4, 2: 2 }, // 3rd level
  { 1: 4, 2: 3 }, // 4th level
  { 1: 4, 2: 3, 3: 2 }, // 5th level
  { 1: 4, 2: 3, 3: 3 }, // 6th level
  { 1: 4, 2: 3, 3: 3, 4: 1 }, // 7th level
  { 1: 4, 2: 3, 3: 3, 4: 2 }, // 8th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 }, // 9th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 }, // 10th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 }, // 11th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 }, // 12th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 }, // 13th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 }, // 14th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 }, // 15th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 }, // 16th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 }, // 17th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 }, // 18th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 }, // 19th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 }, // 20th level
];

export const halfCasterSpellLevels: SpellLevel[] = [
  //Paladins, Rangers (Half-casters)
  {}, // 1st level
  { 1: 2 }, // 2nd level
  { 1: 3 }, // 3rd level
  { 1: 3 }, // 4th level
  { 1: 4, 2: 2 }, // 5th level
  { 1: 4, 2: 2 }, // 6th level
  { 1: 4, 2: 3 }, // 7th level
  { 1: 4, 2: 3 }, // 8th level
  { 1: 4, 2: 3, 3: 2 }, // 9th level
  { 1: 4, 2: 3, 3: 2 }, // 10th level
  { 1: 4, 2: 3, 3: 3 }, // 11th level
  { 1: 4, 2: 3, 3: 3 }, // 12th level
  { 1: 4, 2: 3, 3: 3, 4: 1 }, // 13th level
  { 1: 4, 2: 3, 3: 3, 4: 1 }, // 14th level
  { 1: 4, 2: 3, 3: 3, 4: 2 }, // 15th level
  { 1: 4, 2: 3, 3: 3, 4: 2 }, // 16th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 }, // 17th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 }, // 18th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 }, // 19th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 }, // 20th level
];

export const thirdCasterSpellLevels: SpellLevel[] = [
  //Eldritch Knight, Arcane Trickster (Third-casters)
  {}, // 1st level
  {}, // 2nd level
  { 1: 2 }, // 3rd level
  { 1: 3 }, // 4th level
  { 1: 3 }, // 5th level
  { 1: 4, 2: 2 }, // 6th level
  { 1: 4, 2: 2 }, // 7th level
  { 1: 4, 2: 3 }, // 8th level
  { 1: 4, 2: 3 }, // 9th level
  { 1: 4, 2: 3, 3: 2 }, // 10th level
  { 1: 4, 2: 3, 3: 2 }, // 11th level
  { 1: 4, 2: 3, 3: 3 }, // 12th level
  { 1: 4, 2: 3, 3: 3 }, // 13th level
  { 1: 4, 2: 3, 3: 3, 4: 1 }, // 14th level
  { 1: 4, 2: 3, 3: 3, 4: 1 }, // 15th level
  { 1: 4, 2: 3, 3: 3, 4: 2 }, // 16th level
  { 1: 4, 2: 3, 3: 3, 4: 2 }, // 17th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 }, // 18th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 }, // 19th level
  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 }, // 20th level
];
