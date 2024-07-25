// import { useSelector } from "react-redux";
import "./style.css";
import UserProfile from "../userTools/userProfile";
import Settings from "../settings/Settings";
import { Link } from "react-router-dom";

function Fixheader() {
  // const user = useSelector(function (state) {
  //   return state.isLogin.isLogin;
  // });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active " href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <section classNameName="header d-flex position-fixed w-100  align-items-center ">
    //   <div classNameName="admin2 d-flex  w-100  align-items-center">
    //     <UserProfile />
    //     <Settings />
    //   </div>
    // </section>
  );
}
export default Fixheader;
