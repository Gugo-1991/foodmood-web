import { Fragment, useState } from "react";
import "./index.css";
import "react-dropdown/style.css";
import UserBalanceCreator from "../showUserButton/userBalace";
import AdminInfoCreator from "./adminInfo";

function UserProfile() {
  const userName = localStorage.getItem("userName");
  const isLogin = localStorage.getItem("isLogin");

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
        {isLogin === "user" ? <UserBalanceCreator /> : <AdminInfoCreator />}
      </div>
    </Fragment>
  );
}

export default UserProfile;
