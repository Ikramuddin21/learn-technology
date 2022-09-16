import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllBlog = ({ blog }) => {
  const { id, title, description, img } = blog;
  return (
    <Col>
      <Card className="shadow-sm">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>{description.split(" ").slice(0, 20).join(" ")}</Card.Text>
          <Link to={`/blog/${id}`}>
            <Button variant="outline-primary">Read More</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllBlog;
