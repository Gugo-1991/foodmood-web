import React, { useEffect } from "react";
import "./app.css";
import Fixheader from "./header/header/headerCreator";
import ShowFood from "./mainContainer/showFood";
import ModalCreator from "./modal/modalCreator";
import { useSelector } from "react-redux";
import AddCard from "./modal/modalContent/addCard";
import AddUsers from "./modal/modalContent/addUsers";
import SigniInUser from "./modal/modalContent/signIn";
import Login from "./modal/modalContent/login";

function App() {
  const [user, admin] = useSelector(function (state) {
    return state.isLogin.isLogin;
  });
  const modal = useSelector(function (state) {
    return state.modal.showmodal;
  });
  const adduser = useSelector(function (state) {
    return state.modal.showAddUsersModal;
  });
  const signiIn = useSelector(function (state) {
    return state.modal.showSignInNewUser;
  });
  const login = useSelector(function (state) {
    return state.modal.showLoginModal;
  });
  console.log(login);
  return (
    <>
      <Fixheader />

      {user.enter ? <ShowFood /> : admin.enter ? <ShowFood /> : null}
      {modal ? <ModalCreator children={<AddCard />} /> : null}
      {adduser ? <ModalCreator children={<AddUsers />} /> : null}
      {signiIn ? <ModalCreator children={<SigniInUser />} /> : null}
      {login ? <ModalCreator children={<Login />} /> : null}
    </>
  );
}

export default App;
