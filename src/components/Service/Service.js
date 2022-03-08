import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    console.log(props);
    const { name, description, price, img } = props.service;
    return (
        <Col>
            <Card className='service'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='fs-5 text-primary fw-bolder d-flex justify-content-between'>
                        <span>${price}</span>
                        <Link className='me-2' to="/service">
                            <Button variant="primary">Enroll</Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;