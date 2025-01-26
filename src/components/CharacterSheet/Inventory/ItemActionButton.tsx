interface ItemActionButtonProps {
  onClick: () => void | Promise<void>;
  children: React.ReactNode;
  disabled?: boolean;
}

const ItemActionButton = ({
  onClick,
  children,
  disabled,
}: ItemActionButtonProps) => {
  return (
    <button
      className="btn btn-secondary join-item"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ItemActionButton;
