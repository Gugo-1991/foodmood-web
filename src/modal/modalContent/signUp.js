import React, { Fragment, useState } from "react";

import "react-responsive-modal/styles.css";
import { useDispatch } from "react-redux";
import { closeModal,  } from "../../store/showmodal";
import "./index.css";
import { addUser } from "../../store/users";

function SignUp() {
  const [user, setUser] = useState({});
  const [errorMassege, setErrorMassege] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");

  const dispatch = useDispatch();
  const close = () => {
    dispatch(closeModal());
    // dispatch(showLoginModal());
  };
  const submitAddUser = (user) => {
    if (
      user.name === undefined ||
      !/^[a-zA-Z\s]{2,25}$/.test(user.name) ||
      user.name[0] !== user.name[0].toUpperCase()
    ) {
      setErrorMassege(
        "Name should have initial capital and contain only letters."
      );
      setUser({ ...user, name: "" });
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
      setUser({ ...user, secondName: "" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(user.email)) {
      setErrorMassege("Invalid email format.");
      setUser({ ...user, email: "" });
      return;
    }

    if (comfirmPassword !== user.password) {
      setErrorMassege("Password and confirm password do not match.");
      return;
    }

    dispatch(addUser(user));
  };

  return (
    <div className="signupbox d-flex flex-column align-items-center">
      <h2> SIGN IN</h2>
      <input
        type="text"
        className="form-control "
        placeholder="Name..."
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Surname..."
        value={user.secondName}
        onChange={(e) => setUser({ ...user, secondName: e.target.value })}
      />
      <input
        type="Email"
        className="form-control "
        placeholder="email..."
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password..."
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        type="password"
        className="form-control "
        placeholder="Confirm password..."
        value={user.comfirmPassword}
        onChange={(e) => setComfirmPassword(e.target.value)}
      />
      {errorMassege ? (
        <>
          <p className="p-3 mb-2 bg-danger text-white">{errorMassege}</p>
          <button
            className="btn btn-outline-success"
            onClick={() => setErrorMassege("")}
          >
            ok
          </button>
        </>
      ) : null}
      <button
        className="btn btn-outline-dark"
        onClick={() => submitAddUser(user)}
      >
        Create account
      </button>
      <button type="button" className="btn btn-outline-danger" onClick={close}>
        Cancel
      </button>
    </div>
  );
}

export default SignUp;
