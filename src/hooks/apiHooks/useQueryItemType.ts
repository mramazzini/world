import { getItemsByType } from '@/lib/actions/db/item/read.actions';
import { ItemInfo } from '@/lib/types/modelInfo';
import { getFromDb, putInDb } from '@/Utility/Indexed/indexedDB';
import { ItemTypes } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';

const item_grouped_DATA_KEY = 'itemGroupedData';

const useItemTypeQuery = (type: ItemTypes) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<ItemInfo[]>([]);

  const refetch = useCallback(async () => {
    setLoading(true);
    const data = await getItemsByType(type);
    setItems(data);
    setLoading(false);
    await putInDb(item_grouped_DATA_KEY, data);
    return items;
  }, [items, type]);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const cachedData = await getFromDb(item_grouped_DATA_KEY);

        if (cachedData) {
          setItems(cachedData as ItemInfo[]);
          setLoading(false);
        } else {
          const data = await getItemsByType(type);
          setItems(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch or store item data:', error);
        setLoading(false);
      }
    };

    fetchItemData();
  }, [type]);

  return { loading, items, refetch };
};

export default useItemTypeQuery;
