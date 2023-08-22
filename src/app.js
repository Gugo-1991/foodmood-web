import "./app.css";
import Fixheader from "./header/header/headerCreator";
import ShowFood from "./mainContainer/showFood";
import { useSelector } from "react-redux";
import AddUsers from "./modal/modalContent/addUsers";
import HomePage from "./homepage/homePage";
import EditMidal from "./modal/modalContent/edit";
import AddCard from "./modal/modalContent/addCard";
import api from "./api/foodmoodApi";
import { useCallback } from "react";

function App() {
  const queryUsers = useCallback(async () => {
    try {
      const response = await api.get("/users");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);
  queryUsers();
  const { showmodal, showAddUsersModal, showEditModal } = useSelector(function (
    state
  ) {
    return state.modal;
  });
  // console.log(showmodal, showAddUsersModal, showEditModal);

  const user = useSelector(function (state) {
    return state.isLogin.isLogin;
  });
  return (
    <>
      <Fixheader />
      {user === "admin" ? <ShowFood /> : <HomePage />}
      {showmodal ? <AddCard /> : null}
      {showAddUsersModal ? <AddUsers /> : null}
      {showEditModal ? <EditMidal /> : null}
    </>
  );
}

export default App;
