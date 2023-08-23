import "./app.css";
import Fixheader from "./header/header/headerCreator";
import ShowFood from "./mainContainer/showFood";
import { useDispatch, useSelector } from "react-redux";
import AddUsers from "./modal/modalContent/addUsers";
import HomePage from "./homepage/homePage";
import EditMidal from "./modal/modalContent/edit";
import AddCard from "./modal/modalContent/addCard";
import api from "./api/foodmoodApi";
import { useCallback } from "react";
import Showmodal from "./modal/modalContent/modal";
import Login from "./modal/modalContent/login";
import SignUp from "./modal/modalContent/signUp";
import { closeModal } from "./store/showmodal";

function App() {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(closeModal());
  };
  const queryUsers = useCallback(async () => {
    try {
      const response = await api.post("./initFirstUser");
      console.log(response.data);
    } catch (error) {
      // console.error("Error fetching users:", error);
    }
  }, []);
  queryUsers();
  const {
    showmodal,
    showAddUsersModal,
    showEditModal,
    showLoginModal,
    showSignUpNewUser,
  } = useSelector(function (state) {
    return state.modal;
  });
  console.log(
    showmodal,
    showAddUsersModal,
    showEditModal,
    showLoginModal,
    showSignUpNewUser
  );

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

      {showLoginModal ? (
        <Showmodal close={close} Children={<Login />} />
      ) : showSignUpNewUser ? (
        <Showmodal Children={<SignUp />} />
      ) : null}
    </>
  );
}

export default App;
