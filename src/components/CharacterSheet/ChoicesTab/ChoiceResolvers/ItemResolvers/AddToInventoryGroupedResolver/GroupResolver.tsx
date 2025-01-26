import Loading from '@/components/UI/Loading';
import useQueryItemToolGroup from '@/hooks/apiHooks/useQueryItemToolGroup';
import useItemTypeQuery from '@/hooks/apiHooks/useQueryItemType';
import useQueryItemWeaponGroup from '@/hooks/apiHooks/useQueryItemWeaponGroupQuery';
import { ItemGroupQuantity } from '@/lib/types/protocols';

import P from '@/Utility/FormatAndSanitize';
import { ItemTypes, ToolGroup, WeaponGroup } from '@prisma/client';
import { useMemo } from 'react';
import { v4 } from 'uuid';

const AddToInventoryItems = ({
  freeItems,
  isActive,
}: {
  freeItems: PrismaJson.QuantityItem[];
  isActive: boolean;
}) => {
  return (
    <>
      <li>Free Items</li>
      {freeItems.map((item) => {
        return (
          <li
            key={item.item}
            className="form-control flex flex-row w-full gap-4 "
          >
            <input
              type="checkbox"
              id={item.item}
              className="checkbox "
              checked={isActive}
              disabled={true}
            />
            <label htmlFor={item.item}>
              <P>
                ^{item.item}
                {`{}`}^
              </P>
            </label>
          </li>
        );
      })}
    </>
  );
};

const AddToInventoryWeaponGroup = ({
  weaponGroup,
  selectedItems,
  setSelectedItems,
  amount,
}: {
  weaponGroup: WeaponGroup;
  selectedItems: PrismaJson.QuantityItem[];
  setSelectedItems: (items: PrismaJson.QuantityItem[]) => void;
  amount: number;
}) => {
  const { loading, items, refetch } = useQueryItemWeaponGroup(weaponGroup);
  const itemChoices = useMemo(() => {
    const itemChoices = {} as Record<string, PrismaJson.QuantityItem>;
    items.forEach((p) => {
      const id = v4();
      itemChoices[id] = { item: p.id, quantity: 1 };
    });
    return itemChoices;
  }, [items]);

  return (
    <>
      {loading && <Loading />}

      {!loading &&
        Object.entries(itemChoices).map(([key, value]) => {
          return (
            <li key={key} className="form-control flex flex-row w-full gap-4 ">
              <input
                type="checkbox"
                id={key}
                className="checkbox "
                disabled={
                  selectedItems.length >= amount &&
                  !selectedItems.some((s) => s.item === value.item)
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedItems([...selectedItems, value]);
                  } else {
                    setSelectedItems(
                      selectedItems.filter((s) => s.item !== value.item)
                    );
                  }
                }}
                checked={selectedItems.some((s) => s.item === value.item)}
              />
              <label htmlFor={key}>
                <P>
                  ^{value.item}
                  {`{}`}^
                </P>
              </label>
            </li>
          );
        })}
    </>
  );
};

const AddToInventoryItemType = ({
  type,
  quantity,
  selectedItems,
  setSelectedItems,
}: {
  type: ItemTypes;
  quantity: number;
  selectedItems: PrismaJson.QuantityItem[];
  setSelectedItems: (items: PrismaJson.QuantityItem[]) => void;
}) => {
  const { loading, items, refetch } = useItemTypeQuery(type);

  return (
    <>
      {loading && <Loading />}
      {!loading &&
        items.map((item) => {
          return (
            <li
              key={item.id}
              className="form-control flex flex-row w-full gap-4 "
            >
              <input
                type="checkbox"
                id={item.id}
                className="checkbox "
                disabled={
                  selectedItems.length >= quantity &&
                  !selectedItems.some((s) => s.item === item.id)
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedItems([
                      ...selectedItems,
                      { item: item.id, quantity: 1 },
                    ]);
                  } else {
                    setSelectedItems(
                      selectedItems.filter((s) => s.item !== item.id)
                    );
                  }
                }}
                checked={selectedItems.some((s) => s.item === item.id)}
              />
              <label htmlFor={item.id}>
                <P>
                  ^{item.id}
                  {`{}`}^
                </P>
              </label>
            </li>
          );
        })}
    </>
  );
};

