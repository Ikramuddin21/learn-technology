import React from "react";
import { Button, Card, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Service.css";
import StarRatings from "react-star-ratings";
import useData from "../../../hooks/useData";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, description, price, img, mentor, mentorImg, enroll, rating } = service;
  const { handleAddToCart } = useData();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/service/${id}`);
  };

  return (
    <Col>
      <Card className="service">
        <Card.Img onClick={handleClick} variant="top" role="button" src={img} />
        <Card.Body>
          <Card.Title className="fs-4" onClick={handleClick} role="button">{name}</Card.Title>
          <Card.Text>{description.split(" ").slice(0, 22).join(" ")}.</Card.Text>

          <div className="my-4 fs-6 d-flex align-items-center justify-content-between">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="button-tooltip-2">{mentor}</Tooltip>}
            >
              <Image src={mentorImg} width="50px" roundedCircle alt="" />
            </OverlayTrigger>
            <span>Enrolled: {enroll}</span>
          </div>

          <Card.Text className="fs-5 text-primary fw-bolder d-flex align-items-center justify-content-between">
            <span>${price}</span>
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

export default Service;
