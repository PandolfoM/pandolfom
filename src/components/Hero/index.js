import React from "react";
import { Container, Figure } from "react-bootstrap";
import pfp from "../../assets/pfp.jpg";
import "./style.css";

function Hero() {
  return (
    <Container className="hero">
      <Figure>
        <Figure.Image src={pfp} alt="Matthew Pandolfo" />
        <Figure.Caption>
          <h2>Matthew Pandolfo</h2>
          <h5>Full Stack Developer</h5>
        </Figure.Caption>
      </Figure>
    </Container>
  );
}

export default Hero;
