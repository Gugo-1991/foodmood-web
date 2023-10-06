import { Fragment, useEffect, useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { showBalanceModal } from "../../store/showmodal";
import api from "../../api/foodmoodApi";
function UserBalanceCreator() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await api.get(`/accounts/${userId}`);
        if (response.status === 200) {
          const balance = response.data.balance;
          setBalance(balance);
        } else {
          console.log("Error fetching balance");
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, [userId]);

  return (
    <Fragment>
      <div className="balancePlace d-flex align-items-end flex-column">
        <h5 className="balance">Main Balance-{"$" + balance} </h5>
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
