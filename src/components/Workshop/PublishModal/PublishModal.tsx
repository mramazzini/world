'use client';

import ConfirmModal from '@/components/Modals/ConfirmModal';
import ModalButton from '@/components/UI/Modal/ModalButton';
import useModal from '@/hooks/useModal';
import useWorkshopFeatures from '@/hooks/useWorkshopFeatures';
import useWorkshopTab from '@/hooks/useWorkshopTab';
import { publishWorkshopItem } from '@/lib/actions/db/general/create.actions';
import { syncWorkshopItem } from '@/lib/actions/db/workshop/create.actions';
import { useAppDispatch } from '@/store/hooks';
import { updateLastSyncedISOString } from '@/store/workshopSlice';
import { useCallback } from 'react';

const PublishModal = () => {
  const dispatch = useAppDispatch();
  const { id: modalId } = useModal();
  const tab = useWorkshopTab(true);
  const features = useWorkshopFeatures();

  const handlePublish = useCallback(async () => {
    if (!tab?.data) return;
    const syncRes = await syncWorkshopItem(tab, features ? features : []);
    if (syncRes?.some((res) => res.status === 'failed')) return;
    dispatch(
      updateLastSyncedISOString({
        id: tab.id,
        lastSyncedISOString: new Date().toISOString(),
      })
    );
    const res = await publishWorkshopItem(tab, features ? features : []);
    console.log(res);
  }, [tab, features, dispatch]);

  if (!tab)
    return (
      <button className="btn btn-primary" disabled>
        Publish
      </button>
    );

  return (
    <>
      <ModalButton
        modalid={modalId}
        modaltype="open"
        className="btn btn-primary"
      >
        Publish
      </ModalButton>
      <ConfirmModal id={modalId} onConfirm={handlePublish}>
        <p className="text-lg font-bold">
          You are publishing the {tab.protocol.toCapitalCase()}:{' '}
          <span className="text-primary">{tab.name}</span>
        </p>
        <p className="text-lg">With the following features:</p>
        <ul className="list-disc pl-4">
          {features?.map((feature) => <li key={feature.id}>{feature.name}</li>)}
        </ul>
        <div className="divider"></div>
        <p className="text-lg font-bold">
          Are you sure you want to publish this item?
        </p>
        <div className="divider"></div>
      </ConfirmModal>
    </>
  );
};

export default PublishModal;
