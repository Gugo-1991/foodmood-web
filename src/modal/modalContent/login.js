import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginstate } from "../../store/users";
import { closeModal } from "../../store/showmodal";
function Login({ children }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <input
        className="login"
        onChange={(e) => setLogin(e.target.value)}
        type="text"
        placeholder="Enter your login"
      />
      <input
        className="password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter your password"
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() =>
          dispatch(loginstate({ login, password })) && dispatch(closeModal())
        }>
        Login
      </button>
      {children}
      <button
        onClick={() => dispatch(closeModal())}
        type="button"
        className="btn btn-outline-danger">
        Cancel
      </button>
    </>
  );
}
export default Login;
