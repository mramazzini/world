import { ClassInfo } from '@/lib/types/modelInfo';
import { ClassID, Level } from '@/lib/types/types';
import { memoizeGetClass } from '@/Utility/Indexed/globalCache';
import SpellCastingToSpellSlots from '@/Utility/SpellCastingToSpellSlots';
import { useCallback, useEffect, useMemo, useState } from 'react';
const useClassSpellSlots = (classId: ClassID) => {
  const [loading, setLoading] = useState(true);
  const [classInfo, setClassInfo] = useState<ClassInfo | null>(null);

  useEffect(() => {
    const fetchClassInfo = async () => {
      setLoading(true);
      const data = await memoizeGetClass({
        type: 'id',
        query: classId,
      });
      setClassInfo(data);
      setLoading(false);
    };

    fetchClassInfo();
  }, [classId]);

  const spellSlotsByLevel = useCallback(
    (level: Level) => {
      if (!classInfo?.SpellCasting) return {};
      return SpellCastingToSpellSlots(classInfo.SpellCasting, level);
    },
    [classInfo]
  );

  const spellSlots: PrismaJson.SpellLevels = useMemo(() => {
    const spellSlots: PrismaJson.SpellLevels = {};
    for (let i = 1; i <= 20; i++) {
      spellSlots[i as Level] = spellSlotsByLevel(i as Level);
    }
    return spellSlots;
  }, [spellSlotsByLevel]);

  return { spellSlots, loading };
};

export default useClassSpellSlots;
