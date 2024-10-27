import React from 'react';

interface ModalProps extends React.HTMLProps<HTMLDialogElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
}

//use with useModal hook
const Modal: React.FC<ModalProps> = (props) => {
  return (
    <dialog {...props} className={`modal ${props.className}`} id={props.id}>
      {props.children}
    </dialog>
  );
};

export default Modal;
