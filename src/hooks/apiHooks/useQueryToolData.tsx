import { getTools } from '@/lib/actions/db/tool/read.actions';
import { ToolInfo } from '@/lib/types/modelInfo';
import { getFromDb, putInDb } from '@/Utility/Indexed/indexedDB';
import { useEffect, useState } from 'react';

const TOOL_DATA_KEY = 'toolData';

const useQueryToolData = () => {
  const [loading, setLoading] = useState(true);
  const [toolData, setToolData] = useState<ToolInfo[]>([]);

  useEffect(() => {
    const fetchToolData = async () => {
      try {
        // Check if data is already stored in the database
        const cachedData = await getFromDb(TOOL_DATA_KEY);

        if (cachedData) {
          // Use cached data if available
          setToolData(cachedData as ToolInfo[]);
          setLoading(false);
        } else {
          // Fetch from external source if no cached data
          const data = await getTools();
          setToolData(data);
          setLoading(false);

          // Store fetched data in the database for future use
          await putInDb(TOOL_DATA_KEY, data);
        }
      } catch (error) {
        console.error('Failed to fetch or store tool data:', error);
        setLoading(false);
      }
    };

    fetchToolData();
  }, []);

  return { toolData, loading };
};

export default useQueryToolData;
