import { Level } from '@/lib/types/types';
import { fullCaster } from '@/lib/utils/SpellSlotsUtil';
import { CasterPower, SpellCasting } from '@prisma/client';

const SpellCastingToSpellSlots = (
  spellCasting: SpellCasting,
  level: Level
): PrismaJson.SpellSlots => {
  switch (spellCasting.casterPower) {
    case CasterPower.FULL:
      return fullCaster[level] || {};
    case CasterPower.HALF_ROUNDED_DOWN:
      return fullCaster[Math.floor(level / 2) as Level] || {};
    case CasterPower.HALF_ROUNDED_UP:
      return fullCaster[Math.ceil(level / 2) as Level] || {};
    case CasterPower.THIRD_ROUNDED_DOWN:
      return fullCaster[Math.floor(level / 3) as Level] || {};
    case CasterPower.THIRD_ROUNDED_UP:
      return fullCaster[Math.ceil(level / 3) as Level] || {};
    case CasterPower.CUSTOM:
      if (!spellCasting.customCasterSpellLevels) return {};
      return spellCasting.customCasterSpellLevels[level] || {};
    default:
      return {};
  }
};

export default SpellCastingToSpellSlots;
