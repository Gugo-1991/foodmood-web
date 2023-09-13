import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import {
  modalIsShow,
  showAddUsersModal,
  showEditModal,
  showLoginModal,
} from "../../store/showmodal";
import { deleteCard } from "../../store/foods";
import DropDown from "../dropdown";
import { exitAll } from "../../store/users";

function AdminModal() {
  const dispatch = useDispatch();

  const items = useSelector(function (state) {
    return state.foods.foods;
  });

  const selectedItems = items.filter((item) => {
    return item.checked === true;
  });
  const id = selectedItems[0]?._id;

  return (
    <div className="adminmodal d-flex flex-sm-row-reverse ">
      {selectedItems.length === 1 ? (
        <button
          onClick={() => dispatch(showEditModal())}
          type="button"
          className="btn btn-dark">
          Edit
        </button>
      ) : null}
      {selectedItems.length > 0 ? (
        <button
          onClick={() => dispatch(deleteCard(id))}
          type="button"
          className="btn btn-danger">
          Delete card
        </button>
      ) : null}

      <DropDown
        name={"Tools"}
        children={
          <>
            <button
              onClick={() => dispatch(modalIsShow())}
              type="button"
              className="btn btn-success">
              Add new card
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => dispatch(showAddUsersModal())}>
              Add user
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                localStorage.clear();
                dispatch(exitAll());
                dispatch(showLoginModal());
              }}>
              EXIT
            </button>
          </>
        }
      />
    </div>
  );
}
export default AdminModal;
