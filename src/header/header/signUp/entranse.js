import { useDispatch, useSelector } from "react-redux";
import { showLoginModal, showSigninModal } from "../../../store/showmodal";

import "./index.css";

function SignUpButton() {
  const dispatch = useDispatch();
  const login = useSelector(function (state) {
    return state.modal.showLoginModal;
  });

  if (!login) {
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
  } else return <></>;
}

export default SignUpButton;
