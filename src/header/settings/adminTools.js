import { useDispatch } from "react-redux";
import { modalIsShow, showAddUsersModal } from "../../store/showmodal";

const AdminTools = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(modalIsShow())}
        type="button"
        className="btn btn-success"
      >
        Add new card
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => dispatch(showAddUsersModal())}
      >
        Add user
      </button>
    </>
  );
};

export default AdminTools;
