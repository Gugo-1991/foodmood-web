import { useEffect, useMemo, useState } from "react";
import { useModal } from "./useModal";
import AddBalance from "../../modal/modalContent/AddBalance";
import AddCard from "../../modal/modalContent/AddCard";
import AddNewUser from "../../modal/modalContent/AddNewUser";
import EditCard from "../../modal/modalContent/EditCard";

const MODAL_KEYS = Object.freeze({
  CONFIRMATION_MODAL: "confirmation-modal",
  ADD_USER: "add-user",
  ADD_NEW_CARD: "add-new-card",
  EDIT_CARD: "edit-card",
  ADD_BALANCE: "add-balance",
});

export const useAddCardModal = (props) => {
  const [localProps, setLocalProps] = useState({ ...props });
  const key = MODAL_KEYS.ADD_NEW_CARD;

  const modal = useMemo(() => () => <AddCard {...localProps} />, [localProps]);
  const { isOpen, open, close } = useModal(key, modal);
  useEffect(() => {
    setLocalProps((props) => ({
      ...props,
      open: isOpen,
      modalHandler: close,
    }));
  }, [isOpen, close]);

  const attachHandler = () => {
    setLocalProps((props) => ({
      ...props,
    }));
    open();
  };

  return { open, isOpen, attachHandler };
};

export const useAddNewUserModal = (props) => {
  const [localProps, setLocalProps] = useState({ ...props });
  const key = MODAL_KEYS.ADD_USER;

  const modal = useMemo(
    () => () => <AddNewUser {...localProps} />,
    [localProps]
  );
  const { isOpen, open, close } = useModal(key, modal);
  useEffect(() => {
    setLocalProps((props) => ({
      ...props,
      open: isOpen,
      modalHandler: close,
    }));
  }, [isOpen, close]);

  const attachHandler = () => {
    setLocalProps((props) => ({
      ...props,
    }));
    open();
  };

  return { open, isOpen, attachHandler };
};

export const useEditCardModal = (props) => {
  const [localProps, setLocalProps] = useState({ ...props });
  const key = MODAL_KEYS.EDIT_CARD;
  const modal = useMemo(() => () => <EditCard {...localProps} />, [localProps]);
  const { isOpen, open, close } = useModal(key, modal);
  useEffect(() => {
    setLocalProps((props) => ({
      ...props,
      open: isOpen,
      modalHandler: close,
    }));
  }, [isOpen, close]);

  const attachHandler = (item) => {
    setLocalProps((props) => ({
      ...props,
      item
    }));
    open();
  };

  return { open, isOpen, attachHandler };
};

export const useAddBalanceModal = (props) => {
  const [localProps, setLocalProps] = useState({ ...props });
  const key = MODAL_KEYS.ADD_BALANCE;

  const modal = useMemo(
    () => () => <AddBalance {...localProps} />,
    [localProps]
  );
  const { isOpen, open, close } = useModal(key, modal);
  useEffect(() => {
    setLocalProps((props) => ({
      ...props,
      open: isOpen,
      modalHandler: close,
    }));
  }, [isOpen, close]);

  const attachHandler = () => {
    setLocalProps((props) => ({
      ...props,
    }));
    open();
  };

  return { open, isOpen, attachHandler };
};
