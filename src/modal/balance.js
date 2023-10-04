import React, { Fragment, useState } from "react";
import "./modalContent/index.css";
import api from "../api/foodmoodApi";
import { closeModal } from "../store/showmodal";
import { useDispatch } from "react-redux";

function Balance() {
  const [value, setValue] = useState("");
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();

  const addBalance = async () => {
    try {
      const response = await api.put(`/accounts/${userId}/${value}`);
      if (response.status === 200) {
      } else {
        console.log("Error updating balance");
      }
    } catch (error) {
      console.error("Error updating balance:", error);
    }
  };
  const handleClose = () => {
    addBalance();
    dispatch(closeModal());
    window.location.reload();
  };
  return (
    <Fragment>
      <div className="userBalance d-flex flex-column align-items-center">
        <h2 className="text-primary">How much do you want to add?</h2>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="priceBlock d-flex">
          <button
            onClick={() => setValue(5)}
            className="pricebutton btn btn-outline-primary d-flex justify-content-center ">
            5
          </button>
          <button
            onClick={() => setValue(10)}
            className="pricebutton btn btn-outline-primary d-flex justify-content-center ">
            10
          </button>
          <button
            onClick={() => setValue(20)}
            className="pricebutton btn btn-outline-primary d-flex justify-content-center ">
            20
          </button>
        </div>

        <button onClick={handleClose} className="btn btn-outline-success">
          Deposit
        </button>
      </div>
    </Fragment>
  );
}

export default Balance;
