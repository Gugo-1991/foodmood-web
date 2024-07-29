import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const SignUp = () => {
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitAddUser = (user) => {
    if (
      user.name === undefined ||
      !/^[a-zA-Z\s]{2,25}$/.test(user.name) ||
      user.name[0] !== user.name[0].toUpperCase()
    ) {
      setErrorMessage(
        "Name should have initial capital and contain only letters."
      );
      setUser({ ...user, name: "" });
      return;
    }
    if (
      user.secondName === undefined ||
      !/^[a-zA-Z\s]{2,25}$/.test(user.secondName) ||
      user.secondName[0] !== user.secondName[0].toUpperCase()
    ) {
      setErrorMessage(
        "Second name should have initial capital and contain only letters."
      );
      setUser({ ...user, secondName: "" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(user.email)) {
      setErrorMessage("Invalid email format.");
      setUser({ ...user, email: "" });
      return;
    }

    if (confirmPassword !== user.password) {
      setErrorMessage("Password and confirm password do not match.");
      return;
    }

    console.log("User added:", user);
  };

  return (
    <div className="bg sign-in__wrapper">
      <div className="signupbox d-flex flex-column align-items-center">
        <Form className="shadow p-4 bg-white rounded">
          <div className="h4 mb-2 text-center">Sign Up</div>

          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={user.name || ""}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              value={user.secondName || ""}
              onChange={(e) => setUser({ ...user, secondName: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={user.email || ""}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={user.password || ""}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          {errorMessage && (
            <Alert variant="danger" className="mt-3">
              {errorMessage}
            </Alert>
          )}
          <br />
          <Button
            variant="primary"
            className="mt-3 d-flex"
            onClick={() => submitAddUser(user)}
          >
            Create Account
          </Button>
          <br />
          <Link to="/login" className="mt-3">
            Have account?
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
