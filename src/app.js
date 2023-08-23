import "./app.css";
import Fixheader from "./header/header/headerCreator";
import ShowFood from "./mainContainer/showFood";
import { useDispatch, useSelector } from "react-redux";
import AddUsers from "./modal/modalContent/addUsers";
import HomePage from "./homepage/homePage";
import EditMidal from "./modal/modalContent/edit";
import AddCard from "./modal/modalContent/addCard";
import SignUp from "./modal/modalContent/signUp";
import { ititFirstUser } from "./store/users";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { showmodal, showAddUsersModal, showEditModal, showSignUpNewUser } =
    useSelector(function (state) {
      return state.modal;
    });
  console.log(showmodal, showAddUsersModal, showEditModal, showSignUpNewUser);
  useEffect(() => {
    dispatch(ititFirstUser());
  }, []);
  const user = useSelector(function (state) {
    return state.isLogin.isLogin;
  });
  return (
    <>
      <Fixheader />
      {user === "admin" ? <ShowFood /> : <HomePage />}
      {showmodal ? <AddCard /> : null}
      {showAddUsersModal ? <AddUsers /> : null}
      {showSignUpNewUser ? <SignUp /> : null}
      {showEditModal ? <EditMidal /> : null}
    </>
  );
}

export default App;
