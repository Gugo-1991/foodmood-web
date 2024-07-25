import "./index.css";
import Edit from "../../utils/Pen";
import { useEditCardModal } from "../../context/modal/useModals";
const Card = ({ card }) => {

  const editCard = useEditCardModal({});
  return (
    <div
      className={false ? "divcheckedon rounded-3" : "divcheckedof rounded-3"}
    >
      <div
        aria-hidden
        className="img rounded-3"
        style={{
          backgroundImage: `url(${
            card.img ||
            "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5waMQz.jpg"
          })`,
        }}
      >
        {/* <input
          className="check rounded-3"
          id={_id}
          type="checkbox"
          checked={checked}
          // onChange={() => dispatch(toggleChecked(_id))}
        /> */}
      </div>

      <div className="name">{card.name ?? ""}</div>

      <div className="price d-flex justify-content-between ">
        <span className="price">$ {card?.price ?? ""}</span>
        <Edit message="Edit" onClick={() => editCard.attachHandler({...card})} />
      </div>
    </div>
  );
};
export default Card;
