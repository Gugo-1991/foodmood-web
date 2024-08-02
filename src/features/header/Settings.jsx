import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  // useAddCardModal,
  useAddNewUserModal,
} from "../../context/modal/useModals";

const Settings = () => {
  // const addCard = useAddCardModal();
  const addUser = useAddNewUserModal();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <li
      aria-hidden
      className="nav-item dropdown "
      onClick={() => setShow(!show)}
    >
      <Link
        className={`nav-link ${"active"} ${
          show ? "show" : ""
        } dropdown-toggle `}
        to="#settings"
        id="navbarDropdownSettings"
        data-bs-toggle="dropdown"
      >
        TOOLS
      </Link>
      <ul aria-hidden className={` dropdown-menu  ${show ? "show" : ""}`}>
        <li>
          {/* <Link className="nav-link " onClick={() => addCard.attachHandler()}>
            ADD CARD
          </Link> */}
        </li>
        <li>
          <Link className="nav-link " onClick={() => addUser.attachHandler()}>
            ADD USER
          </Link>
        </li>
        <li>
          <Link
            className="nav-link "
            onClick={() => {
              localStorage.clear();
              navigate("/");
              window.location.reload();
            }}
          >
            LOGOUT
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Settings;
