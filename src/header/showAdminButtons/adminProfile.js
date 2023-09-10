import { Fragment } from "react";
import "./index.css";

function AdminFrofile() {
  const userName = localStorage.getItem("userName");
  return (
    <Fragment>
      <div className="adminprofile d-flex align-items-center flex-column   ">
        <div className="adminphoto"></div>
        <h6>{userName}</h6>
      </div>
    </Fragment>
  );
}

export default AdminFrofile;
