import { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addFood } from "../../store/foods";
import { closeModal, modalIsShow } from "../../store/showmodal";

function AddCard() {
  const state = useSelector(function (state) {
    return state.foods;
  });

  const modal = useSelector(function (state) {
    return state.modal.showmodal;
  });
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <input
        required
        placeholder=" type name..."
        onChange={(e) => setName(e.target.value)}
        className="cardinput"
        type="text"
      />
      <input
        required
        onChange={(e) => setPrice(e.target.value)}
        className="cardinput"
        placeholder=" type price..."
        type="number"
      />
      <input
        required
        onChange={(e) => setImg(e.target.value)}
        className="cardinput"
        placeholder=" create img url..."
        type="text"
      />
      <div className="button">
        <button
          onClick={() =>
            name && price
              ? dispatch(addFood({ name, price, img })) &&
                dispatch(closeModal())
              : alert("fill in")
          }
          type="button"
          className="btn btn-outline-dark">
          Add
        </button>
        <button
          onClick={() => dispatch(closeModal())}
          type="button"
          className="btn btn-outline-danger">
          Cancel
        </button>
      </div>
    </>
  );
}

export default AddCard;
