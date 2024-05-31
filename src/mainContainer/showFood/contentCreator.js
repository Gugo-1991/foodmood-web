import { useDispatch } from "react-redux";
import "./index.css";
import { toggleChecked } from "../../store/foods";
import { basketCreator } from "../../modal/modalContent/basket";

function ContentCreator({ img, name, price, checked, _id }) {
  const dispatch = useDispatch();
  return (
    <div
      className={checked ? "divcheckedon rounded-3" : "divcheckedof rounded-3"}
    >
      <div
        aria-hidden
        className="img rounded-3"
        style={{
          backgroundImage: `url(${
            img ||
            "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
          })`,
        }}
      >
        <input
          className="check rounded-3"
          id={_id}
          type="checkbox"
          checked={checked}
          onChange={() => dispatch(toggleChecked(_id))}
        />
      </div>

      <div className="name">{name}</div>

      <div className="price d-flex justify-content-between ">
        <span className="price">$ {price}</span>
        <div className="">
          <button
            className=" basket rounded-3 border border-warning"
            onClick={() => basketCreator(_id, price, name)}
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}
export default ContentCreator;
