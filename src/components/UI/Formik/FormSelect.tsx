interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormSelect = ({
  name,
  value,
  onChange,
  size = 'lg',
  disabled,
  children,
  className,
}: Props) => {
  return (
    <select
      className={`select select-bordered ${
        size === 'sm'
          ? 'select-sm'
          : size === 'md'
            ? 'select-md'
            : size === 'lg'
              ? 'select-lg'
              : 'select-xl'
      } ${className}`}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {children}
    </select>
  );
};

export default FormSelect;
