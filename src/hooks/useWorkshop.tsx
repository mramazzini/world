import {
  getWorkshopData,
  putWorkshopData,
} from '@/Utility/Indexed/Workshop/WorkshopDB';
import { useCallback, useEffect, useState } from 'react';

export function useWorkshop(id: string) {
  const [workshopState, setWorkshopState] =
    useState<PrismaJson.WorkshopItemData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Retrieve the workshop state from IndexedDB on initial load
  const loadWorkshopState = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getWorkshopData(id);
      if (data) setWorkshopState(data as PrismaJson.WorkshopItemData);
    } catch (err) {
      console.error('Error loading workshop data:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  // Store the workshop state in IndexedDB
  const saveWorkshopState = useCallback(
    async (state: PrismaJson.WorkshopItemData) => {
      try {
        await putWorkshopData(id, state);
      } catch (err) {
        console.error('Error saving workshop data:', err);
        setError(err as Error);
      }
    },
    [id]
  );

  // Update state locally and store it in IndexedDB
  const updateWorkshopState = (
    update: Partial<PrismaJson.WorkshopItemData>
  ) => {
    setWorkshopState((prevState) => {
      const newState = {
        ...prevState,
        ...update,
      } as PrismaJson.WorkshopItemData;
      saveWorkshopState(newState);
      return newState;
    });
  };

  useEffect(() => {
    loadWorkshopState();
  }, [loadWorkshopState]);

  return {
    workshopState,
    loading,
    error,
    updateWorkshopState,
  };
}
