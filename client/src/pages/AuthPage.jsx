import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Card, Container, Form, Row } from "react-bootstrap";

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";

const AuthPage = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-4" placeholder="Enter email..." />
          <Form.Control className="mt-3" placeholder="Enter password..." />
        </Form>
        <Row className="d-flex justify-content-beetween mt-3 pl-3 pr-3">
          {isLogin ? (
            <div>
              No accaunt? &nbsp;
              <NavLink to={REGISTRATION_ROUTE}> Register! </NavLink>
            </div>
          ) : (
            <div>
              Has accaunt? &nbsp;<NavLink to={LOGIN_ROUTE}> Login! </NavLink>
            </div>
          )}
          <Button variant={"outline-success"}>
            {isLogin ? "Login" : "Register"}
          </Button>
        </Row>
      </Card>
    </Container>
  );
};

export default AuthPage;
