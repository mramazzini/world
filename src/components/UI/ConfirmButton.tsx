import { useEffect, useState } from 'react';

interface ConfirmButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  onClick: () => void;
}

const ConfirmButton = (props: ConfirmButtonProps) => {
  const [confirming, setConfirming] = useState(false);

  const handleClick = () => {
    if (confirming) {
      props.onClick();
      setConfirming(false);
    } else {
      setConfirming(true);
    }
  };

  useEffect(() => {
    if (confirming) {
      const timeout = setTimeout(() => {
        setConfirming(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [confirming]);

  return (
    <button
      {...props}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      {confirming ? 'Are you sure?' : props.children}
    </button>
  );
};

export default ConfirmButton;
