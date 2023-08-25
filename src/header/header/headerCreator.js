import { useSelector } from "react-redux";
import "./style.css";
import AdminModal from "../showAdminButtons";
import Time from "./signUp/clock";
import AdminFrofile from "../showAdminButtons/adminProfile";

function Fixheader() {
  const user = useSelector(function (state) {
    return state.isLogin.isLogin;
  });

  return (
    <>
      <section className="header d-flex position-fixed w-100  align-items-center ">
        <div className="admin2 d-flex  w-100  align-items-center">
          {user === "admin" ? <AdminModal /> : <Time />}
          {user === "admin" ? <AdminFrofile /> : null}
        </div>
      </section>
    </>
  );
}
export default Fixheader;
