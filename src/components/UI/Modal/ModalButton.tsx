'use client';
import { useCallback } from 'react';
interface OpenModalButtonProps extends React.HTMLProps<HTMLButtonElement> {
  modalid: string;
  modaltype: 'open' | 'close';
}

const ModalButton: React.FC<OpenModalButtonProps> = (props) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      props.onClick?.(e);
      const modal = document.getElementById(props.modalid) as HTMLDialogElement;
      if (modal) {
        if (props.modaltype === 'open') {
          modal.showModal();
        } else {
          modal.close();
        }
      } else {
        console.error(`Modal with id ${props.modalid} not found`);
      }
    },
    [props]
  );

  return <button {...props} type="button" onClick={handleClick} />;
};

export default ModalButton;
