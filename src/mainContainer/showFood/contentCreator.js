import { useDispatch } from "react-redux";
import "./index.css";
import { toggleChecked } from "../../store/foods";

function ContentCreator({ img, name, price, checked, id }) {
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
          id={id}
          type="checkbox"
          checked={checked}
          onChange={() => dispatch(toggleChecked(id))}
        />
      </div>

      <div key={Math.random()} className="name">
        {name}
      </div>

      <div key={Math.random()} className="price">
        <span key={Math.random()} className="price">
          $ {price}
        </span>
      </div>
    </div>
  );
}
export default ContentCreator;
