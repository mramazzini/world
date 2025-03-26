'use client';
import { NAVBAR_HEIGHT_REM } from '@/lib/globalVars';
import { toggleSideNav } from '@/store/workshopSlice';
import { useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';
import useWorkshopTab from '@/hooks/useWorkshopTab';
// import useWorkshopFeatures from '@/hooks/useWorkshopFeatures';
// import { useAppSelector } from '@/store/hooks';
import PublishModal from '../PublishModal/PublishModal';
import { SubclassEditorData } from '@/lib/types/workshop';
import Link from 'next/link';
const WorkshopTopNav = () => {
  const dispatch = useDispatch();
  // const itemsToDelete = useAppSelector((state) => state.workshop.itemsToDelete);
  const tab = useWorkshopTab();
  // const features = useWorkshopFeatures();

  const title = useMemo(() => (tab ? tab?.name : "Max's Workshop"), [tab]);

  const subTitle = useMemo(() => {
    const suffix =
      tab?.protocol === 'SUBCLASS' &&
      tab.data &&
      (tab.data as SubclassEditorData).classData
        ? (tab.data as SubclassEditorData).classData?.name.toCapitalCase()
        : '';
    return tab
      ? `${suffix} ${tab?.protocol.toCapitalCase()}`
      : 'Create, edit, and publish your homebrew content';
  }, [tab]);

  const handleSave = useCallback(async () => {
    if (!tab) return;
    // const res = await syncWorkshopItem(tab, features ? features : []);
  }, [tab]);

  return (
    <div
      className="bg-base-300 w-full flex justify-between items-center "
      style={{ height: NAVBAR_HEIGHT_REM + 'rem' }}
    >
      <div className="flex gap-4 p-4 items-center">
        <button
          className="btn btn-ghost h-auto w-auto p-2 "
          onClick={() => {
            dispatch(toggleSideNav());
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>{' '}
        <Link href="/" className="btn btn-ghost">
          Home
        </Link>
        <Link href={'/dashboard'} className="btn btn-ghost">
          Dashboard
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold">{title}</span>{' '}
        <span className="text-xs">{subTitle}</span>
      </div>
      <div className="flex gap-4 p-4 items-center">
        <button
          className="btn btn-ghost"
          onClick={async (e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          Save
        </button>
        <PublishModal />
      </div>
    </div>
  );
};

export default WorkshopTopNav;
