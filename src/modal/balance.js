import { Fragment, useState } from "react";
import "./modalContent/index.css";
function Balance() {
  const [value, setValue] = useState("");

  return (
    <Fragment>
      <div className="userBalance d-flex flex-column align-items-center">
        <h2 className="text-primary">How much you want to add ?</h2>
        <input type="number" value={value} />
        <div className="priceBlock d-flex">
          <button
            onClick={(e) => setValue(e.target.value)}
            value={5}
            className=" price btn btn-outline-primary">
            5
          </button>
          <button
            onClick={(e) => setValue(e.target.value)}
            value={10}
            className=" price btn btn-outline-primary">
            10
          </button>
          <button
            onClick={(e) => setValue(e.target.value)}
            value={20}
            className="price btn btn-outline-primary">
            20
          </button>
        </div>
        {/*  heare i whont call api to change here */}
        <button className="btn btn-outline-success">deposit</button>
      </div>
    </Fragment>
  );
}
export default Balance;
