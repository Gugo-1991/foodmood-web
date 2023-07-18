import React, { useEffect } from "react";
import "./app.css";
import Fixheader from "./header/header/headerCreator";
import ShowFood from "./mainContainer/showFood";
import ModalCreator from "./modal/modalCreator";
import { useSelector } from "react-redux";

function App() {
  const [user, admin] = useSelector(function (state) {
    return state.isLogin.isLogin;
  });
  const modal = useSelector(function (state) {
    return state.modal.showmodal;
  });

  return (
    <>
      <Fixheader />

      {user.enter ? <ShowFood /> : admin.enter ? <ShowFood /> : null}
      {modal ? <ModalCreator /> : null}
    </>
  );
}

export default App;
