import { useSelector } from "react-redux";
import "./style.css";
import AdminModal from "../showAdminButtons";
import Time from "./signUp/clock";

function Fixheader() {
  const user = useSelector(function (state) {
    return state.isLogin.isLogin;
  });

  return (
    <>
      <section className="header">
        {user === "admin" ? <AdminModal /> : <Time />}
      </section>
    </>
  );
}
export default Fixheader;
