import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import Modal from "./modalContent";
import LoginModalPage from "./modalContent/LoginModalPage";

function ModalCreator({ children }) {
  const Modalelement = document.getElementById("modal");
  const element = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    Modalelement.appendChild(element);
    return () => Modalelement.removeChild(element);
  }, []);
  return createPortal(<Modal chidren={children} />, element);
}
export function LoginModal({ children }) {
  const Modalelement = document.getElementById("loginpage");
  const element = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    Modalelement.appendChild(element);
    return () => Modalelement.removeChild(element);
  }, []);
  return createPortal(<LoginModalPage />, element);
}

export default ModalCreator;
