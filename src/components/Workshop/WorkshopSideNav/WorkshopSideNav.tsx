'use client';
import { useAppSelector } from '@/store/hooks';
import { WorkshopProtocol } from '@prisma/client';
import WorkshopSideNavSection from './WorkShopSideSection';
import { useCallback } from 'react';

const WorkshopSideNav = () => {
  const { sideNavOpen, workshopItems } = useAppSelector(
    (state) => state.workshop
  );

  const filterFn = useCallback(
    (protocol: WorkshopProtocol, childNodes: PrismaJson.WorkshopItemData[]) => {
      return childNodes.filter((childNode) => childNode.protocol === protocol);
    },
    []
  );

  const disabled: WorkshopProtocol[] = [
    'FEATURE',
    'CLASS',
    'SPELL',
    'CREATURE',
    'SPECIES',
    'SUBSPECIES',
    'BACKGROUND',
  ];
  return (
    <div
      className={`h-full bg-base-200 ${sideNavOpen ? 'w-[20rem]' : 'w-0'} transition-all duration-300 overflow-auto flex flex-col items-start justify-start `}
    >
      <ul className="menu menu-xs bg-base-200 rounded-lg w-full">
        {Object.values(WorkshopProtocol).map((protocol) => {
          if (disabled.includes(protocol)) return null;
          const childNodes = filterFn(protocol, Object.values(workshopItems));
          return (
            <WorkshopSideNavSection
              key={protocol}
              protocol={protocol}
              childNodes={childNodes}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default WorkshopSideNav;
