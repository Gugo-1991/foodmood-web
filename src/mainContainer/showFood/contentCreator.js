import { useDispatch } from "react-redux";
import "./index.css";
import { toggleChecked } from "../../store/foods";
import { basketCreator, basketsItems } from "../../modal/modalContent/basket";

function ContentCreator({ img, name, price, checked, _id }) {
  const dispatch = useDispatch();
  return (
    <div
      key={Math.random()}
      className={checked ? "divcheckedon rounded-3" : "divcheckedof rounded-3"}>
      <div
        key={Math.random()}
        className="img rounded-3"
        style={{
          backgroundImage: `url(${
            img
              ? img
              : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
          })`,
        }}>
        <input
          className="check rounded-3"
          key={Math.random()}
          id={_id}
          type="checkbox"
          checked={checked}
          onChange={() => dispatch(toggleChecked(_id))}
        />
      </div>

      <div key={Math.random()} className="name">
        {name}
      </div>

      <div
        key={Math.random()}
        className="price d-flex justify-content-between ">
        <span key={Math.random()} className="price">
          $ {price}
        </span>
        <div className="">
          <button
            className=" basket rounded-3 border border-warning"
            onClick={() => basketCreator(_id, price, name)}>
            add
          </button>
        </div>
      </div>
    </div>
  );
}
export default ContentCreator;
