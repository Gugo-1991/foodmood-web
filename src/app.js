import "./app.css";
import { useEffect } from "react";
import Fixheader from "./header/header/headerCreator";
import ShowFood from "./mainContainer/showFood";
import { useDispatch, useSelector } from "react-redux";
import AddUsers from "./modal/modalContent/addUsers";
import HomePage from "./homepage/homePage";
import EditMidal from "./modal/modalContent/edit";
import AddCard from "./modal/modalContent/addCard";
import Showmodal from "./modal/modalContent/modal";
import Login from "./modal/modalContent/login";
import SignUp from "./modal/modalContent/signUp";
import { queryUsers } from ".";
import { getFood } from "./store/foods";
import AllUsers from "./modal/modalContent/allUsers";
import AllItems from "./modal/modalContent/allItems";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFood());
  }, []);

  const isLogin = localStorage.getItem("isLogin");
  queryUsers();
  const {
    showAllItems,
    showAllUsers,
    showmodal,
    showAddUsersModal,
    showEditModal,
    showLoginModal,
    showSignUpNewUser,
  } = useSelector(function (state) {
    return state.modal;
  });
  // console.log(
  //   showmodal,
  //   showAddUsersModal,
  //   showEditModal,
  //   showLoginModal,
  //   showSignUpNewUser
  // );

  const user = useSelector(function (state) {
    return state.isLogin.isLogin;
  });
  return (
    <>
      <Fixheader />
      {isLogin ? <ShowFood /> : <HomePage />}
      {showmodal ? <AddCard /> : null}
      {showAddUsersModal ? <AddUsers /> : null}
      {showEditModal ? <EditMidal /> : null}
      {showAllUsers ? <Showmodal Children={<AllUsers />} /> : null}
      {showAllItems ? <Showmodal Children={<AllItems />} /> : null}
      {!isLogin && showLoginModal ? (
        <Showmodal style={`${"rounded-3 w-25"}`} Children={<Login />} />
      ) : null}
      {!isLogin && showSignUpNewUser ? (
        <Showmodal Children={<SignUp />} />
      ) : null}
    </>
  );
}

export default App;
