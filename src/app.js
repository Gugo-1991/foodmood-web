import "./app.css";
import Fixheader from "./header/header/headerCreator";
import ShowFood from "./mainContainer/showFood";
import ModalCreator, { LoginModal } from "./modal/modalCreator";
import { useSelector } from "react-redux";
import AddCard from "./modal/modalContent/addCard";
import AddUsers from "./modal/modalContent/addUsers";
import SigniInUser from "./modal/modalContent/signIn";
import EditModal from "./modal/modalContent/editmodal";
import HomePage from "./homepage/homePage";

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
  const login = useSelector(function (state) {
    return state.modal.showLoginModal;
  });
  const edit = useSelector(function (state) {
    return state.modal.showEditModal;
  });
  const user = useSelector(function (state) {
    return state.isLogin.isLogin.role;
  });
  console.log(user);
  return (
    <>
      <Fixheader />
      <HomePage />
      {user === "admin" ? <ShowFood /> : null}
      {modal ? <ModalCreator children={<AddCard />} /> : null}
      {adduser ? <ModalCreator children={<AddUsers />} /> : null}
      {signiIn ? <ModalCreator children={<SigniInUser />} /> : null}
      {edit ? <ModalCreator children={<EditModal />} /> : null}
    </>
  );
}

export default App;
