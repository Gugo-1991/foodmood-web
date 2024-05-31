import { useSelector } from "react-redux";
import "./style.css";
import ShowUserButton from "../userTools";
import UserProfile from "../userTools/userProfile";
import Settings from "../settings/settingsMenu";

function Fixheader() {
  const user = useSelector(function (state) {
    return state.isLogin.isLogin;
  });

  return (
      <section className="header d-flex position-fixed w-100  align-items-center ">
        <div className="admin2 d-flex  w-100  align-items-center">
          {user === "admin" ? <UserProfile /> : null}
          {user === "user" ? <ShowUserButton /> : null}
          {user === "user" ? <UserProfile /> : null}
          {user === "admin" ? <Settings /> : null}

        </div>
      </section>
  );
}
export default Fixheader;
