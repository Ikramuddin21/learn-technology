import React from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  const [login, setLogin] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="my-5 d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="fs-3 mb-5">
        <span
          onClick={() => setLogin(true)}
          role="button"
          className={`me-2 ${
            login ? "border-bottom border-4 border-warning rounded" : ""
          }`}
        >
          Login
        </span>
        <span
          onClick={() => setLogin(false)}
          role="button"
          className={`ms-2 ${
            !login ? "border-bottom border-4 border-warning rounded" : ""
          }`}
        >
          Register
        </span>
      </div>
      <Form onSubmit={handleSubmit} className="custom-responsive-width px-2 px-sm-3 px-md-5 py-5 rounded bg-light">
        {!login && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" required />
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        {login && (
          <Form.Group
            className=" d-flex justify-content-between align-items-center"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Remember me" />
            <Form.Text className="text-primary" role="button">
              Forget Password
            </Form.Text>
          </Form.Group>
        )}
        <Button className="w-100 mt-4" variant="primary" type="submit">
          {login ? "Login" : "Register"}
        </Button>
        {login ? (
          <span
            onClick={() => setLogin(false)}
            className="text-primary text-center mt-5 d-block"
            role="button"
          >
            New User? Create Account
          </span>
        ) : (
          <span
            onClick={() => setLogin(true)}
            className="text-primary text-center mt-5 d-block"
            role="button"
          >
            Already Registered? Login
          </span>
        )}
      </Form>
    </Container>
  );
};

export default Login;
