import { Field, useFormikContext } from 'formik';
import ValidatedInput from './ValidatedInput';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
interface Props {
  children?: React.ReactNode;
  name: string;
  label?: string;
  as: 'input' | 'textarea' | 'select';
  formProps: {
    className?: string;
    readOnly?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    placeholder?: string;
    value?: string;
    type?: string;
  };
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
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
              : FormSelect
        }
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
