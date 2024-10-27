'use client';
import { useState, useCallback, useEffect } from 'react';
import { v4 } from 'uuid';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    setId(v4());
  }, []);

  const openModal = useCallback(() => {
    try {
      const modal = document.getElementById(id) as HTMLDialogElement;
      window.scrollTo(0, 0);
      modal.showModal();
      // scroll to top of screen

      setIsOpen(true);
    } catch (error) {
      console.error('You probably forgot to add the modal to the DOM');
      console.error(error);
    }
  }, [id]);

  const closeModal = useCallback(() => {
    try {
      const modal = document.getElementById(id) as HTMLDialogElement;
      modal.close();
      setIsOpen(false);
    } catch (error) {
      console.error('You probably forgot to add the modal to the DOM');
      console.error(error);
    }
  }, [id]);

  const toggleModal = useCallback(() => {
    try {
      const modal = document.getElementById(id) as HTMLDialogElement;
      if (isOpen) {
        modal.close();
      } else {
        modal.showModal();
      }
      setIsOpen((prev) => !prev);
    } catch (error) {
      console.error('You probably forgot to add the modal to the DOM');
      console.error(error);
    }
  }, [id, isOpen]);

  return {
    id,
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useModal;
