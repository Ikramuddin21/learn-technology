import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, title, description, img } = blog;
  return (
    <Col className="blog">
      <Card className="d-xxl-flex flex-xxl-row align-items-center shadow-sm">
        <div className="custom-blog-width">
          <Card.Img src={img} width="100%" alt="" />
        </div>
        <Card.Body className="custom-blog-width py-xxl-1">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.split(" ").slice(0, 15).join(" ")}</Card.Text>
          <Link to={`/blog/${id}`}>
            <Button variant="outline-primary">Read More</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Blog;
