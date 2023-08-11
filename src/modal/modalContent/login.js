import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { loginstate } from "../../store/users";
import { closeModal } from "../../store/showmodal";
import LoginModal from "./LoginModal";

function Login({ children }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [loginModalOpen, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const closeLoginModal = () => setOpen(false);
  const handleSubmit = (e) => {
    if (login && password) {
      e.preventDefault();
      dispatch(loginstate({ login, password })) && dispatch(closeModal());
    }
  };

  return (
    <Fragment>
      <h1>Welcome</h1>
      <LoginModal
        className="pt-4"
        closeLoginModal={closeLoginModal}
        onOpenModal={onOpenModal}
        loginModalOpen={loginModalOpen}
        setPassword={setPassword}
        setLogin={setLogin}
        handleSubmit={handleSubmit}
        children={children}
      ></LoginModal>
    </Fragment>
  );
}

export default Login;
