import { useDispatch } from "react-redux";
import { closeModal } from "../../store/showmodal";
import { Modal } from "react-responsive-modal";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import "./index.css";
import { addUser } from "../../store/users";

function AddUsers() {
  const dispatch = useDispatch();
  const [errorMassege, setErrorMassege] = useState("");
  const [user, setUser] = useState({
    role: "admin",
  });
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [ModalOpen, setOpen] = useState(true);
  const [checked, setchecked] = useState(true);

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

    dispatch(addUser(user));
    dispatch(closeModal());
  };
  return (
    <Modal
      open={ModalOpen}
      onClose={() => dispatch(closeModal())}
      center
      classNames={{
        overlayAnimationIn: "customEnterOverlayAnimation",
        overlayAnimationOut: "customLeaveOverlayAnimation",
        modalAnimationIn: "customEnterModalAnimation",
        modalAnimationOut: "customLeaveModalAnimation",
      }}
      animationDuration={800}
    >
      <form className="newUserModal d-flex align-items-center flex-column">
        <h3>ADD USER</h3>
        <input
          className="form-control"
          placeholder="Name..."
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Second Name..."
          type="text"
          onChange={(e) => setUser({ ...user, secondName: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="email..."
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Password"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <form
          className="p-2 w-50 text-dark "
          onChange={() => setchecked(!checked)}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="admin"
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              checked={checked}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Admin{" "}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="user"
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              checked={!checked}
            />
            <label class="form-check-label" for="flexCheckChecked">
              User{" "}
            </label>
          </div>
        </form>
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
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => submitAddUser(user)}
        >
          Add user
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => dispatch(closeModal())}
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
}

export default AddUsers;
