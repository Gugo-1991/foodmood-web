import { Modal } from "react-responsive-modal";
import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/showmodal";
import "./index.css";
import { addFood } from "../../store/foods";

function AddCard() {
  const [cardModal, setOpen] = useState(true);

  const closeAddcardModal = () => setOpen(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();

  return (
    <Modal
      open={cardModal}
      onClose={() => {
        closeAddcardModal();
        dispatch(closeModal());
      }}
      center
      classNames={{
        overlayAnimationIn: "customEnterOverlayAnimation",
        overlayAnimationOut: "customLeaveOverlayAnimation",
        modalAnimationIn: "customEnterModalAnimation",
        modalAnimationOut: "customLeaveModalAnimation",
      }}
      animationDuration={800}
    >
      <div className="cardModal d-flex align-items-center flex-column ">
        <h3>ADD NEW CARD</h3>
        <input
          required
          placeholder=" type name..."
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
        />
        <input
          required
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          placeholder=" type price..."
          type="number"
        />
        <input
          required
          onChange={(e) => setImg(e.target.value)}
          className="form-control"
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
          className="btn btn-outline-dark "
        >
          Add
        </button>
        <button
          onClick={() => dispatch(closeModal())}
          type="button"
          className="btn btn-outline-danger"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default AddCard;
