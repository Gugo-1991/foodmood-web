import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header border-bottom shadow p-3 mb-5 bg-white rounded">
      <nav className="nav container"></nav>
      <div className="d-flex justify-content-center">
        <Link className="navbar-brand" to="/">
          <h1 className="p-3 logo">JEWELRY_ART</h1>
        </Link>
        
      </div>

      <div>
        <nav className="navbar navbar-expand-lg  ">
          <div className="container-fluid">
            <div
              className=" navbar-collapse  d-flex justify-content-center  "
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav me-3 ">
                <li className="nav-item ">
                  <button
                    className="nav-link dropdown-toggle "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </button>

                  <ul className="dropdown-menu dropdown-menu border-0  ">
                    <li>
                      <a className="dropdown-item" href="/">
                        All Shopping
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Best of sale{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        New Arrivals
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Trending Now
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav me-3">
                <Link className="navbar-brand" to="/about">
                  Photo
                </Link>
              </ul>
              <ul className="navbar-nav me-3">
                <Link className="navbar-brand" to="/about">
                  Video
                </Link>
              </ul>
              <ul className="navbar-nav">
                <Link className="navbar-brand" to="/about">
                  About
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
