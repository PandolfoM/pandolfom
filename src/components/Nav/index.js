import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar variant="dark" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
