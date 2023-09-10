import { useDispatch } from "react-redux";
import { closeModal } from "../../store/showmodal";
import { Modal } from "react-responsive-modal";
import React, { Fragment, useState } from "react";
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
    <Fragment>
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
        animationDuration={800}>
        <Fragment>
          <form className="add d-flex align-items-center flex-column">
            <input
              className="cardinput rounded-3"
              placeholder="Name..."
              type="text"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              className="cardinput rounded-3"
              placeholder="Second Name..."
              type="text"
              onChange={(e) => setUser({ ...user, secondName: e.target.value })}
            />
            <input
              className="cardinput rounded-3"
              placeholder="email..."
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              className="cardinput rounded-3"
              placeholder="Password"
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <form
              className="p-2 w-50 text-dark "
              onChange={() => setchecked(!checked)}>
              <input
                checked={checked}
                type="radio"
                id="admin"
                value={"admin"}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              />
              <label for="admin"> admin</label> <br />
              <input
                checked={!checked}
                type="radio"
                id="user"
                value={"user"}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              />
              <label for="admin"> user</label>
            </form>
            {errorMassege ? (
              <>
                <p className="p-3 mb-2 bg-danger text-white">{errorMassege}</p>{" "}
                <button
                  className="btn btn-outline-success"
                  onClick={() => setErrorMassege("")}>
                  ok
                </button>
              </>
            ) : null}
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => submitAddUser(user)}>
              Add user
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => dispatch(closeModal())}>
              Cancel
            </button>
          </form>
        </Fragment>
      </Modal>
    </Fragment>
  );
}

export default AddUsers;
