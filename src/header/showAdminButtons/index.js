import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { modalIsShow } from "../../store/showmodal";
import { deleteCard } from "../../store/foods";
import DropDown from "../dropdown";
function AdminModal() {
  const items = useSelector(function (state) {
    return state.foods.foods;
  });

  const selectedItems = items.filter((item) => {
    return item.checked === true;
  });
  const dispatch = useDispatch();

  return (
    <div className="adminmodal">
      {selectedItems.length > 0 ? (
        <button
          onClick={() => dispatch(deleteCard())}
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
            <button type="button" className="btn btn-success">
              Add user
            </button>
          </>
        }
      />
    </div>
  );
}
export default AdminModal;
