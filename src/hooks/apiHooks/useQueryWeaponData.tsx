import { getWeapons } from '@/lib/actions/db/weapons/read.actions';
import { WeaponInfo } from '@/lib/types/modelInfo';
import { getFromDb, putInDb } from '@/Utility/Indexed/indexedDB';
import { useEffect, useState } from 'react';

const WEAPON_DATA_KEY = 'weaponData';

const useQueryWeaponData = () => {
  const [loading, setLoading] = useState(true);
  const [weaponData, setWeaponData] = useState<WeaponInfo[]>([]);

  useEffect(() => {
    const fetchWeaponData = async () => {
      try {
        const cachedData = await getFromDb(WEAPON_DATA_KEY);

        if (cachedData) {
          setWeaponData(cachedData as WeaponInfo[]);
          setLoading(false);
        } else {
          const data = await getWeapons();
          setWeaponData(data);
          setLoading(false);

          await putInDb(WEAPON_DATA_KEY, data);
        }
      } catch (error) {
        console.error('Failed to fetch or store weapon data:', error);
        setLoading(false);
      }
    };

    fetchWeaponData();
  }, []);

  return { weaponData, loading };
};

export default useQueryWeaponData;
