import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import useData from "../../../hooks/useData";
import "./ShowAllService.css";

const ShowAllService = ({service}) => {
  const { id, name, description, price, img, mentor, mentorImg, enroll, rating } =
    service;
    const navigate = useNavigate();
    const { handleAddToCart } = useData();

    const handleClick = () => {
      navigate(`/service/${id}`);
    };

  return (
    <Col>
      <Card className="all-service">
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
              onClick={() => handleAddToCart(service)}
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
    </Col>
  );
};

export default ShowAllService;
