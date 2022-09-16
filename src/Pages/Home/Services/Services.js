import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useData from "../../../hooks/useData";
import ModalOpen from "../../Shared/ModalOpen/ModalOpen";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const {modal:[show]} = useData();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const threeServices = data.servicesData.slice(0, 3);
        setServices(threeServices);
      });
  }, []);
  
  // see all services button handler
  const handleClick = () => {
    navigate("/services");
  };

  return (
    <div className="services py-5">
      <Container>
        <Row xs={1} md={2} lg={3} className="g-3 ms-0 me-0">
          {services.map((service) => (
            <Service
              key={service.id}
              service={service}
            />
          ))}
          {show && <ModalOpen />}
        </Row>
        <div className="mt-5 text-center">
          <Button variant="primary" onClick={handleClick}>
            See All Services
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
