import { useDispatch } from "react-redux";
import { showSigninModal } from "../../../store/showmodal";

function SignUpButton() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(showSigninModal())}
        type="button"
        className="btn btn-light">
        Sign in
      </button>
    </>
  );
}

export default SignUpButton;
