import React, { useState } from "react";
import "./index.css";
import "react-responsive-modal/styles.css";
import { useDispatch } from "react-redux";
import { loginstate } from "../../store/users";
import { closeModal, showSignUpModal } from "../../store/showmodal";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginstate({ email, password }));
      dispatch(closeModal());
    }
  };

  const handleSignUp = () => {
    dispatch(closeModal());
    dispatch(showSignUpModal());
  };
  return (
    <>
      <form className="loginform" action="form.php" onSubmit={handleSubmit}>
        <h2> welcome</h2>
        <input
          className="login rounded-3"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your Email"
        />
        <input
          className="password rounded-3"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter your password"
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}>
          Login
        </button>
        <button className="btn btn-success" onClick={handleSignUp}>
          Signup
        </button>
      </form>
    </>
  );
}
export default Login;
