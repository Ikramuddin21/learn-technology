import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Breadcrumb from "../Shared/Breadcrumb/Breadcrumb";
import Testimonials from "../Shared/Testimonials/Testimonials";
import ShowAbout from "./ShowAbout";

const About = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPartners(data.about));
  }, []);

  return (
    <>
      <Breadcrumb />
      <Container className="my-5">
        <h1 className="text-center mb-5">
          This is our awesome <span className="text-warning">mentors</span>
        </h1>
        <Row xs={1} md={2} lg={3} className="g-4 me-0 ms-0">
          {partners.map((person) => (
            <ShowAbout key={person.id} person={person} />
          ))}
        </Row>
      </Container>
      <Testimonials />
    </>
  );
};

export default About;
