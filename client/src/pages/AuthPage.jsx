import React, { useContext, useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Card, Container, Form, Row } from "react-bootstrap";

import { Context } from "..";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/constants";
import { login, registration } from "../http/userApi";

const AuthPage = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  const { pathname } = useLocation();
  const isLogin = pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      history.push(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4"
            placeholder="Enter email..."
          />
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3"
            placeholder="Enter password..."
            type="password"
          />
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
          <Button variant={"outline-success"} onClick={click}>
            {isLogin ? "Login" : "Register"}
          </Button>
        </Row>
      </Card>
    </Container>
  );
});

export default AuthPage;
