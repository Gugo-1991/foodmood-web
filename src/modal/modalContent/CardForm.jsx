import React, { useState } from "react";
import "./index.css";
import CustomModal from "../../context/modal/CustomModal";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import {
  useAddNewItemMutation,
  useChangeItemMutation,
} from "../../api/itemsApi";
import { Textarea } from "../../shared/TextArea";
import Switch from "../../shared/Switch";
import { Select } from "../../shared/Select";

const CardForm = ({ open, modalHandler, isEditMode, item }) => {
  const [values, setValues] = useState({ ...item });
  const [addNewCard] = useAddNewItemMutation();
  const [changeCard] = useChangeItemMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  console.log(values);

  const JEWERLY_CATEGORIES = [
    { label: "Ring", value: "ring" },
    { label: "Necklace", value: "necklace" },
    { label: "Bracelet", value: "bracelet" },
    { label: "Pendant", value: "pendant" },
  ];

  const handleSubmit = () => {
    isEditMode ? changeCard(values) : addNewCard(values);
    modalHandler();
  };
  return (
    <CustomModal open={open} modalHandler={modalHandler}>
      <div className="bg-light d-flex justify-content-center">
        <div className="  d-flexflex-column  p-3">
          <h3>{isEditMode ? "EDIT CARD" : "ADD NEW CARD"}</h3>

          <form onSubmit={() => handleSubmit()}>
            <Select
              label="Select Category"
              name="category"
              value={values.category}
              options={JEWERLY_CATEGORIES}
              onChange={handleChange}
            />
            <Input
              type="text"
              required
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <Input
              type="number"
              required
              label="Price"
              name="price"
              value={values.price}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="Old Price"
              name="oldPrice"
              value={values.oldPrice}
              onChange={handleChange}
            />
            <Input
              type="text"
              required
              label="URL"
              name="src"
              value={values.src}
              onChange={handleChange}
            />
            <Textarea
              label="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
            />

            <hr />
            <Switch
              label={"To Offer"}
              name={"offer"}
              checked={values.offer}
              onChange={() =>
                setValues({ ...values, ["offer"]: !values.offer })
              }
            />

            <div className="btn-group">
              <Button
                label={isEditMode ? "EDIT" : "ADD"}
                className=" btn-outline-primary"
              />
              <Button
                className="btn-outline-danger"
                label="CANCEL"
                onClick={modalHandler}
              />
            </div>
          </form>
        </div>
      </div>
    </CustomModal>
  );
};

export default CardForm;
