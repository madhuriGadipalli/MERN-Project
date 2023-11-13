import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { logoutUser } from "../Redux/actions/signIn";

export const Header = () => {
  const signInfo = useSelector((state) => state.signInInfo?.res);
  const registerInfo = useSelector((state) => state.registerInfo?.res);
  const userInfo = signInfo?.token
    ? signInfo
    : registerInfo?.token
    ? registerInfo
    : "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await dispatch(logoutUser());
    navigate("/signin");
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>My Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/myOrders">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/signin">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
