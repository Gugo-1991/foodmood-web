import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddCardModal } from "../context/modal/useModals";

const Settings = () => {

  const addCard=useAddCardModal()



  const [show, setShow] = useState(false);

  return (
    <li
      aria-hidden
      className="nav-item dropdown"
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
          <Link className="nav-link "  onClick={()=>addCard.attachHandler()}   >ADD CARD</Link>
        </li>
        <li>
          <Link
            className="nav-link "
            onClick={() => {
              localStorage.clear();
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
