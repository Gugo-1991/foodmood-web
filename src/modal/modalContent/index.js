import { useDispatch } from "react-redux";
import { closeModal } from "../../store/showmodal";
import "./index.css";

function Modal({ chidren }) {
  return (
    <>
      <div className="general">
        <div className="card">{chidren}</div>
      </div>
    </>
  );
}
export default Modal;
