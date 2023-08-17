import "./app.css";
import Fixheader from "./header/header/headerCreator";
import ShowFood from "./mainContainer/showFood";
import ModalCreator from "./modal/modalCreator";
import { useSelector } from "react-redux";
import AddUsers from "./modal/modalContent/addUsers";
import SigniInUser from "./modal/modalContent/signIn";
import HomePage from "./homepage/homePage";
import EditMidal from "./modal/modalContent/edit";
import AddCard from "./modal/modalContent/addCard";

function App() {
  const modal = useSelector(function (state) {
    return state.modal.showmodal;
  });
  const adduser = useSelector(function (state) {
    return state.modal.showAddUsersModal;
  });
  const signiIn = useSelector(function (state) {
    return state.modal.showSignInNewUser;
  });

  const edit = useSelector(function (state) {
    return state.modal.showEditModal;
  });
  const user = useSelector(function (state) {
    return state.isLogin.isLogin;
  });
  console.log(user);
  return (
    <>
      <Fixheader />

      {user === "admin" ? <ShowFood /> : <HomePage />}
      {modal ? <AddCard /> : null}
      {adduser ? <ModalCreator children={<AddUsers />} /> : null}
      {signiIn ? <ModalCreator children={<SigniInUser />} /> : null}
      {edit ? <EditMidal /> : null}
    </>
  );
}

export default App;
