import { useFormikContext } from "formik";
import { get } from "lodash";

interface ValidatedInputProps {
  name: string;
  label?: string;
  children?: React.ReactNode;
}

const ValidatedInput = ({ name, label, children }: ValidatedInputProps) => {
  const { errors } = useFormikContext();
  const error = get(errors, name);
  return (
    <div className="form-control my-2">
      {label && (
        <label className="label" htmlFor={name}>
          <span className="label-text">{label}</span>
        </label>
      )}
      {children}
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

export default ValidatedInput;
