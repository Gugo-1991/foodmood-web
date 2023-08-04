import { useSelector } from "react-redux";
import "./style.css";
import AdminModal from "../showAdminButtons";
import ShowUserButton from "../showUserButton";
import Time from "./signUp/clock";

function Fixheader() {
  const user = useSelector(function (state) {
    return state.isLogin.isLogin[0].enter;
  });
  const admin = useSelector(function (state) {
    return state.isLogin.isLogin[1].enter;
  });
  return (
    <>
      <section className="header">
        {user ? <ShowUserButton /> : admin ? <AdminModal /> : <Time />}
      </section>
    </>
  );
}
export default Fixheader;
