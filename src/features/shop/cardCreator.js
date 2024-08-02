import "./index.css";
import Edit from "../../utils/Pen";
import {
  useEditCardModal,
  useDeleteCardModal,
} from "../../context/modal/useModals";
import Delete from "../../utils/trash";
const Card = ({ card }) => {
  const editCard = useEditCardModal({});
  const deleteCard = useDeleteCardModal({});

  return (
    <div className={"card-container "}>
      <div
        aria-hidden
        className="img rounded-4"
        style={{
          backgroundImage: `url(${
            card.img ||
            "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5waMQz.jpg"
          })`,
        }}
      >
        <div className="actions align-items-center  ">
          <Delete onClick={() => deleteCard.attachHandler({ ...card })} />
          <Edit onClick={() => editCard.attachHandler({ ...card })} />
        </div>
      </div>

      <div className="name">{card.name ?? ""}</div>

      <div className="price d-flex justify-content-between">
        <span className="price">$ {card?.price ?? ""}</span>
      </div>
    </div>
  );
};
export default Card;
