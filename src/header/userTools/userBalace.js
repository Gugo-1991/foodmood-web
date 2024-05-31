import { useEffect, useState } from "react";
import "./index.css";
import api from "../../api/foodmoodApi";
const UserBalanceCreator = () => {
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
    <div className="balancePlace d-flex align-items-end flex-column">
      <h5 className="balance">Main Balance-{"$" + balance} </h5>
    </div>
  );
};

export default UserBalanceCreator;
