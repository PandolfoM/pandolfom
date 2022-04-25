import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Work() {
  return (
    <Container fluid className="worksection">
      <Row>
        <Col lg={3} md={2} xs={1} />
        <Col>
          <Row>
            <Col className="workcards">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/286/180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="outline-primary">View Site</Button>
                  <Button variant="outline-primary">View on GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="workcards">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/286/180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="outline-primary">View Site</Button>
                  <Button variant="outline-primary">View on GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="workcards">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/286/180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="outline-primary">View Site</Button>
                  <Button variant="outline-primary">View on GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={3} md={2} xs={1} />
      </Row>
    </Container>
  );
}

export default Work;
