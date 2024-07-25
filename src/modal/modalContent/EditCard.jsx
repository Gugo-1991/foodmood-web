import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import "./index.css";
import CustomModal from "../../context/modal/CustomModal";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { useChangeItemMutation } from "../../api/itemsApi";

const EditCard = ({ open, modalHandler, item }) => {
  const [toChangeValues, setToChangeValues] = useState({ ...item });
  const [change, setChange] = useState(true);
  const [changeCard] = useChangeItemMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setToChangeValues({ ...toChangeValues, [name]: value });
  };
  return (
    <CustomModal open={open} modalHandler={modalHandler}>
      <>
        {change ? (
          <div className="bg-secondary d-flex justify-content-center ">
            <div className="editCard d-flex align-items-center flex-column  p-3">
              <h3>EDIT CARD</h3>
              <Input
                name="name"
                type="text"
                label="NAME"
                onChange={handleChange}
                value={toChangeValues.name}
              />
              <Input
                name="price"
                type="number"
                label="PRICE"
                onChange={handleChange}
                value={toChangeValues.price}
              />
              <Input
                name="img"
                type="text"
                label="URL"
                onChange={handleChange}
                value={toChangeValues.img}
              />
              <hr></hr>

              <Button
                className=" btn-warning"
                label="CHANGE"
                onClick={() => setChange(false)}
              />
            </div>
          </div>
        ) : (
          <div className="bg-secondary d-flex justify-content-center ">
            <div className="editCard d-flex align-items-center flex-column  p-3">
              <hr></hr>
              <h5 className="text-danger">Are you sure? </h5>
              <h5>Confirmation will save</h5>

              <span>{`NAME - ${toChangeValues.name}`}</span>
              <span>{`PRICE - ${toChangeValues.price}`}</span>
              <hr />

              <Button
                label="SAVE"
                onClick={() => {
                  changeCard(toChangeValues);
                  modalHandler();
                }}
              />
              <Button
                className="btn-outline-danger mt-2"
                label="CANCEL"
                onClick={modalHandler}
              />
            </div>
          </div>
        )}
      </>
    </CustomModal>
  );
};

export default EditCard;
