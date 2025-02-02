import { AddToInventoryParams } from '@/lib/types/protocols';
import P from '@/Utility/FormatAndSanitize';
import { Choice } from '@prisma/client';
import { Fragment, useCallback, useMemo, useState } from 'react';
import { v4 } from 'uuid';
import ChoiceResolverButton from '../../ChoiceResolverButton';
import useInventoryMutator from '@/hooks/useInventoryMutator';

const AddToInventoryResolver = ({ choice }: { choice: Choice }) => {
  const params = choice.fetchParams as AddToInventoryParams;
  const [selected, setSelected] = useState<string[]>([]);

  const { bulkAddToInventory } = useInventoryMutator();

  const itemChoices = useMemo(() => {
    const itemChoices = {} as Record<string, PrismaJson.QuantityItem[]>;
    params.forEach((p) => {
      const id = v4();
      itemChoices[id] = p;
    });
    return itemChoices;
  }, [params]);

  const output = useMemo(() => {
    return selected.map((s) => itemChoices[s]).flat();
  }, [selected, itemChoices]);

  const beforeSubmit = useCallback(() => {
    //add to inventory
    bulkAddToInventory(output);
    return true;
  }, [bulkAddToInventory, output]);

  return (
    <div>
      <h3>Add To Inventory</h3>
      <p>Choose items to add to your inventory.</p>
      <div className="divider"></div>
      <ul className="flex flex-col gap-2">
        {Object.entries(itemChoices).map(([key, value]) => (
          <li key={key} className="form-control flex flex-row w-full gap-4 ">
            <input
              type="checkbox"
              id={key}
              className="checkbox "
              disabled={
                selected.length >= choice.amountOfOptionToChoose &&
                !selected.includes(key)
              }
              onChange={(e) => {
                if (e.target.checked) {
                  setSelected([...selected, key]);
                } else {
                  setSelected(selected.filter((s) => s !== key));
                }
              }}
              checked={selected.includes(key)}
            />
            <label htmlFor={key}>
              {value.map((item, index) => {
                const k = `${key}-${index}`;
                if (index === value.length - 1) {
                  return (
                    <P key={k}>
                      ^{item.item}
                      {`{}`}^
                    </P>
                  );
                }
                return (
                  <Fragment key={k}>
                    <P>
                      ^{item.item}
                      {`{}`}^
                    </P>
                    <span>, </span>
                  </Fragment>
                );
              })}
            </label>
          </li>
        ))}
      </ul>
      <ChoiceResolverButton
        choiceId={choice.id}
        selected={output}
        disabled={selected.length !== choice.amountOfOptionToChoose}
        beforeSubmit={beforeSubmit}
      />
    </div>
  );
};

export default AddToInventoryResolver;
