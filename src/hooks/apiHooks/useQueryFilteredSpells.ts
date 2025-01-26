import { getSpellsFromGroup } from '@/lib/actions/db/spell/read.actions';
import { SpellInfo } from '@/lib/types/modelInfo';
import { useEffect, useState } from 'react';

const useQuerySpellsFromGroup = ({
  spellLevels,
  spellListIds,
}: {
  spellListIds: string[];
  spellLevels: number[];
}) => {
  const [loading, setLoading] = useState(true);
  const [spells, setSpells] = useState<SpellInfo[]>([]);

  useEffect(() => {
    const fetchSpells = async () => {
      setLoading(true);
      const data = await getSpellsFromGroup({
        spellListIds,
        spellLevels,
      });
      setSpells(data);
      setLoading(false);
    };

    fetchSpells();
  }, [spellListIds, spellLevels]);

  const refetch = async () => {
    setLoading(true);
    const data = await getSpellsFromGroup({
      spellListIds,
      spellLevels,
    });
    setSpells(data);
    setLoading(false);
  };

  return { spells, loading, refetch };
};

export default useQuerySpellsFromGroup;
