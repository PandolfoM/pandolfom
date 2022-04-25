import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function About() {
  return (
    <Container fluid className="aboutsection" id="about">
      <Row>
        <Col lg={3} md={2} xs={1}/>
        <Col>
          <Row className="about">
            <Col className="aboutIcon">
              <FontAwesomeIcon icon={faCode} />
            </Col>
            <Col className="aboutDesc">
              <h5>About Me</h5>
              <br />
              <p>
                Hello, my name is Matthew Pandolfo! I am a 19-year-old Full
                Stack Web Developer. As of January 6, 2022 I am a graduate of
                the UConn Coding Bootcamp
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={3} md={2} xs={1}/>
      </Row>
    </Container>
  );
}

export default About;
