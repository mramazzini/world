import SidebarMetaSelector from '@/components/Dashboard/SidebarMetaSelector';
import useQueryItemMetaData from '@/hooks/apiHooks/useQueryItemData';
import { useState } from 'react';
import { SelectedItemInfo } from './InventoryTab';
import { Form, Formik } from 'formik';
import FormField from '@/components/UI/Formik/FormField';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCharacterState } from '@/store/sheetSlice';
import { addToInventory } from '@/Utility/ChoiceFunctions/Inventory';
import ModelDisplay from '@/Utility/ModelDisplay';

interface Props {
  setSelectedItem: (item: PrismaJson.QuantityItem | null) => void;
  selectedItemInfo: SelectedItemInfo | null;
}

const ItemShop = ({ setSelectedItem, selectedItemInfo }: Props) => {
  const dispatch = useAppDispatch();
  const { itemMetaData, loading, refetch } = useQueryItemMetaData();
  const [show, setShow] = useState(false);
  const state = useAppSelector((state) => state.character.state);

  const validationSchema = Yup.object().shape({
    quantity: Yup.number().min(1),
  });

  return (
    <div className="p-4 bg-base-200 rounded-xl border border-primary h-full flex flex-col items-center">
      <h2 className="divider">Item Shop</h2>
      <p>Add Items into your inventory.</p>
      <SidebarMetaSelector
        model="Item"
        metadata={itemMetaData}
        loading={loading}
        show={show}
        refresh={refetch}
        setSelected={(selected) => {
          setShow(false);
          if (!selected) {
            return;
          }
          setSelectedItem({ item: selected.id, quantity: 1 });
        }}
      />
      <button
        className="btn btn-primary btn-sm mt-2"
        onClick={() => setShow(!show)}
      >
        Search
      </button>
      <div className="divider"></div>

      <Formik
        validationSchema={validationSchema}
        initialValues={{ quantity: 1 }}
        onSubmit={(values) => {
          if (!selectedItemInfo) return;
          if (!state) return;
          const newState = addToInventory({
            state,
            itemID: selectedItemInfo.itemQuantity.item,
            quantity: values.quantity,
          });
          dispatch(setCharacterState(newState));
        }}
      >
        <Form className="bg-base-300 p-4 rounded-xl">
          <p className="divider">
            Selected Item:{' '}
            {selectedItemInfo ? (
              <ModelDisplay
                model="Item"
                id={selectedItemInfo.itemQuantity.item}
              />
            ) : (
              'None'
            )}
          </p>
          <FormField
            label="Quantity"
            name="quantity"
            as="input"
            formProps={{
              type: 'number',
            }}
          />
          <div className="divider my-8">
            <button type="submit" className="btn btn-primary">
              Add to Inventory
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ItemShop;
