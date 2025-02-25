import SidebarMetaSelector from '@/components/Dashboard/SidebarMetaSelector';
import useQueryItemMetaData from '@/hooks/apiHooks/useQueryItemData';
import { useState } from 'react';
import { SelectedItemInfo } from './InventoryTab';
import { Form, Formik } from 'formik';
import FormField from '@/components/UI/Formik/FormField';
import * as Yup from 'yup';
import ModelDisplay from '@/Utility/ModelDisplay';
import useInventoryMutator from '@/hooks/useInventoryMutator';

interface Props {
  setSelectedItem: (item: PrismaJson.QuantityItem | null) => void;
  selectedItemInfo: SelectedItemInfo | null;
}

const ItemShop = ({ setSelectedItem, selectedItemInfo }: Props) => {
  const { itemMetaData, loading, refetch } = useQueryItemMetaData();
  const [show, setShow] = useState(false);

  const { addToInventory } = useInventoryMutator();

  const validationSchema = Yup.object().shape({
    quantity: Yup.number().min(1),
  });

  return (
    <div className="p-4 bg-base-200 rounded-xl border border-primary h-full flex flex-col items-center">
      <h2 className="lg:divider">Item Shop</h2>
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
          addToInventory({
            item: selectedItemInfo.itemQuantity.item,
            quantity: values.quantity,
          });
        }}
      >
        <Form className="bg-base-300 p-4 rounded-xl flex items-center flex-col w-full gap-2">
          <p className="lg:divider">
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
              size: 'sm',
              className: 'w-full',
            }}
          />
          <div className="lg:divider">
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
