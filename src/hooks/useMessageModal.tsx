'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { v4 } from 'uuid';

const useMessageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [id, setId] = useState<string>('');
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setId(v4());
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const modal = document.getElementById(id) as HTMLDialogElement | null;
      if (modal) {
        modalRef.current = modal;
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [id]);

  const openModal = useCallback(
    (message: string) => {
      try {
        const modal = modalRef.current;
        if (modal) {
          setMessage(message);
          modal.showModal();
          setIsOpen(true);
        }
      } catch (error) {
        console.error('You probably forgot to add the modal to the DOM');
        console.error(error);
      }
    },
    [setMessage, modalRef]
  );

  const closeModal = useCallback(
    (cleanupFunction?: () => void) => {
      try {
        const modal = modalRef.current;
        if (modal) {
          modal.close();
          setMessage('');
          setIsOpen(false);
        }
      } catch (error) {
        console.error('You probably forgot to add the modal to the DOM');
        console.error(error);
      } finally {
        if (cleanupFunction) {
          cleanupFunction();
        }
      }
    },
    [setMessage, modalRef]
  );

  const toggleModal = useCallback(
    (message: string) => {
      if (isOpen) {
        closeModal();
      } else {
        openModal(message);
      }
    },
    [isOpen, openModal, closeModal]
  );

  return {
    id,
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    message,
  };
};

export default useMessageModal;
