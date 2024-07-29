import React, { useCallback, useEffect, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import "./login.css";
import Button from "../../shared/Button";
import { useUserLoginMutation } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/authSlice";
import { Link } from "react-router-dom";

const LoginSlice = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [login] = useUserLoginMutation();
  const [signedUser, setSignedUser] = useState(null);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await login({ email: username, password })
      .unwrap()
      .then((user) => {
        if (user) {
          setSignedUser(user);
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(`Username :${username}, Password :${password}`);
    setLoading(false);
  };

  const setActiveUser = useCallback(
    (signedUser) => {
      dispatch(setUser(signedUser));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!signedUser) {
      return;
    }

    localStorage.setItem("x-user", JSON.stringify(signedUser));

    setActiveUser(signedUser);
  }, [signedUser, setActiveUser]);

  useEffect(() => {
    if (!signedUser) {
      return;
    }

    localStorage.setItem("x-user", JSON.stringify(signedUser));

    setActiveUser(signedUser);
  }, [signedUser, setActiveUser]);

//   const handlePassword = () => {};

 
  const xUser = localStorage.getItem("x-user");

  return (
    <div className="bg sign-in__wrapper">
      {!xUser && (
        <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
          <div className="h4 mb-2 text-center">Sign In</div>
          {show ? (
            <Alert
              className="mb-2"
              variant="danger"
              onClose={() => setShow(false)}
              dismissible
            >
              Incorrect username or password.
            </Alert>
          ) : (
            <div />
          )}
          <Form.Group className="mb-2" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="checkbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          {!loading ? (
            <Button
              className=" btn-outline-primary w-100"
              label="Log in"
              onClick={() => handleSubmit}
            />
          ) : (
            <Button className="w-100" variant="primary" type="submit" disabled>
              Logging In...
            </Button>
          )}
          <div className="d-grid justify-content-end">
            <br />

            <Link>Create acount</Link>
            <br />
            <a href="/"> Forget your password?</a>
          </div>
        </Form>
      )}
    </div>
  );
};
export default LoginSlice;
