import { Field, Form, Formik, FormikProps, useFormikContext } from "formik";
import get from "lodash/get";
import ValidatedInput from "./ValidatedInput";
import FormInput from "./FormInput";
interface Props {
  children?: React.ReactNode;
  name: string;
  label?: string;
  formProps: {
    readOnly?: boolean;
    size?: "sm" | "lg";
    placeholder?: string;
    value?: string;
    type?: string;
  };
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const FormField = ({ children, name, label, onChange, formProps }: Props) => {
  const { errors, handleChange } = useFormikContext();
  const error = get(errors, name);
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
