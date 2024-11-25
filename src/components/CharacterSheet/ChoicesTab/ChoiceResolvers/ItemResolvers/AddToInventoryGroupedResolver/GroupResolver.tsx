import useItemTypeQuery from '@/hooks/apiHooks/useQueryItemType';
import { ItemGroupQuantity } from '@/lib/types/protocols';
import { ItemID } from '@/lib/types/types';
import P from '@/Utility/FormatAndSanitize';
import { ItemTypes, WeaponGroup } from '@prisma/client';
import { Fragment, useMemo, useState } from 'react';
import { v4 } from 'uuid';

const AddToInventoryItems = ({
  quantityItems,
}: {
  quantityItems: PrismaJson.QuantityItem[];
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const itemChoices = useMemo(() => {
    const itemChoices = {} as Record<string, PrismaJson.QuantityItem>;
    quantityItems.forEach((p) => {
      const id = v4();
      itemChoices[id] = p;
    });
    return itemChoices;
  }, [quantityItems]);

  return (
    <>
      {Object.entries(itemChoices).map(([key, value]) => {
        return (
          <li key={key} className="form-control flex flex-row w-full gap-4 ">
            <input
              type="checkbox"
              id={key}
              className="checkbox "
              //   disabled={
              //     selected.length >= choice.amountOfOptionToChoose &&
              //     !selected.includes(key)
              //   }
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

// const AddToInventoryWeaponGroup = ({
//     weaponGroup,
// }: {
//     weaponGroup: WeaponGroup;
// }) => {
//     const [selected, setSelected] = useState<string[]>([]);
//     const weaponsFromGroup = useWeaponGroupQuery(weaponGroup);
//     const itemChoices = useMemo(() => {
//         const itemChoices = {} as Record<string, PrismaJson.QuantityItem>;
//         weaponGroup.weapons.forEach((p) => {
//             const id = v4();
//             itemChoices[id] = p;
//         });
//         return itemChoices;
//     }, [weaponGroup.weapons]);

//     return (
//         <>
//             {Object.entries(itemChoices).map(([key, value]) => {
//                 return (
//                     <li key={key} className="form-control flex flex-row w-full gap-4 ">
//                         <input
//                             type="checkbox"
//                             id={key}
//                             className="checkbox "
//                             //   disabled={
//                             //     selected.length >= choice.amountOfOptionToChoose &&
//                             //     !selected.includes(key)
//                             //   }
//                             onChange={(e) => {
//                                 if (e.target.checked) {
//                                     setSelected([...selected, key]);
//                                 } else {
//                                     setSelected(selected.filter((s) => s !== key));
//                                 }
//                             }}
//                             checked={selected.includes(key)}
//                         />
//                         <label htmlFor={key}>
//                             <P>
//                                 ^{value.item}
//                                 {`{}`}^
//                             </P>
//                         </label>
//                     </li>
//                 );
//             })}
//         </>
//     );
// }

const AddToInventoryItemType = ({
  type,
  quantity,
}: {
  type: ItemTypes;
  quantity: number;
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { loading, items, refetch } = useItemTypeQuery(type);

  return (
    <>
      {items.map((item) => {
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
                selected.length >= quantity && !selected.includes(item.id)
              }
              onChange={(e) => {
                if (e.target.checked) {
                  setSelected([...selected, item.id]);
                } else {
                  setSelected(selected.filter((s) => s !== item.id));
                }
              }}
              checked={selected.includes(item.id)}
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

const GroupResolver = ({
  group,
  setSelectedItems,
}: {
  group: ItemGroupQuantity;
  setSelectedItems: (items: PrismaJson.QuantityItem[]) => void;
}) => {
  return (
    <ul className="flex flex-col gap-2">
      {group.items && <AddToInventoryItems quantityItems={group.items} />}
      {group.itemType && (
        <AddToInventoryItemType
          type={group.itemType.type}
          quantity={group.itemType.quantity}
        />
      )}
      {/* {group.weaponGroup && (
        <AddToInventoryWeaponGroup weaponGroup={group.weaponGroup} />
      )} */}
    </ul>
  );
};

export default GroupResolver;
