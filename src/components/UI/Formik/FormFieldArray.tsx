'use client';
import { Field, FieldArray } from 'formik';
import ValidatedInput from './ValidatedInput';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
import { useMemo } from 'react';
interface Props<T extends string | number> {
  children?: React.ReactNode;
  name: string;
  label?: string;
  as: 'input' | 'textarea' | 'select';
  formProps: {
    readOnly?: boolean;
    size?: 'sm' | 'lg';
    placeholder?: string;
    type?: string;
  };
  values: T[];
  sortFn?: (a: T, b: T) => number;
  updateData: (data: T[]) => void;
}

const FormFieldArray = <T extends string | number>({
  children,
  name,
  label,
  formProps,
  values,
  updateData,
  sortFn,
  as = 'input',
}: Props<T>) => {
  // const { handleChange } = useFormikContext();

  const removeElement = (index: number) => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    updateData(updatedValues);
  };

  const insertElement = (index: number) => {
    if (!values || values.length === 0) {
      if (typeof values === 'string') {
        updateData(['' as T]);
      } else updateData([1 as T]);
      return;
    }
    const updatedValues = [...values];
    updatedValues.splice(
      index,
      0,
      typeof values[0] === 'string' ? ('' as T) : (1 as T)
    );
    updateData(updatedValues);
  };

  const sorted = useMemo(() => {
    if (!values) return [];
    if (sortFn) {
      const copy = [...values];
      return copy.sort(sortFn);
    }
    return values;
  }, [values, sortFn]);

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div className="form-control">
          <label htmlFor={name} className="label-text">
            {label}
          </label>
          {sorted.length > 0 ? (
            sorted.map((value, index) => (
              <div key={index} className="flex flex-row gap-4">
                <ValidatedInput name={`${name}-${index}`}>
                  <Field
                    className="w-full"
                    name={`${name}-${index}`}
                    id={`${name}-${index}`}
                    as={
                      as === 'input'
                        ? FormInput
                        : as === 'textarea'
                          ? FormTextArea
                          : FormSelect
                    }
                    {...formProps}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const updatedValues = [...values];
                      updatedValues[index] = (
                        typeof value === 'string'
                          ? e.target.value
                          : parseInt(e.target.value)
                      ) as T;
                      updateData(updatedValues);
                      // handleChange(e);
                    }}
                  >
                    {children}
                  </Field>
                </ValidatedInput>
                <div className="flex flex-col items-center justify-center join join-vertical w-auto">
                  <button
                    type="button"
                    className="btn btn-sm btn-error join-item w-full"
                    onClick={() => removeElement(index)}
                  >
                    -
                  </button>

                  <button
                    type="button"
                    className="btn btn-sm btn-success join-item w-full"
                    onClick={() => insertElement(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <button
              type="button"
              className="btn btn-sm btn-primary w-48 mt-2"
              onClick={() => insertElement(0)}
            >
              Add {name}
            </button>
          )}
        </div>
      )}
    />
  );
};

export default FormFieldArray;
