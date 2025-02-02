import { getItemsByWeaponGroup } from '@/lib/actions/db/item/read.actions';
import { ItemInfo } from '@/lib/types/modelInfo';
import { getFromDb, putInDb } from '@/Utility/Indexed/indexedDB';
import { WeaponGroup } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';

const item_grouped_DATA_KEY = 'itemWeaponGroupData';

const useQueryItemWeaponGroup = (group: WeaponGroup) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<ItemInfo[]>([]);

  const refetch = useCallback(async () => {
    setLoading(true);
    const data = await getItemsByWeaponGroup(group);
    setItems(data);
    setLoading(false);
    await putInDb(item_grouped_DATA_KEY + '-' + group, data);
    return items;
  }, [items, group]);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const cachedData = await getFromDb(item_grouped_DATA_KEY + '-' + group);

        if (cachedData) {
          setItems(cachedData as ItemInfo[]);
          setLoading(false);
        } else {
          const data = await getItemsByWeaponGroup(group);
          setItems(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch or store item data:', error);
        setLoading(false);
      }
    };

    fetchItemData();
  }, [group]);

  return { loading, items, refetch };
};

export default useQueryItemWeaponGroup;
