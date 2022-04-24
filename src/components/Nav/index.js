import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>Portfolio</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Work</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
          <Nav.Link>Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
