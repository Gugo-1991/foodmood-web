import { Fragment } from "react";
import "./index.css";
function UserBalanceCreator(balance) {
  return (
    <Fragment>
      <div className="balancePlace d-flex align-items-end flex-column">
        <h5 className="balance">Main Balance-{"$" + "0.0"} </h5>
        <button className="deposit btn btn-success">DEPOSIT</button>
      </div>
    </Fragment>
  );
}

export default UserBalanceCreator;
