import { Link } from "react-router-dom";
import Settings from "./Settings";
import Login from "../user/login";
import { useEffect } from "react";

const Header = () => {

const isLogined = localStorage.getItem("x-user")


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid ">
        <Link
          className="navbar-brand"
          to={`${ "/"}`}
        >
          ART_JEWELRY
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={"/home"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/shop"}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            {isLogined ? <Settings /> : <Login />}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
