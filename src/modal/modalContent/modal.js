import { Modal } from "react-responsive-modal";
import "./index.css";
import React from "react";
import { closeModal, showLoginModal } from "../../store/showmodal";
import { useDispatch } from "react-redux";

function Showmodal({ Children, style }) {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <Modal
        open={true}
        onClose={close}
        center
        classNames={{
          modal: style,
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
