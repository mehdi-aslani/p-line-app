import React from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { getCookies, postRequest } from "../services/PlineTools";
import { toast } from "react-toastify";
import "./Header.css";

const Header = (props) => {
  const navDropdownTitle = (
    <>
      <PersonCircle /> {props.UserName}
    </>
  );

  const apply = () => {
    if (window.confirm("Are you sure you want to apply the changes?")) {
      postRequest("/configs/apply", { token: getCookies("token") })
        .then((result) => {
          toast.info("Apply configuration successful");
        })
        .catch((error) => {
          toast.error(
            "An error occurred while executing your request. Contact the system administrator\n" +
              error
          );
        });
    }
  };

  return (
    <header className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="SIP" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/settings/sip-globals">
                  Global SIP Settings
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/settings/system-sip-settings">
                  System SIP Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/sip-profiles/index">
                  SIP Profiles
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/sip-trunks/index">
                  SIP Trunks
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/contact/import">
                  Sip User Groups
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sip-users/index">
                  Sip Users
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={apply}>Apply</Nav.Link>
            </Nav>

            <Nav className="pull-left">
              <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/user/change-password">
                  Change Password
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <Nav.Link onClick={props.LogoutAction}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;