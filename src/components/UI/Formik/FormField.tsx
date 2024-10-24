import { Field, useFormikContext } from 'formik';
import ValidatedInput from './ValidatedInput';
import FormInput from './FormInput';
interface Props {
  children?: React.ReactNode;
  name: string;
  label?: string;
  formProps: {
    readOnly?: boolean;
    size?: 'sm' | 'lg';
    placeholder?: string;
    value?: string;
    type?: string;
  };
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const FormField = ({ children, name, label, onChange, formProps }: Props) => {
  const { handleChange } = useFormikContext();
  return (
    <ValidatedInput name={name} label={label}>
      <Field
        name={name}
        id={name}
        as={FormInput}
        {...formProps}
        onChange={onChange ?? handleChange}
        // isInvalid={!!error}
      >
        {children}
      </Field>
    </ValidatedInput>
  );
};

export default FormField;
