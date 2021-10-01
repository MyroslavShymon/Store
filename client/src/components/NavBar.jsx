import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

import { Context } from "..";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/constants";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    history.push(LOGIN_ROUTE);
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <NavLink to={SHOP_ROUTE}>
          <Navbar.Brand href="#home">Shop All</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="ml-auto" style={{ color: "white" }}>
          {user.isAuth ? (
            <>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Admin Panel
              </Button>
              <Button
                variant={"outline-light"}
                onClick={() => logOut()}
                style={{ marginLeft: 10 }}
              >
                Exit
              </Button>
            </>
          ) : (
            <>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(LOGIN_ROUTE)}
              >
                Authorization
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
