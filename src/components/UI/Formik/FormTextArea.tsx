interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const FormTextArea = ({
  className,
  name,
  value,
  onChange,
  size = 'lg',
  placeholder,
  disabled,
}: Props) => {
  return (
    <textarea
      className={`textarea textarea-bordered ${className} ${
        size === 'sm'
          ? 'textarea-sm'
          : size === 'md'
            ? 'textarea-md'
            : size === 'lg'
              ? 'textarea-lg'
              : 'textarea-xl'
      }`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    ></textarea>
  );
};

export default FormTextArea;
