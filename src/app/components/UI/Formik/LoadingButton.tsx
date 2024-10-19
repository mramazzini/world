interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  className?: string;
}

const LoadingButton = ({
  isLoading,
  children,
  ...props
}: LoadingButtonProps) => {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={`btn ${props.className}`}
    >
      {children} {isLoading && <span className="loading"></span>}
    </button>
  );
};

export default LoadingButton;
