import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

const useWorkshopTab = (parent = false) => {
  const selectedTab = useAppSelector((state) => state.workshop.selectedTab);
  const workshopItems = useAppSelector((state) => state.workshop.workshopItems);

  const selectedTabData = useMemo(() => {
    if (!selectedTab) return null;

    if (parent) {
      const parentTab = workshopItems[selectedTab].parentId;
      if (parentTab) {
        return workshopItems[parentTab];
      }
    }
    return workshopItems[selectedTab];
  }, [workshopItems, selectedTab, parent]);

  return selectedTabData;
};

export default useWorkshopTab;
