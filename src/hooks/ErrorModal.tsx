'use client';

import React from 'react';
import { useState } from 'react';
import useModal from './useModal';
import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';

const useErrorModal = (): {
  ErrorModal: JSX.Element;
  openModal: (message: string) => void;
} => {
  const [message, setMessage] = useState('');
  const { id, openModal } = useModal();
  return {
    ErrorModal: (
      <Modal id={id}>
        <ModalBox>
          <p className="text-red-500">{message}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </ModalBox>
      </Modal>
    ),
    openModal: (message: string) => {
      setMessage(message);
      openModal();
    },
  };
};

export default useErrorModal;
