import { useSelector } from "react-redux";
import "./style.css";
import AdminModal from "../showAdminButtons";
import Time from "./signUp/clock";
import ShowUserButton from "../showUserButton";
import UserProfile from "../showAdminButtons/userProfile";

function Fixheader() {
  const user = useSelector(function (state) {
    return state.isLogin.isLogin;
  });

  return (
    <>
      <section className="header d-flex position-fixed w-100  align-items-center ">
        <div className="admin2 d-flex  w-100  align-items-center">
          {user === "admin" ? <AdminModal /> : null}
          {user === "admin" ? <UserProfile /> : null}
          {user === "user" ? <ShowUserButton /> : null}
          {user === "user" ? <UserProfile /> : null}
        </div>
      </section>
    </>
  );
}
export default Fixheader;
