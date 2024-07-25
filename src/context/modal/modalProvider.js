import React from "react";
import { useCallback, useState, useMemo } from "react";
import { ModalRoot } from "./modalRoot";

const invariantViolation = () => {
    throw new Error(
      'Attempted to call useModal outside of modal context. Make sure your app is rendered inside ModalProvider.'
    );
  };


export const ModalContext = React.createContext({
  showModal: invariantViolation,
  hideModal: invariantViolation,
});
export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({});
  const showModal = useCallback(
    (key, modal) =>
      setModals((modals) => ({
        ...modals,
        [key]: modal,
      })),
    []
  );
  const hideModal = useCallback(
    (key) =>
      setModals((modals) => {
        if (!modals[key]) {
          return modals;
        }
        const newModals = { ...modals };
        delete newModals[key];
        return newModals;
      }),
    []
  );
  const contextValue = useMemo(
    () => ({ showModal, hideModal }),
    [showModal, hideModal]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      <React.Fragment>
        {children}
        <ModalRoot modals={modals} />
      </React.Fragment>
    </ModalContext.Provider>
  );
};
