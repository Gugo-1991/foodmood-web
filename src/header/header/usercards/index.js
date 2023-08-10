import { useSelector } from "react-redux";
import "./index.css";

function UseerCard() {
  const items = useSelector(function (state) {
    return state.foods.foods;
  });
  const selectedItems = items.filter((item) => {
    return item.checked === true;
  });

  return (
    <>
      <div className="carddiv rounded-3">
        <span>{selectedItems.length}</span>
        <p>selected </p>
        <span>{items.length}</span>
      </div>
    </>
  );
}
export default UseerCard;
