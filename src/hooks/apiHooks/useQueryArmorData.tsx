import { getArmors } from '@/lib/actions/db/armor/read.actions';
import { ArmorInfo } from '@/lib/types/modelInfo';
import { getFromDb, putInDb } from '@/Utility/Indexed/indexedDB';
import { useEffect, useState } from 'react';

const ARMOR_DATA_KEY = 'armorData';

const useQueryArmorData = () => {
  const [loading, setLoading] = useState(true);
  const [armorData, setArmorData] = useState<ArmorInfo[]>([]);

  useEffect(() => {
    const fetchArmorData = async () => {
      try {
        // Attempt to get cached data from IndexedDB
        const cachedData = await getFromDb(ARMOR_DATA_KEY);

        if (cachedData) {
          // If cached data is found, use it
          setArmorData(cachedData as ArmorInfo[]);
          setLoading(false);
        } else {
          // If no cached data, fetch from external source
          const data = await getArmors();
          setArmorData(data);
          setLoading(false);

          // Cache the fetched data for future use
          await putInDb(ARMOR_DATA_KEY, data);
        }
      } catch (error) {
        console.error('Failed to fetch or store armor data:', error);
        setLoading(false);
      }
    };

    fetchArmorData();
  }, []);

  return { armorData, loading };
};

export default useQueryArmorData;
