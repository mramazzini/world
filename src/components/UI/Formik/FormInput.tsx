interface Props {
  name: string;
  value: string | number;
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
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // If the type is 'number', filter out non-numeric characters
    if (type === 'number') {
      e.target.value = e.target.value.replace(/[^0-9.-]/g, ''); // Allows only numbers, dot (for decimals), and hyphen (for negatives)
    }
    onChange(e); // Call the original onChange handler
  };
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
      onChange={handleInput}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    ></input>
  );
};

export default FormInput;
