import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';

interface ConfirmModalProps {
  message: string;
  id: string;
  onConfirm: () => void;
}

const ConfirmModal = ({ message, id, onConfirm }: ConfirmModalProps) => {
  return (
    <Modal id={id}>
      <ModalBox>
        <p className="text-lg font-bold">{message}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary mr-2" onClick={onConfirm}>
              Confirm
            </button>
            <button className="btn btn-error">Cancel</button>
          </form>
        </div>
      </ModalBox>
    </Modal>
  );
};

export default ConfirmModal;
