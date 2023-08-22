import React, { Fragment } from "react";
import "./index.css";
import "react-responsive-modal/styles.css";
import Showmodal from "../modal/modalContent/modal";
import Login from "../modal/modalContent/login";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "../modal/modalContent/signUp";

function HomePage() {
  const dispatch = useDispatch();
  const show = useSelector(function (state) {
    return state.modal;
  });

  return (
    <Fragment>
      <div className=" bg d-flex "></div>

      {show.showLoginModal ? (
        <Showmodal Children={<Login />} />
      ) : show.showSignUpNewUser ? (
        <Showmodal Children={<SignUp />} />
      ) : null}
    </Fragment>
  );
}

export default HomePage;
