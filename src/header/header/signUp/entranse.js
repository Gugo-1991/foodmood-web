import { useDispatch } from "react-redux";
import { showLoginModal, showSigninModal } from "../../../store/showmodal";

import "./index.css";

function SignUpButton() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(showLoginModal())}
        type="button"
        className="btn btn-info">
        Login
      </button>
      <button
        onClick={() => dispatch(showSigninModal())}
        type="button"
        className="btn btn-success">
        Sign in
      </button>
    </>
  );
}

export default SignUpButton;
