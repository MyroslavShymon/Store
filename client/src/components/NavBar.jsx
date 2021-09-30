import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

import { Context } from "..";
import { SHOP_ROUTE } from "../utils/constants";

const NavBar = observer(() => {
  const { user } = useContext(Context);
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
              <Button variant={"outline-light"}>Admin Panel</Button>
              <Button variant={"outline-light"} style={{ marginLeft: 10 }}>
                Exit
              </Button>
            </>
          ) : (
            <>
              <Button
                variant={"outline-light"}
                onClick={() => user.setIsAuth(true)}
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
