interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

const FormInput = ({
  name,
  value,
  onChange,
  size = 'lg',
  type,
  placeholder,
  disabled,
}: Props) => {
  return (
    <input
      className={`input input-bordered ${
        size === 'sm'
          ? 'input-sm'
          : size === 'md'
            ? 'input-md'
            : size === 'lg'
              ? 'input-lg'
              : 'input-xl'
      }`}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    ></input>
  );
};

export default FormInput;
