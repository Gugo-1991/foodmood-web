import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import "./index.css";
import CustomModal from "../../context/modal/CustomModal";
import Input from "../../shared/Input";
import Switch from "../../shared/Switch";
import Button from "../../shared/Button";
import { useAddNewUserMutation } from "../../api/userApi";

const AddNewUser = ({ open, modalHandler }) => {
  const [addUser] = useAddNewUserMutation();
  const [errorMassege, setErrorMassege] = useState("");
  const [newUserValues, setNewUserValues] = useState({
    role: "admin",
  });

  const submitAddUser = (user) => {
    if (
      user.name === undefined ||
      !/^[a-zA-Z\s]{2,25}$/.test(user.name) ||
      user.name[0] !== user.name[0].toUpperCase()
    ) {
      setErrorMassege(
        "Name should have initial capital and contain only letters."
      );
      setNewUserValues({ ...user, name: "" });
      return;
    }
    if (
      user.secondName === undefined ||
      !/^[a-zA-Z\s]{2,25}$/.test(user.secondName) ||
      user.secondName[0] !== user.secondName[0].toUpperCase()
    ) {
      setErrorMassege(
        "Secondname should have initial capital and contain only letters."
      );
      setNewUserValues({ ...user, secondName: "" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(user.email)) {
      setErrorMassege("Invalid email format.");
      setNewUserValues({ ...user, email: "" });
      return;
    }
    addUser(user);
    modalHandler();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserValues({ ...newUserValues, [name]: value });
  };

  const selctRole = (e) => {
    const { name } = e.target;

    setNewUserValues({ ...newUserValues, role: name });
  };
  return (
    <CustomModal open={open} modalHandler={modalHandler}>
      <div className="bg-secondary d-flex justify-content-center ">
        <div className="addUser d-flex align-items-center flex-column  p-3">
          <h3>ADD USER</h3>

          <Input label="NAME" name="name" type="text" onChange={handleChange} />
          <Input
            label="LAST NAME"
            name="secondName"
            type="text"
            onChange={handleChange}
          />
          <Input
            label="EMAIL"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <Input
            label="PASSWORD"
            name="password"
            type="password"
            onChange={handleChange}
          />

          <span>
            <Switch
              name="admin"
              label="ADMIN"
              onChange={selctRole}
              checked={newUserValues.role === "admin"}
            />
            <Switch
              name="user"
              label="USER"
              onChange={selctRole}
              checked={newUserValues.role === "user"}
            />
          </span>
          {errorMassege ? (
            <>
              <p className="p-3 mb-2 bg-danger text-white">{errorMassege}</p>{" "}
              <button
                className="btn btn-outline-success"
                onClick={() => setErrorMassege("")}
              >
                ok
              </button>
            </>
          ) : null}
          <hr />
          <Button label="ADD " onClick={() => submitAddUser(newUserValues)} />
          <Button
            label="CANCEL"
            className="btn-outline-danger mb-2 mt-2"
            onClick={modalHandler}
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default AddNewUser;
