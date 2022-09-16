import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import app from "../../../images/mobile-app.png";

const AppDownload = () => {
  return (
    <div className="bg-success bg-gradient bg-opacity-75 py-5 text-light">
      <Container>
        <Row className="me-0 ms-0 d-flex align-items-center">
          <Col sm={12} md={7} className="mb-1">
            <img width="90%" src={app} alt="" />
          </Col>
          <Col sm={12} md={5} className="mt-1">
            <div>
              <h1 className="lh-base">Learn anytime on your <span className="text-warning">mobile</span></h1>
              <p className="lh-lg my-4">
                Mobile learning is defined as a way to access learning resources
                and content from any mobile device. Learners have access to
                learning materials and learning support anywhere.
              </p>
              <Button variant="warning">Download App</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppDownload;
