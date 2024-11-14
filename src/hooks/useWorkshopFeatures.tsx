import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

// Returns the features of the selected tab, or the features of the parent tab if the selected tab has one.
const useWorkshopFeatures = () => {
  const selectedTab = useAppSelector((state) => state.workshop.selectedTab);

  const workshopItems = useAppSelector((state) => state.workshop.workshopItems);

  const features = useMemo(() => {
    if (!selectedTab) return null;

    const tab = workshopItems[selectedTab].parentId
      ? workshopItems[selectedTab].parentId
      : selectedTab;

    return Object.values(workshopItems)
      .map((value) => {
        if (value.parentId === tab) {
          return value;
        }
      })
      .filter((value) => value !== undefined);
  }, [workshopItems, selectedTab]);

  return features;
};

export default useWorkshopFeatures;
