'use client';

import FormField from '@/components/UI/Formik/FormField';
import Loading from '@/components/UI/Loading';
import useWorkshopEditor from '@/hooks/useWorkshopEditor';
import { ItemEditorData } from '@/lib/types/workshop';
import { Currency, Rarity } from '@prisma/client';
import { Form, Formik } from 'formik';
import { ChangeEvent } from 'react';
import * as Yup from 'yup';
import ToolSelector from '../Selectors/ToolSelector';
import WeaponSelector from '../Selectors/WeaponSelector';
import ArmorSelector from '../Selectors/ArmorSelector';

const ItemEditor = () => {
  const { data, updateData } = useWorkshopEditor<ItemEditorData>({
    flavorText: '',
    description: '',
    requiresAttunement: false,
    rarity: Rarity.COMMON,
    cost: {
      quantity: 0,
      unit: Currency.gp,
    },
    types: [],
    weaponData: {
      silvered: false,
      magical: false,
    },
    toolData: {},
    armorData: {},
  });

  const itemSchema = Yup.object().shape({
    flavorText: Yup.string()
      .required('Required')
      .max(150, 'Max 150 characters'),
    description: Yup.string().required('Required'),
  });

  if (!data) return <Loading />;

  return (
    <div>
      <Formik
        initialValues={data}
        validationSchema={itemSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <FormField
            as="textarea"
            name="flavorText"
            label="Flavor Text - Briefly describe the item - Max 150 characters"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              updateData({
                ...data,
                flavorText: e.target.value,
              })
            }
            formProps={{
              value: data.flavorText,

              placeholder:
                'Ex. A sword that glows with a magical light when drawn.',
            }}
          />
          <FormField
            as="textarea"
            name="description"
            label="Description - Describe any preliminary information about the item before the mechanics are explained in its features."
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              updateData({
                ...data,
                description: e.target.value,
              })
            }
            formProps={{
              value: data.description,
              placeholder:
                'Ex. Likely crafted by a powerful wizard, this sword is imbued with magic that makes it glow when drawn.',
            }}
          />

          <FormField
            as="select"
            name="rarity"
            label="Rarity - How rare is this item?"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              updateData({
                ...data,
                rarity: e.target.value as Rarity,
              })
            }
            formProps={{
              value: data.rarity,
            }}
          >
            {Object.values(Rarity).map((rarity) => (
              <option key={rarity} value={rarity}>
                {rarity.replaceAll('_', ' ').toCapitalCase()}
              </option>
            ))}
          </FormField>
          <div className="flex flex-row gap-4">
            <FormField
              as="input"
              name="cost.quantity"
              label="Cost - How much does this item cost?"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updateData({
                  ...data,
                  cost: {
                    ...data.cost,
                    quantity: parseInt(e.target.value),
                  },
                })
              }
              formProps={{
                value: data.cost.quantity.toString(),
                type: 'number',
                placeholder: 'Ex. 100',
              }}
            />
            <FormField
              as="select"
              name="cost.unit"
              label="Unit - What currency is this cost in?"
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                updateData({
                  ...data,
                  cost: {
                    ...data.cost,
                    unit: e.target.value as Currency,
                  },
                })
              }
              formProps={{
                value: data.cost.unit,
              }}
            >
              {Object.values(Currency).map((currency) => (
                <option key={currency} value={currency}>
                  {currency.replaceAll('_', ' ').toCapitalCase()}
                </option>
              ))}
            </FormField>
          </div>
          <div className="divider"></div>
          <div className="grid gap-4 my-4">
            <div className="p-4 bg-base-300 rounded-lg flex flex-col items-center">
              <div className="w-auto">
                <FormField
                  as="checkbox"
                  name="requiresAttunement"
                  label="Requires Attunement"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateData({
                      ...data,
                      requiresAttunement: e.target.checked,
                    })
                  }
                  formProps={{
                    checked: data.requiresAttunement,
                  }}
                />
              </div>
            </div>
            <div className="p-4 bg-base-300 rounded-lg flex flex-col items-center">
              <div className="w-auto">
                <FormField
                  as="checkbox"
                  name="isTool"
                  label="Is this item a tool?"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateData({
                      ...data,
                      types: e.target.checked
                        ? [...data.types, 'TOOL']
                        : data.types.filter((type) => type !== 'TOOL'),
                      toolData: {},
                    })
                  }
                  formProps={{
                    checked: data.types.includes('TOOL'),
                  }}
                />
              </div>
              <p className="p-4">
                <strong>Tool:</strong>{' '}
                {data.toolData.toolName || 'None Selected'}
              </p>
              <ToolSelector
                disabled={!data.types.includes('TOOL')}
                onSelect={(id: string, name: string) =>
                  updateData({
                    ...data,
                    toolData: {
                      toolId: id,
                      toolName: name,
                    },
                  })
                }
              />
            </div>
            <div className="p-4 bg-base-300 rounded-lg flex flex-col items-center">
              <div className="w-auto">
                <FormField
                  as="checkbox"
                  name="isWeapon"
                  label="Is this item a weapon?"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateData({
                      ...data,
                      types: e.target.checked
                        ? [...data.types, 'WEAPON']
                        : data.types.filter((type) => type !== 'WEAPON'),
                      weaponData: {
                        silvered: false,
                        magical: false,
                      },
                    })
                  }
                  formProps={{
                    checked: data.types.includes('WEAPON'),
                  }}
                />
              </div>
              <p className="p-4">
                <strong>Weapon:</strong>{' '}
                {data.weaponData.weaponName || 'None Selected'}
              </p>
              <WeaponSelector
                disabled={!data.types.includes('WEAPON')}
                onSelect={(id: string, name: string) =>
                  updateData({
                    ...data,
                    weaponData: {
                      ...data.weaponData,
                      weaponId: id,
                      weaponName: name,
                    },
                  })
                }
              />
            </div>
            <div className="p-4 bg-base-300 rounded-lg flex flex-col items-center ">
              <div className="w-auto">
                <FormField
                  as="checkbox"
                  name="isArmor"
                  label="Is this item armor?"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateData({
                      ...data,
                      types: e.target.checked
                        ? [...data.types, 'ARMOR']
                        : data.types.filter((type) => type !== 'ARMOR'),
                      armorData: {},
                    })
                  }
                  formProps={{
                    checked: data.types.includes('ARMOR'),
                  }}
                />
              </div>
              <p className="p-4">
                <strong>Armor:</strong>{' '}
                {data.armorData.armorName || 'None Selected'}
              </p>
              <ArmorSelector
                disabled={!data.types.includes('ARMOR')}
                onSelect={(id: string, name: string) =>
                  updateData({
                    ...data,
                    armorData: {
                      armorId: id,
                      armorName: name,
                    },
                  })
                }
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ItemEditor;
