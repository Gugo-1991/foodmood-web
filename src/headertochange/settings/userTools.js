import { useDispatch } from "react-redux";
import { showBalanceModal } from "../../store/showmodal";

const UserTools =()=>{
    const dispatch =useDispatch()
    return (
        <div className="balancePlace d-flex align-items-end flex-column">
          <button
            onClick={() => dispatch(showBalanceModal())}
            className="deposit btn btn-success">
            DEPOSIT
          </button>
        </div>
    );
  }


export default UserTools