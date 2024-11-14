import { Field, useFormikContext } from 'formik';
import ValidatedInput from './ValidatedInput';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
import { ChangeEvent } from 'react';
import FormCheckbox from './FormCheckbox';
interface Props {
  children?: React.ReactNode;
  name: string;
  label?: string;
  as: 'input' | 'textarea' | 'select' | 'checkbox';
  formProps: {
    className?: string;
    readOnly?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    placeholder?: string;
    value?: string | number;
    type?: string;
    checked?: boolean;
  };
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
}

const FormField = ({
  children,
  name,
  label,
  onChange,
  formProps,
  as = 'input',
}: Props) => {
  const { handleChange } = useFormikContext();
  return (
    <ValidatedInput name={name} label={label}>
      <Field
        name={name}
        id={name}
        as={
          as === 'input'
            ? FormInput
            : as === 'textarea'
              ? FormTextArea
              : as === 'select'
                ? FormSelect
                : FormCheckbox
        }
        {...formProps}
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          handleChange(e);
          if (onChange) {
            onChange(e);
          }
        }}
      >
        {children}
      </Field>
    </ValidatedInput>
  );
};

export default FormField;
