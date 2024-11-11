import {
  setWorkshopEditorData,
  updateWorkshopEditorData,
} from '@/store/workshopSlice';
import { useCallback, useEffect, useMemo } from 'react';
import useWorkshopTab from './useWorkshopTab';
import { useAppDispatch } from '@/store/hooks';
import { WorkshopItemEditorData } from '@/lib/types/workshop';

function useWorkshopEditor<T extends WorkshopItemEditorData>(
  initialValue: T
): {
  data: T;
  updateData: (data: Partial<T>) => void;
} {
  const dispatch = useAppDispatch();
  const tab = useWorkshopTab();
  const initialized = useMemo(() => {
    return tab?.data !== undefined;
  }, [tab]);

  const data = useMemo(() => {
    if (!tab) return null;
    if (!tab.data) return null;

    return tab.data as T;
  }, [tab]);

  useEffect(() => {
    if (!tab?.id) return;

    if (!initialized) {
      dispatch(
        setWorkshopEditorData({
          id: tab.id,
          data: initialValue,
        })
      );
    }
  }, [tab, initialValue, dispatch, initialized]);

  const updateData = useCallback(
    (data: Partial<T>) => {
      if (!tab?.id) return;
      dispatch(updateWorkshopEditorData({ id: tab?.id, data: data }));
    },
    [tab, dispatch]
  );

  return {
    data: data as T,
    updateData,
  };
}

export default useWorkshopEditor;
