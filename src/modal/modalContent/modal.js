import { Modal } from "react-responsive-modal";

import React, { useState } from "react";
import { showLoginModal } from "../../store/showmodal";
import { useDispatch } from "react-redux";

function Showmodal({ Children }) {
  const dispatch = useDispatch();

  const [loginModalOpen, setOpen] = useState(true);
  const close = () => {
    dispatch(showLoginModal());
  };
  return (
    <>
      <Modal
        open={loginModalOpen}
        onClose={close}
        center
        classNames={{
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
