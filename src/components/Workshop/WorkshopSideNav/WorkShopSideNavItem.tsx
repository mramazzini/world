'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  openContextMenu,
  renameLocalWorkshopItem,
  selectTab,
} from '@/store/workshopSlice';
import { WorkshopProtocol } from '@prisma/client';
import { useEffect, useMemo, useRef, useState } from 'react';

interface WorkshopSideNavItemProps {
  childNode: PrismaJson.WorkshopItemData;
  protocol: WorkshopProtocol;
}

const WorkshopSideNavItem = ({
  childNode,
  protocol,
}: WorkshopSideNavItemProps) => {
  const dispatch = useAppDispatch();
  const selectedTab = useAppSelector((state) => state.workshop.selectedTab);
  const [isRenaming, setIsRenaming] = useState(false);
  const [renaming, setRenaming] = useState<string>(childNode.name);
  const inputEl = useRef<HTMLInputElement>(null);
  const workShopItems = useAppSelector((state) => state.workshop.workshopItems);

  const features = useMemo(() => {
    return Object.values(workShopItems).filter(
      (item) =>
        item.protocol === WorkshopProtocol.FEATURE &&
        item.parentId === childNode.id
    );
  }, [workShopItems, childNode.id]);

  const isSelectedTab = useMemo(
    () => childNode.id === selectedTab,
    [selectedTab, childNode.id]
  );

  useEffect(() => {
    if (isRenaming && isSelectedTab) {
      inputEl.current?.focus();
    }
  }, [isRenaming, isSelectedTab]);

  useEffect(() => {
    if (isRenaming && isSelectedTab) {
      inputEl.current?.focus();

      const handleClickOutside = (event: MouseEvent) => {
        if (
          inputEl.current &&
          !inputEl.current.contains(event.target as Node)
        ) {
          setIsRenaming(false);
          dispatch(
            renameLocalWorkshopItem({
              id: childNode.id,
              name: renaming,
            })
          );
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isRenaming, isSelectedTab, dispatch, childNode.id, renaming, protocol]);

  return (
    <>
      {' '}
      <li
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(
            openContextMenu({
              x: e.clientX,
              y: e.clientY,
              tab: childNode.id,
            })
          );
        }}
      >
        {isRenaming && isSelectedTab ? (
          <input
            ref={inputEl}
            type="text"
            value={renaming}
            onChange={(e) => {
              setRenaming(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(
                  renameLocalWorkshopItem({
                    id: childNode.id,
                    name: renaming,
                  })
                );
                setIsRenaming(false);
              }
            }}
          />
        ) : (
          <a
            className={`${isSelectedTab ? 'active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={() => {
              if (childNode.id !== selectedTab) {
                dispatch(selectTab(childNode.id));
              } else {
                setIsRenaming(true);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dispatch(selectTab(childNode.id));
              }
            }}
          >
            {childNode.name}
          </a>
        )}{' '}
      </li>
      {features.length > 0 && (
        <ul>
          {features.map((feature) => (
            <WorkshopSideNavItem
              childNode={feature}
              key={feature.id}
              protocol={protocol}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default WorkshopSideNavItem;
