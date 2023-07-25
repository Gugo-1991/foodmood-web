import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import Modal from "./modalContent";
import { useSelector } from "react-redux";

function ModalCreator({ children }) {
  const Modalelement = document.getElementById("modal");
  const element = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    Modalelement.appendChild(element);
    return () => Modalelement.removeChild(element);
  }, []);
  return createPortal(<Modal chidren={children} />, element);
}

export default ModalCreator;
