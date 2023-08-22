import React, { Fragment } from "react";
import "react-responsive-modal/styles.css";
import { useDispatch } from "react-redux";
import { showLoginModal } from "../../store/showmodal";
import "./index.css";
function SignUp() {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(showLoginModal());
  };
  return (
    <Fragment>
      <div className="signupbox d-flex flex-column align-items-center">
        <input className="signup rounded-3" placeholder="name..." />
        <input className="signup rounded-3" placeholder="email..." />
        <input className="signup rounded-3" placeholder="password..." />
        <input className="signup rounded-3" placeholder="confirm password..." />
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
