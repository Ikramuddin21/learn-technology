import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Container, Image, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import useData from "../../../hooks/useData";
import ModalOpen from "../../Shared/ModalOpen/ModalOpen";

const Latests = () => {
  const [services, setServices] = useState({});
  const { handleAddToCart, modal: [show] } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const service = data?.servicesData?.reduce((prev, current) => prev?.enroll > current?.enroll ? prev : current
        );
        setServices(service);
      });
  }, []);

  const { id, name, description, price, img, mentor, mentorImg, enroll, rating } =
    services;

  const handleClick = () => {
    navigate(`/service/${id}`);
  };

  return (
    <Container className="my-5">
      {!services?.name ? (
        <Spinner animation="grow" />
      ) : (
        <>
          <div className="text-center mb-5">
            <h1>Our Latest <span className="text-warning">Courses</span></h1>
            <p className="mx-auto custom-responsive-width">Information Technology courses are an excellent choice to help advance your career. Whether you are seeking professional development, new skills, or a new career.</p>
          </div>
          <Card style={{ maxWidth: "400px" }} className="mx-auto bg-light shadow-lg">
            <Card.Img variant="top" onClick={handleClick} role="button" src={img} />
            <Card.Body>
              <Card.Title onClick={handleClick} role="button" className="fs-4">{name}</Card.Title>
              <Card.Text>{description}</Card.Text>

              <div className="my-4 fs-6 d-flex align-items-center justify-content-between">
                <div>
                  <Image src={mentorImg} width="50px" roundedCircle alt="" />
                  <span className="ms-2">{mentor}</span>
                </div>
                <span>Enrolled: {enroll}</span>
              </div>

              <Card.Text className="text-primary fs-5 fw-bold d-flex justify-content-between">
                ${price}
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(services)}
                >
                  Add to Cart
                </Button>
              </Card.Text>
              <StarRatings
                rating={rating}
                starRatedColor="rgb(255, 188, 11)"
                numberOfStars={5}
                starDimension="17px"
                starSpacing="0"
              />
            </Card.Body>
          </Card>
        </>
      )}
      {show && <ModalOpen />}
    </Container>
  );
};

export default Latests;
