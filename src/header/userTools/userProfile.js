import "./index.css";
import "react-dropdown/style.css";
import UserBalanceCreator from "./userBalace";
import AdminInfoCreator from "../adminTools/adminInfo";
import { useDispatch } from "react-redux";
import { showBasketModal } from "../../store/showmodal";

function UserProfile() {
  const userName = localStorage.getItem("userName");
  const isLogin = localStorage.getItem("isLogin");
  const dispatch = useDispatch();
  return (
    <div className="total d-flex ">
      <div
        aria-hidden
        className="adminprofile d-flex align-items-center flex-column   "
      >
        <div aria-hidden className="adminphoto"></div>
        <h6>{userName}</h6>
      </div>
      <div
        aria-hidden
        className="busket"
        onClick={() => dispatch(showBasketModal())}
      ></div>
      {isLogin === "user" ? <UserBalanceCreator /> : <AdminInfoCreator />}
    </div>
  );
}

export default UserProfile;
