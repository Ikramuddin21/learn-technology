import React, { useState } from "react";
import { useEffect } from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import accordionImg from "../../../images/accordion.png";

const AccordionQA = () => {
  const [accordions, setAccordions] = useState([]);
  useEffect(() => {
    const accordionsFetch = async () => {
      const fetchUri = await fetch("data.json");
      const res = await fetchUri.json();
      setAccordions(res.accordionsData);
    };
    accordionsFetch();
  }, []);
  return (
    <Container className="my-5">
      <Row md={1} xl={2} className="ms-0 me-0">
        <div className="mb-3">
          <img className="w-100 rounded" src={accordionImg} alt="" />
        </div>
        <Accordion defaultActiveKey="2">
          <h2 className="mb-3 text-center">Construct A Stunning <span className="text-warning">Career Perspective</span></h2>
          {accordions.map((accordion) => (
            <Accordion.Item key={accordion.id} eventKey={accordion.id}>
              <Accordion.Header>{accordion.heading}</Accordion.Header>
              <Accordion.Body style={{ color: "gray" }}>
                {accordion.description}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Row>
    </Container>
  );
};

export default AccordionQA;
