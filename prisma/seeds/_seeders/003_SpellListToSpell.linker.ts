import { cerr, cinfo, cwarn } from '@/lib/utils/chalkLog';
import SpellListToSpellArr from '../Spells/SpellLists/SpellListToSpell.seed';
import { SpellSeed } from '../Spells/spells.seed';
import { PrismaClient } from '@prisma/client';
import { SpellID } from '@/lib/types/types';

export const linkSpellListToSpell = async (db: PrismaClient) => {
  const ids = SpellSeed.map((s) => s.id).filter((id) => id !== undefined);

  if (!verifySpellList(ids, SpellListToSpellArr)) {
    cerr('Error verifying spell list');
    return;
  }

  //link spells to spell lists
  cinfo('Linking spells to spell lists');
  for (const SpellListToSpell of SpellListToSpellArr) {
    try {
      cinfo('Linking spell to spell list:', SpellListToSpell.spellId);
      await db.spellList.update({
        where: {
          id: SpellListToSpell.spellListId,
        },
        data: {
          Spells: {
            connect: {
              id: SpellListToSpell.spellId,
            },
          },
        },
      });
      cinfo('Spell linked to spell list');
    } catch (error) {
      cerr(
        'Error linking spell to spell list:',
        SpellListToSpell.spellId,
        error
      );
      return;
    }
  }
};

const verifySpellList = (
  spellIds: SpellID[],
  spellListsToSpell: { spellId: SpellID; spellListId: string }[]
) => {
  //verify that all spellIds are in spellListsToSpell
  for (const id of spellIds) {
    if (!spellListsToSpell.find((s) => s.spellId === id)) {
      cwarn('Spell id not found in spellListsToSpell:', id);
      return false;
    }
  }
  return true;
};
