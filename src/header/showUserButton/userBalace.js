import { Fragment } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { showBalanceModal } from "../../store/showmodal";
function UserBalanceCreator(balance) {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="balancePlace d-flex align-items-end flex-column">
        <h5 className="balance">Main Balance-{"$" + "0.0"} </h5>
        <button
          onClick={() => dispatch(showBalanceModal())}
          className="deposit btn btn-success">
          DEPOSIT
        </button>
      </div>
    </Fragment>
  );
}

export default UserBalanceCreator;
