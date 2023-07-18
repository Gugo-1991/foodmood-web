import { useState } from "react";
import Button from "../header/button";

function LoginCreator() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="input">
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
    </div>
  );
}
export default LoginCreator;
