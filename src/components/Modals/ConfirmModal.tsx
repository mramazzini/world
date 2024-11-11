import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import { ReactNode, useState } from 'react';
import LoadingButton from '../UI/Formik/LoadingButton';
import useModal from '@/hooks/useModal';

interface ConfirmModalProps {
  children?: ReactNode;
  message?: string;
  id: string;
  onConfirm: () => void;
}

const ConfirmModal = ({
  message,
  id,
  onConfirm,
  children,
}: ConfirmModalProps) => {
  const [loading, setLoading] = useState(false);
  const { closeModal } = useModal(id);
  return (
    <Modal id={id}>
      <ModalBox>
        <p className="text-lg font-bold">{message}</p>
        {children}
        <div className="modal-action">
          <form method="dialog">
            <LoadingButton
              isLoading={loading}
              className="btn btn-primary mr-2"
              onClick={async (e) => {
                e.preventDefault();
                setLoading(true);
                await onConfirm();
                setLoading(false);
                closeModal();
              }}
            >
              Confirm
            </LoadingButton>
            <button className="btn btn-error">Cancel</button>
          </form>
        </div>
      </ModalBox>
    </Modal>
  );
};

export default ConfirmModal;
