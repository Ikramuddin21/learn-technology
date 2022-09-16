import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useData from "../../hooks/useData";
import Breadcrumb from "../Shared/Breadcrumb/Breadcrumb";
import ModalOpen from "../Shared/ModalOpen/ModalOpen";
import ShowAllService from "./ShowAllService/ShowAllService";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const {
    modal: [show],
  } = useData();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data.servicesData));
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className="container my-5">
        <h1 className="text-center mb-5">All Services Here</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <ShowAllService key={service.id} service={service} />
          ))}
          {show && <ModalOpen />}
        </Row>
      </div>
    </>
  );
};

export default AllServices;
