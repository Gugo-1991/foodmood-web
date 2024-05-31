import { useDispatch, useSelector } from "react-redux";
import { showEditModal, showLoginModal } from "../../store/showmodal";
import { deleteCard } from "../../store/foods";
import DropDown from "../dropdown";
import { exitAll } from "../../store/users";
import AdminTools from "../settings/adminTools";
import UserTools from "./userTools";

function Settings() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.foods.foods);

  const selectedItems = items.filter((item) => item.checked === true);
  const id = selectedItems[0]?._id;
  const user = localStorage.getItem("isLogin");
  return (
    <div className="adminmodal d-flex flex-sm-row-reverse">
      <DropDown name="Settings">
        {user === "admin" && <AdminTools />}
        {user === "user" && <UserTools />}

        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            localStorage.clear();
            dispatch(exitAll());
            dispatch(showLoginModal());
          }}
        >
          EXIT
        </button>
      </DropDown>
      {selectedItems.length === 1 ? (
        <button
          onClick={() => dispatch(showEditModal())}
          type="button"
          className="btn btn-dark"
        >
          Edit
        </button>
      ) : null}
      {selectedItems.length > 0 ? (
        <button
          onClick={() => dispatch(deleteCard(id))}
          type="button"
          className="btn btn-danger"
        >
          Delete card
        </button>
      ) : null}
    </div>
  );
}

export default Settings;
