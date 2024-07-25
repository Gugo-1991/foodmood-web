import React, { useState } from "react";
import "./index.css";
import CustomModal from "../../context/modal/CustomModal";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { useAddNewItemMutation } from "../../api/itemsApi";

const AddCard = ({ open, modalHandler }) => {
  const [addCard, setAddCard] = useState({});
  const [addNewCard] = useAddNewItemMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddCard({ ...addCard, [name]: value });
  };

  return (
    <CustomModal open={open} modalHandler={modalHandler}>
      <div className="bg-secondary d-flex justify-content-center ">
        <div className="cardModal d-flex align-items-center flex-column  p-3">
          <h3>ADD NEW CARD</h3>

          <Input
            type="text"
            required
            label="Name"
            name="name"
            onChange={handleChange}
          />
          <Input
            type="number"
            required
            label="Price"
            name="price"
            onChange={handleChange}
          />
          <Input
            type="text"
            required
            label="URL"
            name="img"
            onChange={handleChange}
          />

          <hr />

          <Button
            label="ADD"
            className="mb-2 btn-outline-primary"
            onClick={() => {
              addNewCard(addCard);
              modalHandler();
            }}
          />
          <Button
            className="btn-outline-danger"
            label="CANCEL"
            onClick={modalHandler}
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default AddCard;
