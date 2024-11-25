'use client';
import {
  AddToInventoryGroupedParams,
  ItemGroupQuantity,
} from '@/lib/types/protocols';
import P from '@/Utility/FormatAndSanitize';
import { Choice, ToolGroup, WeaponGroup } from '@prisma/client';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { v4 } from 'uuid';
import GroupResolver from './GroupResolver';

const AddToInventoryGroupedResolver = ({ choice }: { choice: Choice }) => {
  const params = choice.fetchParams as AddToInventoryGroupedParams;
  const [selectedItems, setSelectedItems] = useState<PrismaJson.QuantityItem[]>(
    []
  );

  const groupChoices = useMemo(() => {
    const itemChoices = {} as Record<string, ItemGroupQuantity>;
    params.forEach((p) => {
      const id = v4();
      itemChoices[id] = p;
    });
    return itemChoices;
  }, [params]);

  return (
    <div>
      <h3>Add To Inventory</h3>
      <p>Choose items to add to your inventory.</p>
      <div className="divider"></div>
      {Object.entries(groupChoices).map(([key, value], index) => {
        return (
          <Fragment key={key}>
            <div
              className={`bg-base-300 border border-gray-500 rounded-xl transition-all transition-duration-300 p-4 `}
            >
              <h3>Option {index + 1}</h3>
              <p>
                Pick{' '}
                {choice.amountOfOptionToChoose === 1
                  ? '1 item from the following.'
                  : `${choice.amountOfOptionToChoose} items from the following.`}
              </p>
              <div className="divider"></div>
              <GroupResolver
                group={value}
                setSelectedItems={setSelectedItems}
              />
            </div>
            {index < Object.keys(groupChoices).length - 1 && (
              <div className="divider"></div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default AddToInventoryGroupedResolver;
