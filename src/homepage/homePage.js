import React, { Fragment, useState } from "react";
import "./index.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useDispatch } from "react-redux";
import { loginstate } from "../store/users";
import { showSigninModal } from "../store/showmodal";

function HomePage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loginModalOpen, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const closeLoginModal = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login && password) {
      dispatch(loginstate({ login, password }));
      closeLoginModal();
    }
  };

  const handleSignIn = () => {
    dispatch(showSigninModal());
    closeLoginModal();
  };

  return (
    <Fragment>
      <div className=" bg d-flex ">
        {loginModalOpen ? null : (
          <div className="mt-1 d-flex flex-column align-items-center rounded-3 bg-light p-2 text-dark bg-opacity-10">
            <h6>Foodmood</h6>
            <div>
              <button className="btn btn-success w-100" onClick={onOpenModal}>
                Login/Sign up
              </button>
            </div>
          </div>
        )}
      </div>
      <Modal
        open={loginModalOpen}
        onClose={closeLoginModal}
        center
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}>
        <form className="loginform" action="form.php" onSubmit={handleSubmit}>
          <h2> welcome</h2>
          <input
            className="login rounded-3"
            onChange={(e) => setLogin(e.target.value)}
            type="email"
            placeholder="Enter your Email"
          />
          <input
            className="password rounded-3"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter your password"
          />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <button className="btn btn-success" onClick={handleSignIn}>
            Signin
          </button>
        </form>
      </Modal>
    </Fragment>
  );
}

export default HomePage;
