import { Modal } from "react-responsive-modal";
import "./index.css";
import React from "react";
import { closeModal } from "../../store/showmodal";
import { useDispatch } from "react-redux";

function Showmodal({ Children, close }) {
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={true}
        onClose={close}
        center
        classNames={{
          modal: "rounded-3 w-25",
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}>
        {Children}
      </Modal>
    </>
  );
}
export default Showmodal;
