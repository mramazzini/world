import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import useInventoryMutator from '@/hooks/useInventoryMutator';
import { ItemInfo } from '@/lib/types/modelInfo';
import { ArmorType, ItemTypes } from '@prisma/client';
import { Fragment, useMemo } from 'react';
import ItemActionButton from './ItemActionButton';
import useLoadout from '@/hooks/useLoadout';

interface ItemActionProps {
  item: ItemInfo;
}

const ItemAction = ({ item }: ItemActionProps) => {
  const { equipArmor, equipWeapon, unpackEquipment, equipShield } =
    useInventoryMutator();
  const { canEquip } = useLoadout();
  const state = useCharacterState();

  const equippable = useMemo(() => {
    return canEquip(item.id);
  }, [item, canEquip]);

  if (!state) return null;

  return item.types.map((type, index) =>
    item.Armor?.armorType == ArmorType.SHIELDS ? (
      <ItemActionButton
        key={index}
        onClick={() => equipShield(item.id)}
        disabled={!equippable}
      >
        {state.weaponEquippedIds.includes(item.id)
          ? 'Equipped'
          : 'Equip Shield'}
      </ItemActionButton>
    ) : type === ItemTypes.ARMOR ? (
      <ItemActionButton
        key={index}
        disabled={!equippable}
        onClick={() => equipArmor(item.id)}
      >
        {state?.armorEquippedId === item.id ? 'Equipped' : 'Equip Armor'}
      </ItemActionButton>
    ) : type === ItemTypes.WEAPON ? (
      <Fragment key={index}>
        {!item.ItemWeaponData?.Weapon.WeaponPropertyInstance.some((p) => {
          return p.Property.name === 'Two-Handed';
        }) && (
          <ItemActionButton
            key={index}
            disabled={!equippable}
            onClick={() => equipWeapon(item.id)}
          >
            Equip Weapon
          </ItemActionButton>
        )}

        {item.ItemWeaponData?.Weapon.WeaponPropertyInstance?.some((p) => {
          return p.Property.name === 'Two-Handed';
        }) && (
          <ItemActionButton
            key={index}
            disabled={!equippable}
            onClick={() => equipWeapon(item.id)}
          >
            Equip Two-Handed
          </ItemActionButton>
        )}
      </Fragment>
    ) : type === ItemTypes.DRUIDIC_FOCUS ? (
      <button key={index} className="btn btn-secondary join-item">
        Equip Druidic Focus
      </button>
    ) : type === ItemTypes.ARCANE_FOCUS ? (
      <button key={index} className="btn btn-secondary join-item">
        Equip Arcane Focus
      </button>
    ) : type === ItemTypes.TOOL ? null : type === ItemTypes.EQUIPMENT_PACK ? (
      <ItemActionButton key={index} onClick={() => unpackEquipment(item.id)}>
        Unpack Equipment
      </ItemActionButton>
    ) : null
  );
};

export default ItemAction;
