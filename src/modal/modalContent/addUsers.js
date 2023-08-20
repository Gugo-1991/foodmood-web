import { useDispatch } from "react-redux";
import { closeModal } from "../../store/showmodal";
import { Modal } from "react-responsive-modal";
import React, { Fragment, useState } from "react";
import "react-responsive-modal/styles.css";
import "./index.css";

function AddUsers() {
  const dispatch = useDispatch();
  const closeAddModal = () => setOpen(false);
  const [ModalOpen, setOpen] = useState(true);
  const [checked, setchecked] = useState(true);

  return (
    <Fragment>
      <Modal
        open={ModalOpen}
        onClose={() => {
          closeModal();
          dispatch(closeModal());
        }}
        center
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}>
        <Fragment>
          <form className="add d-flex align-items-center flex-column">
            <input className="cardinput rounded-3" placeholder="Name..." />
            <input
              className="cardinput rounded-3"
              placeholder="Second Name..."
            />
            <input className="cardinput rounded-3" placeholder="email..." />
            <input className="cardinput rounded-3" placeholder="Password" />

            <form
              className="p-2 w-50 text-dark "
              onChange={() => setchecked(!checked)}>
              <input
                checked={checked}
                type="radio"
                id="admin"
                value={"admin"}
              />
              <label for="admin"> admin</label> <br />
              <input checked={!checked} type="radio" id="user" value={"user"} />
              <label for="admin"> user</label>
            </form>
            <button className="btn btn-outline-dark"> Add user</button>
            <button
              onClick={() => dispatch(closeModal())}
              type="button"
              className="btn btn-outline-danger">
              Cancel
            </button>
          </form>
        </Fragment>
      </Modal>
    </Fragment>
  );
}

export default AddUsers;
