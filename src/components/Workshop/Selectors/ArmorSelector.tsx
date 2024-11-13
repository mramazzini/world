import Loading from '@/components/UI/Loading';
import SidebarSelector from '@/components/UI/SidebarSelector';
import useQueryArmorData from '@/hooks/apiHooks/useQueryArmorData';
import { memoizeGetArmor } from '@/Utility/Indexed/globalCache';
import { useCallback, useMemo, useState } from 'react';

interface ArmorSelectorProps {
  onSelect: (id: string, name: string) => void;
  disabled?: boolean;
}

const ArmorSelector = ({ onSelect, disabled = false }: ArmorSelectorProps) => {
  const { armorData, loading } = useQueryArmorData();
  const [show, setShow] = useState(false);

  const filteredData = useMemo(() => {
    return armorData.map((armor) => ({
      id: armor.id,
      name: armor.name,
    }));
  }, [armorData]);

  const handleSelect = useCallback(
    async (id: string | null) => {
      if (id) {
        const armor = await memoizeGetArmor({
          query: id,
          type: 'id',
        });
        if (armor) onSelect(armor.id, armor.name);
      }
      setShow(false);
    },
    [onSelect]
  );

  if (loading) return <Loading />;

  return (
    <>
      <button
        disabled={disabled}
        className={`btn btn-ghost border-gray-500`}
        onClick={() => setShow(true)}
      >
        Select Armor
      </button>
      <SidebarSelector
        data={filteredData}
        show={show}
        onSelect={handleSelect}
        description="Pick a armor"
      />
    </>
  );
};

export default ArmorSelector;
