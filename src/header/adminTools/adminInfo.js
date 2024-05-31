import { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { showAllItems, showAllUsersModal } from "../../store/showmodal";

const AdminInfoCreator = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className=" d-flex align-items-center">
      <div className="dropdown  ">
        <svg
          onClick={handleOpen}
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 32 32"
        >
          <path
            fill=""
            d="M4 5v2h2V5H4zm17 0v18.688l-2.594-2.594L17 22.5l4.28 4.313l.72.687l.72-.688L27 22.5l-1.406-1.406L23 23.687V5h-2zM4 9v2h4V9H4zm0 4v2h6v-2H4zm0 4v2h8v-2H4zm0 4v2h10v-2H4zm0 4v2h12v-2H4z"
          ></path>
        </svg>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button
                onClick={() => {
                  handleOpen(false);
                  dispatch(showAllUsersModal());
                }}
              >
                All Users
              </button>
            </li>
            <li className="menu-item">
              <button
                onClick={() => {
                  handleOpen(false);
                  dispatch(showAllItems());
                }}
              >
                All Items
              </button>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default AdminInfoCreator;
