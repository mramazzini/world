import Loading from '@/components/UI/Loading';
import SidebarSelector from '@/components/UI/SidebarSelector';
import useQueryWeaponData from '@/hooks/apiHooks/useQueryWeaponData';
import { memoizeGetWeapon } from '@/Utility/Indexed/globalCache';
import { useCallback, useMemo, useState } from 'react';

interface WeaponSelectorProps {
  onSelect: (id: string, name: string) => void;
  disabled?: boolean;
}

const WeaponSelector = ({
  onSelect,
  disabled = false,
}: WeaponSelectorProps) => {
  const { weaponData, loading } = useQueryWeaponData();
  const [show, setShow] = useState(false);

  const filteredData = useMemo(() => {
    return weaponData.map((weapon) => ({
      id: weapon.id,
      name: weapon.name,
    }));
  }, [weaponData]);

  const handleSelect = useCallback(
    async (id: string | null) => {
      if (id) {
        const weapon = await memoizeGetWeapon({
          query: id,
          type: 'id',
        });
        if (weapon) onSelect(id, weapon.name);
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
        Select Weapon
      </button>
      <SidebarSelector
        data={filteredData}
        show={show}
        onSelect={handleSelect}
        description="Pick a weapon"
      />
    </>
  );
};

export default WeaponSelector;
