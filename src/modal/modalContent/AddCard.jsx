import React, { useState } from "react";
import "./index.css";
import CustomModal from "../../context/modal/CustomModal";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { useAddNewItemMutation } from "../../api/itemsApi";
import { Textarea } from "../../shared/TextArea";

const AddCard = ({ open, modalHandler }) => {
  const [addCard, setAddCard] = useState({});
  const [addNewCard] = useAddNewItemMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddCard({ ...addCard, [name]: value });
  };

  return (
    <CustomModal open={open} modalHandler={modalHandler}>
      <div className="bg-light d-flex justify-content-center  ">
        <div className="  d-flexflex-column  p-3">
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
            type="number"
            label="Old Price"
            name="oldPrice"
            onChange={handleChange}
          />
          <Input
            type="text"
            required
            label="URL"
            name="src"
            onChange={handleChange}
          />
          <Textarea
            label="Description"
            name="description"
            onChange={handleChange}
          />
          {/* <Input
            type="text"
            required
            label="Description"
            name="description"
            onChange={handleChange}
          /> */}
          <hr />

          <div className="btn-group">
            <Button
              label="ADD"
              className=" btn-outline-primary"
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
      </div>
    </CustomModal>
  );
};

export default AddCard;
