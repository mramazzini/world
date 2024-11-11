'use client';
import { createLocalWorkshopItem } from '@/store/workshopSlice';
import { WorkshopProtocol } from '@prisma/client';
import Image from 'next/image';
import { useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import '@/lib/string.extensions';
import { v4 } from 'uuid';
import WorkshopSideNavItem from './WorkShopSideNavItem';

interface WorkshopSideNavSectionProps {
  protocol: WorkshopProtocol;
  childNodes: PrismaJson.WorkshopItemData[];
}

const WorkshopSideNavSection = ({
  protocol,
  childNodes,
}: WorkshopSideNavSectionProps) => {
  const dispatch = useDispatch();
  const details = useRef<HTMLDetailsElement>(null);

  const iconSource = useMemo(() => {
    switch (protocol) {
      case WorkshopProtocol.SPELL:
        return '/workshop/fireball.svg';
      case WorkshopProtocol.ITEM:
        return '/workshop/chest.svg';
      case WorkshopProtocol.CLASS:
        return '/workshop/helmetClass.svg';
      case WorkshopProtocol.SUBCLASS:
        return '/workshop/helmetSubclass.svg';
      case WorkshopProtocol.SPECIES:
        return '/workshop/eyeSpecies.svg';
      case WorkshopProtocol.BACKGROUND:
        return '/images/silhouette.svg';
      case WorkshopProtocol.FEAT:
        return '/workshop/scroll.svg';
      case WorkshopProtocol.CREATURE:
        return '/images/scroll.svg';
      case WorkshopProtocol.SUBSPECIES:
        return '/workshop/eyeSubspecies.svg';
      default:
        return '/images/silhouette.svg';
    }
  }, [protocol]);

  return (
    <li
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <details ref={details}>
        <summary>
          <Image src={iconSource} width={24} height={24} alt="" />
          {protocol.toCapitalCase()}
          <button
            className="btn btn-xs btn-ghost border border-gray-500 hover:bg-success hover:text-success-content"
            onClick={(e) => {
              e.preventDefault();
              if (details.current) details.current.open = true;
              const id = v4();
              dispatch(
                createLocalWorkshopItem({
                  name: 'New Homebrew',
                  protocol: protocol,
                  id: id,
                  lastEditISOString: new Date().toISOString(),
                })
              );
            }}
          >
            {' '}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path
                stroke="currentColor"
                d="M4 12H20M12 4V20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </summary>
        <ul>
          {childNodes.map((childNode) => (
            <WorkshopSideNavItem
              childNode={childNode}
              key={childNode.id}
              protocol={protocol}
            />
          ))}
        </ul>
      </details>
    </li>
  );
};

export default WorkshopSideNavSection;
