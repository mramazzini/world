interface Props {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  placeholder?: string;
  disabled?: boolean;
}

const FormCheckbox = ({
  name,
  checked,
  onChange,
  size = 'lg',
  placeholder,
  disabled,
}: Props) => {
  return (
    <div className="divider">
      <input
        className={`checkbox checkbox-bordered ${
          size === 'sm'
            ? 'checkbox-sm'
            : size === 'md'
              ? 'checkbox-md'
              : size === 'lg'
                ? 'checkbox-lg'
                : 'checkbox-xl'
        }`}
        name={name}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        placeholder={placeholder}
        disabled={disabled}
      ></input>
    </div>
  );
};

export default FormCheckbox;
