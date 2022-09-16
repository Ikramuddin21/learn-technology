import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ShowAbout = (props) => {

    const { name, company, age, email, img } = props.person;
    const [buttonText, setButtonText] = useState("Follow");

    return (
        <Col>
            <Card className="shadow">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='mt-4 fs-4 fw-bold'>{name}</Card.Title>
                    <Card.Text className='mt-4'>
                        Company: {company}
                    </Card.Text>

                    <Card.Text className='mt-4'>
                        Age: {age}
                    </Card.Text>

                    <Card.Text className='mt-4'>
                        Email: {email}
                    </Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => setButtonText("Unfollow")}
                        >{buttonText}</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShowAbout;