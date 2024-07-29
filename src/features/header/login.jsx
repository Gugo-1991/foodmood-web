import { useCallback, useEffect, useState } from "react";
import { useUserLoginMutation } from "../../api/authApi.js";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Button from "../../shared/Button.jsx";
import Input from "../../shared/Input.jsx";
import { setUser } from "../../app/authSlice.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedUser, setSignedUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useUserLoginMutation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email, password })
        .unwrap()
        .then((user) => {
          if (user) {
            setSignedUser(user);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const setActiveUser = useCallback(
    (signedUser) => {
      dispatch(setUser(signedUser));
      navigate(signedUser.role === "admin" ? "home" : "/");
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    if (!signedUser) {
      return;
    }

    localStorage.setItem("x-user", JSON.stringify(signedUser));

    setActiveUser(signedUser);
  }, [signedUser, setActiveUser, navigate]);

  return (
    <>
      <Input
        type="email"
        placeholder={"Email"}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder={"Password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="LOGIN" onClick={handleSubmit} />
    </>
  );
};

export default Login;
