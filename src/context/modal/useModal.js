import { useCallback, useContext, useEffect, useState } from "react";
import { ModalContext } from "./modalProvider";
export const useModal = (key, modal) => {
  const { showModal, hideModal } = useContext(ModalContext);
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      showModal(key, modal);
    } else {
      hideModal(key);
    }
    return () => hideModal(key);
  }, [modal, isOpen, showModal, hideModal, key]);

  return { open, close, isOpen };
};
