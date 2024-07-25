import React, { useState } from "react";
import "./index.css";
import CustomModal from "../../context/modal/CustomModal";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

const AddBalance = ({ open, modalHandler }) => {
  const [value, setValue] = useState("");
  const userId = localStorage.getItem("userId");


  return (
    <CustomModal open={open} modalHandler={modalHandler}>
      <div className="bg-secondary d-flex justify-content-center ">
        <div className="addBalance d-flex align-items-center flex-column  p-3">
          <h2 className="text-primary">How much do you want to add?</h2>

          <Input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          {/* <div className="priceBlock d-flex">
          <button
            onClick={() => setValue(5)}
            className="pricebutton btn btn-outline-primary d-flex justify-content-center "
          >
            5
          </button>
          <button
            onClick={() => setValue(10)}
            className="pricebutton btn btn-outline-primary d-flex justify-content-center "
          >
            10
          </button>
          <button
            onClick={() => setValue(20)}
            className="pricebutton btn btn-outline-primary d-flex justify-content-center "
          >
            20
          </button>
        </div> */}
          <hr />
          <Button label="DEPOSIT" onClick={()=>{}} disabled={!value} />
          <Button
            label="CANCEL"
            className="btn-outline-danger mt-2"
            onClick={modalHandler}
          />

          {/* <button onClick={handleClose} className="btn btn-outline-success">
            Deposit
          </button> */}
        </div>
      </div>
    </CustomModal>
  );
};

export default AddBalance;
