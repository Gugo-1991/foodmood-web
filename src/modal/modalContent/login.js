import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginstate } from "../../store/users";
import { closeModal } from "../../store/showmodal";

function Login({ children }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (login && password) {
      e.preventDefault();
      dispatch(loginstate({ login, password })) && dispatch(closeModal());
    }
  };

  return (
    <>
      <h1>Welcome</h1>
      <form className="loginform" action="form.php" onSubmit={handleSubmit}>
        <input
          onSubmit={handleSubmit}
          className="login rounded-3"
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder="Enter your login"
        />
        <input
          className="password rounded-3"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
        <button className="btn btn-primary">Login</button>
        {children}
      </form>
    </>
  );
}

export default Login;
