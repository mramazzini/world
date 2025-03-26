import { cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
// import verifyTableIntegrity from '@/lib/utils/verifyTableIntegrity';
// import { createSlug } from '../_helpers/createSlug';

export const createSpells = async (db: PrismaClient) => {
  cinfo('Creating spells');
  // for (const Spell of SpellSeed) {
  //   try {
  //     cinfo('Creating spell:', Spell.name);
  //     if (!verifySpell(Spell)) {
  //       cerr('Error verifying spell:', Spell.name);
  //       throw new Error('Error creating spell');
  //     }
  //     await db.spell.upsert({
  //       where: {
  //         id: Spell.id,
  //       },
  //       update: {
  //         ...Spell,
  //         slug: createSlug(Spell.name),
  //       },
  //       create: {
  //         ...Spell,
  //         slug: createSlug(Spell.name),
  //       },
  //     });
  //     cinfo('Spell created');
  //   } catch (error) {
  //     cerr('Error creating spell:', Spell.name, error);
  //     throw new Error('Error creating spell');
  //   }
  // }
  cinfo('Spells created');
};

// const verifySpell = (spell: Prisma.SpellCreateManyInput) => {
//   //since the spells were scraped we need to verify the data is good
//   if (!spell.name) {
//     cwarn('Spell missing name field:', spell);
//     return false;
//   }

//   if (!spell.school) {
//     cwarn('Spell missing school field:', spell);
//     return false;
//   }
//   if (!spell.castingTime) {
//     cwarn('Spell missing castingTime field:', spell);
//     return false;
//   }
//   if (!spell.range) {
//     cwarn('Spell missing range field:', spell);
//     return false;
//   }
//   if (!spell.duration) {
//     cwarn('Spell missing duration field:', spell);
//     return false;
//   }
//   if (!spell.description) {
//     cwarn('Spell missing description field:', spell);
//     return false;
//   }
//   if (!spell.source) {
//     cwarn('Spell missing source field:', spell);
//     return false;
//   }
//   if (spell.extendedTable) {
//     if (!verifyTableIntegrity(spell.extendedTable as PrismaJson.Table[])) {
//       cwarn('Spell extended table failed integrity check:', spell);
//       return false;
//     }
//   }
//   return true;
// };
