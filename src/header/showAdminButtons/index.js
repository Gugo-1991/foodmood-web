import { useDispatch } from "react-redux";
import "./index.css";
import { exitAll } from "../../store/users";
import { modalIsShow } from "../../store/showmodal";
import { deleteCard } from "../../store/foods";
import DropDown from "../dropdown";
function AdminModal() {
  const dispatch = useDispatch();

  return (
    <div className="adminmodal">
      <DropDown
        name={"Tools"}
        children={
          <>
            <button
              onClick={() => dispatch(modalIsShow())}
              type="button"
              className="btn btn-warning">
              Add new card
            </button>
            <button
              onClick={() => dispatch(deleteCard())}
              type="button"
              className="btn btn-danger">
              Delete card
            </button>
            <button type="button" className="btn btn-warning">
              Add user
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => dispatch(exitAll())}>
              EXIT
            </button>
          </>
        }
      />
    </div>
  );
}
export default AdminModal;
