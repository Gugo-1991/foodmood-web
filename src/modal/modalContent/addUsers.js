import { useDispatch } from "react-redux";
import "./index.css";
import { closeModal } from "../../store/showmodal";

function AddUsers() {
  const dispatch = useDispatch();
  return (
    <>
      <input className="cardinput" placeholder="email..." />
      <input className="cardinput" placeholder="username..." />
      <input className="cardinput" placeholder="password..." />
      <button className="btn btn-outline-dark"> Add user</button>
      <button
        onClick={() => dispatch(closeModal())}
        type="button"
        className="btn btn-outline-danger">
        Cancel
      </button>
    </>
  );
}

export default AddUsers;
