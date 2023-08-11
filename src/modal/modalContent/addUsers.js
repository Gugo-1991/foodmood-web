import { useDispatch } from "react-redux";
import "./index.css";
import { closeModal } from "../../store/showmodal";

function AddUsers() {
  const dispatch = useDispatch();
  return (
    <>
      <input className="cardinput rounded-3" placeholder="email..." />
      <input className="cardinput rounded-3" placeholder="username..." />
      <input className="cardinput rounded-3" placeholder="password..." />
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
