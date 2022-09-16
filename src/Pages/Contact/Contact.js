import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { RiContactsLine } from "react-icons/ri";
import { MdShareLocation } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import Breadcrumb from "../Shared/Breadcrumb/Breadcrumb";

const Contact = () => {
  const handleContactForm = e => {
    e.preventDefault();
  };

  return (
    <>
      <Breadcrumb />
      <Container className="my-5">
        <Row>
          <h2 className="text-center">For more information about our</h2>
          <h2 className="text-center">courses, get in touch</h2>
        </Row>

        <Row className="d-flex align-items-center justify-content-center mt-5 px-2">
          <div
            className="bg-light d-flex flex-column justify-content-center m-2 ps-4 pt-2 rounded shadow-sm"
            style={{ maxWidth: "350px", height: "170px" }}
          >
            <span className="fs-4 mb-3">
              {" "}
              <MdShareLocation className="me-2 mb-1 text-success" /> Location
            </span>
            <p>123, Independence Avenue</p>
            <p>New York, United States</p>
          </div>
          <div
            className="bg-light d-flex flex-column justify-content-center m-2 ps-4 pt-2 rounded shadow-sm"
            style={{ maxWidth: "350px", height: "170px" }}
          >
            <span className="fs-4 mb-3">
              {" "}
              <RiContactsLine className="me-2 mb-1 text-success" /> Contact
            </span>
            <p>Mail: info@exmple.com</p>
            <p>Phone: +9776 467 748</p>
          </div>
          <div
            className="bg-light d-flex flex-column justify-content-center m-2 ps-4 pt-2 rounded shadow-sm"
            style={{ maxWidth: "350px", height: "170px" }}
          >
            <span className="fs-4 mb-3">
              {" "}
              <IoMdTime className="me-2 mb-1 text-success" /> Opening
            </span>
            <p>Monday - Friday: 08:00 - 20:00</p>
            <p>Saturday & Sunday: 10:00 - 20:00</p>
          </div>
        </Row>

        <Form onClick={handleContactForm} className="custom-responsive-width mx-auto mt-5">
          <h2 className="text-center">Do not hesitate, Let's Talk</h2>
          <Row className="my-5" xs={1} sm={2}>
            <Form.Group controlId="formGridName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group controlId="formGridEmail" className="mt-3 mt-sm-0">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control style={{ height: "65px" }} placeholder="Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Message" rows={4} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
