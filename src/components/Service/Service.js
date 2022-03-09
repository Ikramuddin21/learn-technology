import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    const { name, description, price, img } = props.service;

    return (
        <Col>
            <Card className='service'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-4 fw-bolder'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='fs-5 text-primary fw-bolder d-flex justify-content-between'>
                        <span>${price}</span>
                        <Link className='me-2' to="/">
                            <Button 
                            variant="primary"
                            onClick={() => props.handleAddToCart(props.service)}
                            >Enroll</Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;