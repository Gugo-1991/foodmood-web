import React, { Fragment, useState } from "react";
import "react-responsive-modal/styles.css";
import { useDispatch } from "react-redux";
import { showLoginModal } from "../../store/showmodal";

function SignUp() {
  const [signUpModalOpen, setOpen] = useState(true);

  const closeSignUpModal = () => setOpen(false);

  const dispatch = useDispatch();

  const close = () => {
    closeSignUpModal();
    dispatch(showLoginModal());
  };
  return (
    <Fragment>
      <div className="signupbox d-flex flex-column align-items-center">
        <input className="signup" placeholder="name..." />
        <input className="signup" placeholder="email..." />
        <input className="signup" placeholder="password..." />
        <input className="signup" placeholder="confirm password..." />
        <button className="btn btn-outline-dark"> Create account </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={close}>
          Cancel
        </button>
      </div>
    </Fragment>
  );
}

export default SignUp;
