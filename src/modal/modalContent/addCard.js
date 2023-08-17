import { Modal } from "react-responsive-modal";
import React, { Fragment, useState } from "react";
import "react-responsive-modal/styles.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/showmodal";
import "./index.css";
import { addFood } from "../../store/foods";

function AddCard() {
  const [loginModalOpen, setOpen] = useState(true);

  const closeLoginModal = () => setOpen(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Modal
        open={loginModalOpen}
        onClose={() => {
          closeLoginModal();
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
        <div className="add d-flex align-items-center flex-column ">
          <input
            required
            placeholder=" type name..."
            onChange={(e) => setName(e.target.value)}
            className="cardinput rounded-3"
            type="text"
          />
          <input
            required
            onChange={(e) => setPrice(e.target.value)}
            className="cardinput rounded-3"
            placeholder=" type price..."
            type="number"
          />
          <input
            required
            onChange={(e) => setImg(e.target.value)}
            className="cardinput rounded-3"
            placeholder=" create img url..."
            type="text"
          />
          <button
            onClick={() =>
              name && price
                ? dispatch(addFood({ name, price, img })) &&
                  dispatch(closeModal())
                : alert("fill in")
            }
            type="button"
            className="btn btn-outline-dark ">
            Add
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            type="button"
            className="btn btn-outline-danger">
            Cancel
          </button>
        </div>
      </Modal>
    </Fragment>
  );
}

export default AddCard;
