const ModalBox: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className={`modal-box ${props.className}`}>
      {props.children}
    </div>
  );
};

export default ModalBox;