const AddToInventoryToolGroup = ({
  toolGroup,
  selectedItems,
  setSelectedItems,
  amount,
}: {
  toolGroup: ToolGroup;
  selectedItems: PrismaJson.QuantityItem[];
  setSelectedItems: (items: PrismaJson.QuantityItem[]) => void;
  amount: number;
}) => {
  const { items, loading } = useQueryItemToolGroup(toolGroup);
  const itemChoices = useMemo(() => {
    const itemChoices = {} as Record<string, PrismaJson.QuantityItem>;
    items.forEach((p) => {
      const id = v4();
      itemChoices[id] = { item: p.id, quantity: 1 };
    });
    return itemChoices;
  }, [items]);

  return (
    <>
      {loading && <Loading />}

      {!loading &&
        Object.entries(itemChoices).map(([key, value]) => {
          return (
            <li key={key} className="form-control flex flex-row w-full gap-4 ">
              <input
                type="checkbox"
                id={key}
                className="checkbox "
                disabled={
                  selectedItems.length >= amount &&
                  !selectedItems.some((s) => s.item === value.item)
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedItems([...selectedItems, value]);
                  } else {
                    setSelectedItems(
                      selectedItems.filter((s) => s.item !== value.item)
                    );
                  }
                }}
                checked={selectedItems.some((s) => s.item === value.item)}
              />
              <label htmlFor={key}>
                <P>
                  ^{value.item}
                  {`{}`}^
                </P>
              </label>
            </li>
          );
        })}
    </>
  );
};

const GroupResolver = ({
  group,
  setSelectedItems,
  selectedItems,
  activateChoice,
  deactivateChoice,
  isActive,
  activeRemaining,
}: {
  group: ItemGroupQuantity;
  setSelectedItems: (items: PrismaJson.QuantityItem[]) => void;
  selectedItems: PrismaJson.QuantityItem[];
  activateChoice: () => void;
  deactivateChoice: () => void;
  isActive: boolean;
  activeRemaining: number;
}) => {
  const allowChoice = useMemo(() => activeRemaining > 0, [activeRemaining]);
  const canActivate = useMemo(() => activeRemaining > 0, [activeRemaining]);
  const canDeactivate = useMemo(() => isActive, [isActive]);
  const canToggle = useMemo(
    () => canActivate || canDeactivate,
    [canActivate, canDeactivate]
  );
  return (
    <div
      className={`bg-base-300 border border-gray-500 rounded-xl transition-all transition-duration-300 p-4 `}
    >
      <div className="flex flex-col gap-2">
        <label>Use this option</label>

        <input
          className="toggle"
          type="checkbox"
          checked={isActive}
          onChange={() => {
            if (isActive) {
              deactivateChoice();
            } else {
              activateChoice();
            }
          }}
          disabled={!canToggle}
        />
      </div>
      <div className="divider"></div>

      {/* <h3>Option {index + 1}</h3> */}

      {/* <div className="divider"></div> */}
      <ul className="flex flex-col gap-2">
        {group.itemType && (
          <AddToInventoryItemType
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            type={group.itemType.type}
            quantity={isActive ? group.itemType.quantity : 0}
          />
        )}
        {group.weaponGroup && (
          <AddToInventoryWeaponGroup
            weaponGroup={group.weaponGroup.group}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            amount={isActive ? group.weaponGroup.quantity : 0}
          />
        )}
        {group.toolGroup && (
          <AddToInventoryToolGroup
            toolGroup={group.toolGroup.group}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            amount={isActive ? group.toolGroup.quantity : 0}
          />
        )}
        {group.items && (
          <AddToInventoryItems freeItems={group.items} isActive={isActive} />
        )}
      </ul>
    </div>
  );
};

export default GroupResolver;
