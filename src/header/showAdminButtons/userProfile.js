import { Fragment, useState } from "react";
import "./index.css";
import "react-dropdown/style.css";
import UserBalanceCreator from "../showUserButton/userBalace";
import AdminInfoCreator from "./adminInfo";
import { useDispatch } from "react-redux";
import { showBasketModal } from "../../store/showmodal";
function UserProfile() {
  const userName = localStorage.getItem("userName");
  const isLogin = localStorage.getItem("isLogin");
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);
  return (
    <Fragment>
      <div className="total d-flex ">
        <div
          className="adminprofile d-flex align-items-center flex-column   "
          onMouseEnter={() => setIsShown(true)}>
          <div
            className="adminphoto"
            onMouseEnter={() => setIsShown(true)}></div>
          <h6>{userName}</h6>
        </div>
        <div
          className="busket"
          onClick={() => dispatch(showBasketModal())}></div>
        {isLogin === "user" ? <UserBalanceCreator /> : <AdminInfoCreator />}
      </div>
    </Fragment>
  );
}

export default UserProfile;
