'use client';
import {
  AddToInventoryGroupedParams,
  ItemGroupQuantity,
} from '@/lib/types/protocols';
import P from '@/Utility/FormatAndSanitize';
import { Choice } from '@prisma/client';
import { useCallback, useMemo, useState } from 'react';
import { v4 } from 'uuid';
import GroupResolver from './GroupResolver';
import ChoiceResolverButton from '../../../ChoiceResolverButton';
import useInventoryMutator from '@/hooks/useInventoryMutator';

const AddToInventoryGroupedResolver = ({ choice }: { choice: Choice }) => {
  const params = choice.fetchParams as AddToInventoryGroupedParams;
  const { bulkAddToInventory } = useInventoryMutator();

  const [activeOptions, setActiveOptions] = useState<string[]>([]);

  const groupChoices = useMemo(() => {
    const itemChoices = {} as Record<string, ItemGroupQuantity>;
    params.forEach((p) => {
      const id = v4();
      itemChoices[id] = p;
    });
    return itemChoices;
  }, [params]);

  const [selectedOptions, setSelectedOptions] = useState<
    { id: string; items: PrismaJson.QuantityItem[] }[] | []
  >(Object.entries(groupChoices).map(([key]) => ({ id: key, items: [] })));

  const setSelectedItems = (id: string, items: PrismaJson.QuantityItem[]) => {
    setSelectedOptions((prev) =>
      prev.map((p) => (p.id === id ? { id, items } : p))
    );
  };
  const allowNewOptions = useMemo(() => {
    return activeOptions.length < choice.amountOfOptionToChoose;
  }, [activeOptions, choice.amountOfOptionToChoose]);

  const selectedOutput = useMemo(() => {
    return selectedOptions
      .map((s) => [...s.items, ...(groupChoices[s.id]?.items || [])])
      .filter((s) => s.length > 0)
      .flat();
  }, [selectedOptions, groupChoices]);

  const beforeSubmit = useCallback(() => {
    //add to inventory
    bulkAddToInventory(selectedOutput);
    return true;
  }, [bulkAddToInventory, selectedOutput]);

  return (
    <div>
      <h3>Add To Inventory</h3>
      <p>
        Pick{' '}
        {choice.amountOfOptionToChoose === 1
          ? '1 option from the following.'
          : `${choice.amountOfOptionToChoose} options from the following.`}
      </p>
      <div className="divider"></div>
      {Object.entries(groupChoices).map(([key, value], index) => {
        return (
          <div
            key={key}
            className={`${allowNewOptions || activeOptions.includes(key) ? '' : ''}`}
          >
            <GroupResolver
              activateChoice={() => {
                setActiveOptions((prev) => {
                  if (
                    prev.length >= choice.amountOfOptionToChoose ||
                    prev.includes(key)
                  ) {
                    return prev;
                  }
                  return [...prev, key];
                });
              }}
              deactivateChoice={() => {
                setActiveOptions((prev) => prev.filter((p) => p !== key));
                setSelectedItems(key, []);
              }}
              selectedItems={
                selectedOptions.find((s) => s.id === key)?.items || []
              }
              group={value}
              setSelectedItems={(items) => {
                setSelectedItems(key, items);
              }}
              isActive={activeOptions.includes(key)}
              activeRemaining={
                choice.amountOfOptionToChoose - activeOptions.length
              }
            />
            {index < Object.keys(groupChoices).length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        );
      })}
      <div className="divider"></div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h3>These items will be added to your inventory:</h3>
          <ul>
            {selectedOutput.map(({ item, quantity }) => (
              <li key={item} className="list-disc ml-4">
                {quantity > 1 && quantity} <P>{`^${item}{}^`}</P>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ChoiceResolverButton
        choiceId={choice.id}
        selected={selectedOutput}
        disabled={activeOptions.length !== choice.amountOfOptionToChoose}
        beforeSubmit={beforeSubmit}
      />
    </div>
  );
};

export default AddToInventoryGroupedResolver;
