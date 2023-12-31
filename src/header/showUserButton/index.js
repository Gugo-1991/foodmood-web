import { useDispatch } from "react-redux";
import { exitAll } from "../../store/users";
import UseerCard from "../header/usercards";
import { showLoginModal } from "../../store/showmodal";

function ShowUserButton() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="adminmodal d-flex flex-md-row-reverse ">
        <UseerCard />
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            localStorage.clear();
            dispatch(exitAll());
            dispatch(showLoginModal());
          }}>
          EXIT
        </button>
      </div>
    </>
  );
}

export default ShowUserButton;
