import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const LoginModal = ({
  loginModalOpen,
  closeLoginModal,
  onOpenModal,
  handleSubmit,
  setLogin,
  setPassword,
  children,
}) => {
  return (
    <div>
      <button className="btn btn-success w-100" onClick={onOpenModal}>
        Login/Sign up
      </button>
      <Modal open={loginModalOpen} onClose={closeLoginModal} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>

        <h1>Welcome</h1>
        <form className="loginform" action="form.php" onSubmit={handleSubmit}>
          <input
            onSubmit={handleSubmit}
            className="login rounded-3"
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Enter your login"
          />
          <input
            className="password rounded-3"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
          <button className="btn btn-primary">Login</button>
          {children}
        </form>
      </Modal>
    </div>
  );
};

export default LoginModal;
