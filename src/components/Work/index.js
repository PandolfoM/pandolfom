import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./style.css";
import repo from "../../config.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Work() {
  const [page, setpage] = useState(0);

  return (
    <Container fluid className="worksection">
      <Row className="workHeader">
        <h3>Work Showcase</h3>
      </Row>
      <Row>
        <Col lg={3} md={2} xs={1} className="workLeft">
          {page === 1 && (
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={(e) => {
                console.log("pressed");
                setpage(0);
              }}
            />
          )}
        </Col>
        <Col>
          <Row>
            {page === 0 ? (
              <>
                {repo.slice(0, 3).map((repo) => (
                  <Col key={repo.site} className="workcards">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        className="cardImg"
                        variant="top"
                        alt={repo.title}
                        src={repo.image}
                      />
                      <Card.Body>
                        <Card.Title>{repo.title}</Card.Title>
                        <Card.Text className="workDesc">{repo.description}</Card.Text>
                      </Card.Body>
                      <Card.Footer className="workFooter">
                        <Button
                          variant="outline-primary"
                          href={repo.site}
                          target="_blank">
                          View Site
                        </Button>
                        <Button
                          variant="outline-primary"
                          href={repo.github}
                          target="_blank">
                          View on GitHub
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </>
            ) : (
              <>
                {repo.slice(3, 6).map((repo) => (
                  <Col key={repo.site} className="workcards">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        className="cardImg"
                        variant="top"
                        alt={repo.title}
                        src={repo.image}
                      />
                      <Card.Body>
                        <Card.Title>{repo.title}</Card.Title>
                        <Card.Text className="workDesc">{repo.description}</Card.Text>
                      </Card.Body>
                      <Card.Footer className="workFooter">
                        <Button
                          variant="outline-primary"
                          href={repo.site}
                          target="_blank">
                          View Site
                        </Button>
                        <Button
                          variant="outline-primary"
                          href={repo.github}
                          target="_blank">
                          View on GitHub
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </>
            )}
          </Row>
        </Col>
        <Col lg={3} md={2} xs={1} className="workRight">
          {page === 0 && (
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={(e) => {
                console.log(page);
                setpage(1);
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Work;
