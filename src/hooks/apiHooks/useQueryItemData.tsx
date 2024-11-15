import { getItemsMetadata } from '@/lib/actions/db/item/read.actions';
import { DBMetadata } from '@/lib/types/metadata';
import { getFromDb, putInDb } from '@/Utility/Indexed/indexedDB';
import { useCallback, useEffect, useState } from 'react';

const item_DATA_KEY = 'itemMetaData';

const useQueryItemMetaData = () => {
  const [loading, setLoading] = useState(true);
  const [itemMetaData, setItemMetaData] = useState<DBMetadata[]>([]);

  const refetch = useCallback(async () => {
    setLoading(true);
    const data = await getItemsMetadata();
    setItemMetaData(data);
    setLoading(false);
    await putInDb(item_DATA_KEY, data);

    return itemMetaData;
  }, [itemMetaData]);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        // Attempt to get cached data from IndexedDB
        const cachedData = await getFromDb(item_DATA_KEY);

        if (cachedData) {
          // If cached data is found, use it
          setItemMetaData(cachedData as DBMetadata[]);
          setLoading(false);
        } else {
          // If no cached data, fetch from external source
          // Cache the fetched data for future use
          const data = await getItemsMetadata();
          setItemMetaData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch or store item data:', error);
        setLoading(false);
      }
    };

    fetchItemData();
  }, []);

  return { itemMetaData, loading, refetch };
};

export default useQueryItemMetaData;
