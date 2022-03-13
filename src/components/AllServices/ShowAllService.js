import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './ShowAllService.css';

const ShowAllService = (props) => {

    const { name, description, price, img } = props.service;
    const {handleAddToCart} = props;

    return (
        <Col>
            <Card className='all-service'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-4'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='text-primary fs-5 fw-bold d-flex justify-content-between'>
                        ${price}
                        <Button
                         variant="primary"
                         onClick={() => handleAddToCart(props.service)}
                        >Enroll</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShowAllService;