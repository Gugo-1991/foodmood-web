import { useDispatch } from "react-redux";
import { closeLoginModal, closeModal } from "../../store/showmodal";
import "./index.css";
function SigniInUser() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="signiindiv">
        <input className="signin" placeholder="name..." />
        <input className="signin" placeholder="email..." />
        <input className="signin" placeholder="password..." />
        <input className="signin" placeholder="confirm password..." />
      </div>

      <button className="btn btn-outline-dark"> Create account </button>
      <button
        onClick={() => dispatch(closeLoginModal())}
        type="button"
        className="btn btn-outline-danger">
        Cancel
      </button>
    </>
  );
}

export default SigniInUser;
