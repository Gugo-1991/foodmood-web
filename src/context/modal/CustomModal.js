import React, { memo } from "react";
import { Modal } from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import "./CustomModal.scss";

const CustomModal = ({
  open,
  modalHandler,
  children,
  modalClassNames = "",
}) => {
  const closeIcon = <i className="btn-close pt-0"></i>;

  return (
    <Modal
      open={open}
      onClose={modalHandler}
      center
      classNames={{
        modal: `${modalClassNames} custom-modal  modal-dialog-scrollable `,
        overlay: "overlay" || "custom-overlay",
        closeButton: "close",
        modalAnimationIn: "customEnterModalAnimation",
      }}
      focusTrapped={false}
      animationDuration={400}
      closeIcon={closeIcon}
    >
      <div className="modal-content mb-2">{children}</div>
    </Modal>
  );
};

export default memo(CustomModal);
