'use client';

import LocalSyncer from '@/components/Workshop/LocalSyncer/LocalSyncer';
import WorkshopContainer from '@/components/Workshop/WorkshopContainer/WorkshopContainer';
import WorkshopContextMenu from '@/components/Workshop/WorkshopContextMenu/SidenavContextMenu';
import WorkshopSideNav from '@/components/Workshop/WorkshopSideNav/WorkshopSideNav';
import WorkshopTopNav from '@/components/Workshop/WorkshopTopNav/WorkshopTopNav';

import {
  setHasPageMaxWidth,
  setShowFooter,
  setShowNav,
} from '@/store/layoutSlice';
import { setWorkshopItems } from '@/store/workshopSlice';
import {
  clearWorkshopData,
  getLatestWorkshopItems,
} from '@/Utility/Indexed/Workshop/WorkshopDB';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const WorkshopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowNav(false));
    dispatch(setShowFooter(false));
    dispatch(setHasPageMaxWidth(false));

    return () => {
      dispatch(setShowNav(true));
      dispatch(setShowFooter(false));
      dispatch(setHasPageMaxWidth(true));
    };
  }, [dispatch]);

  useEffect(() => {
    getLatestWorkshopItems().then((data) => {
      console.log(data);
      dispatch(setWorkshopItems({ items: data }));
    });
  }, [dispatch]);

  return (
    <main className="w-screen h-screen bg-base-100 flex flex-col relative overflow-hidden">
      <WorkshopContextMenu />
      <WorkshopTopNav />
      <div className="flex flex-row  w-full  h-full">
        <WorkshopSideNav />
        <WorkshopContainer />
      </div>
      <LocalSyncer />
      <button className="btn" onClick={() => clearWorkshopData()}>
        Clear DB
      </button>
    </main>
  );
};

export default WorkshopPage;
