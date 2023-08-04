import { useDispatch } from "react-redux";
import { exitAll } from "../../store/users";
import UseerCard from "../header/usercards";
import { showLoginModal } from "../../store/showmodal";

function ShowUserButton() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="adminmodal">
        <UseerCard />
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => dispatch(exitAll()) && dispatch(showLoginModal())}>
          EXIT
        </button>
      </div>
    </>
  );
}

export default ShowUserButton;
