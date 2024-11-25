'use client';
import { memoizeGetItem } from '@/Utility/Indexed/globalCache';
import { useEffect, useMemo, useState } from 'react';
import ItemPage from '@/pages-lib/wiki/official/Item.page';
import Image from 'next/image';

import { ItemInfo } from '@/lib/types/modelInfo';
import { SelectedItemInfo } from './InventoryTab';
import Loading from '@/components/UI/Loading';
import useInventoryMutator from '@/hooks/useInventoryMutator';
import ItemAction from './ItemAction';
import useInventory from '@/hooks/useInventory';
interface Props {
  setSelectedItem: (item: PrismaJson.QuantityItem | null) => void;
  selectedItemInfo: SelectedItemInfo | null;
}

const ItemPreview = ({ setSelectedItem, selectedItemInfo }: Props) => {
  const [item, setItem] = useState<ItemInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { items } = useInventory();
  const [deleteAmount, setDeleteAmount] = useState(1);
  const { deleteItem } = useInventoryMutator();

  const selectedItem = useMemo(() => {
    return selectedItemInfo?.itemQuantity;
  }, [selectedItemInfo]);
  const fromInventory = useMemo(() => {
    return !selectedItemInfo?.purchasing;
  }, [selectedItemInfo]);

  useEffect(() => {
    if (!selectedItem) return;
    setLoading(true);
    memoizeGetItem({
      query: selectedItem.item,
      type: 'id',
    }).then((item) => {
      setItem(item);
      setLoading(false);
    });
  }, [selectedItem]);

  const inInventory = useMemo(() => {
    return items.find((i) => i.id === selectedItem?.item);
  }, [selectedItem, items]);

  return (
    <div className="flex flex-col w-full h-full ">
      {loading && <Loading />}
      {!loading && item ? (
        <div className="flex flex-col  bg-base-300">
          <div className="flex flex-row justify-between items-center mt-4 mb-2 mx-4">
            <div className="flex  justify-center items-center  join ">
              {inInventory && <ItemAction item={item} />}

              <button
                className="btn btn-neutral join-item"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedItem(null);
                  setItem(null);
                }}
              >
                Close
              </button>
            </div>
            {fromInventory && selectedItem && (
              <div className="flex  justify-center items-center  join ">
                {selectedItem && selectedItem.quantity > 1 && (
                  <input
                    className="input input-error join-item w-16"
                    onChange={(e) => {
                      setDeleteAmount(parseInt(e.target.value));
                    }}
                    type="number"
                    value={deleteAmount}
                  />
                )}

                <button
                  className="btn btn-error join-item min-w-16"
                  onClick={async (e) => {
                    e.preventDefault();
                    if (confirmDelete) {
                      deleteItem(selectedItem.item, deleteAmount);
                      setConfirmDelete(false);
                    } else {
                      setConfirmDelete(true);
                      setTimeout(() => {
                        setConfirmDelete(false);
                      }, 2000);
                    }
                  }}
                >
                  {confirmDelete ? (
                    'Confirm Delete'
                  ) : (
                    <Image
                      src="/images/trash.svg"
                      alt="Delete"
                      width={25}
                      height={25}
                    />
                  )}
                </button>
              </div>
            )}
          </div>
          <div className="divider m-0" />
          <ItemPage item={item} />
        </div>
      ) : (
        <div className="flex flex-col w-full  h-full items-center justify-center">
          <p className="text-center font-bold divider mx-4 bg-base-300 rounded-xl p-4">
            No Item Selected
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemPreview;
