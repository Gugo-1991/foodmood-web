import { useState } from "react";
import Button from "../header/button";
import "./style.css";
import SignUpButton from "./signUp/signUpCreator";
function LoginCreator() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="inputs">
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
      <Button value={"Login"} login={login} password={password} />
      <h6>or</h6>
      <SignUpButton />
    </div>
  );
}
export default LoginCreator;
