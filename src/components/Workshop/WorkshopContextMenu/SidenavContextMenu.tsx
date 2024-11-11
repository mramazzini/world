'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  closeContextMenu,
  createWorkshopFeature,
  deleteLocalWorkshopItem,
} from '@/store/workshopSlice';
import { useEffect, useMemo } from 'react';
import { v4 } from 'uuid';
const WorkshopContextMenu = () => {
  const dispatch = useAppDispatch();
  const contextMenuTab = useAppSelector(
    (state) => state.workshop.contextMenuTab
  );
  const workshopItems = useAppSelector((state) => state.workshop.workshopItems);

  const isVisible = useAppSelector(
    (state) => state.workshop.contextMenuVisible
  );
  const position = useAppSelector(
    (state) => state.workshop.contextMenuPosition
  );
  const item = useMemo(() => {
    return workshopItems[contextMenuTab];
  }, [contextMenuTab, workshopItems]);

  useEffect(() => {
    const handleClick = () => {
      dispatch(closeContextMenu());
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [dispatch]);

  return (
    <ul
      className="menu bg-neutral rounded-box w-56 z-50 shadow-lg border border-base-300"
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      {item?.protocol !== 'FEATURE' && (
        <li>
          <a
            className=""
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                dispatch(
                  createWorkshopFeature({
                    id: v4(),
                    parentId: contextMenuTab,
                    lastEditISOString: new Date().toISOString(),
                  })
                );
                dispatch(closeContextMenu());
              }
            }}
            onClick={() => {
              dispatch(
                createWorkshopFeature({
                  id: v4(),
                  parentId: contextMenuTab,
                  lastEditISOString: new Date().toISOString(),
                })
              );
              dispatch(closeContextMenu());
            }}
          >
            Create Feature
          </a>
        </li>
      )}

      <li>
        <a
          className="btn btn-error btn-sm"
          onClick={() => {
            dispatch(closeContextMenu());
            console.log(contextMenuTab);
            if (contextMenuTab)
              dispatch(deleteLocalWorkshopItem(contextMenuTab));
          }}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              dispatch(closeContextMenu());
              if (contextMenuTab)
                dispatch(deleteLocalWorkshopItem(contextMenuTab));
            }
          }}
        >
          Delete
        </a>
      </li>
    </ul>
  );
};

export default WorkshopContextMenu;
