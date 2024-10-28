'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { v4 } from 'uuid';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const openModal = useCallback(() => {
    try {
      const modal = modalRef.current;
      if (modal) {
        modal.showModal();
        setIsOpen(true);
      }
    } catch (error) {
      console.error('You probably forgot to add the modal to the DOM');
      console.error(error);
    }
  }, [modalRef]);

  const closeModal = useCallback(() => {
    try {
      const modal = modalRef.current;
      if (modal) {
        modal.close();
        setIsOpen(false);
      }
    } catch (error) {
      console.error('You probably forgot to add the modal to the DOM');
      console.error(error);
    }
  }, [modalRef]);

  const toggleModal = useCallback(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
    setIsOpen((prev) => !prev);
  }, [isOpen, openModal, closeModal]);

  return {
    id,
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useModal;
