import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import ModalOpen from '../Shared/ModalOpen/ModalOpen';

const ServiceDetails = () => {
    const [service, setService] = useState({});
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    const { handleAddToCart, modal: [show] } = useData();

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                setServices(data.servicesData);
                const matchedService = data.servicesData.find(service => service.id === +serviceId);
                setService(matchedService);
            })
    }, [serviceId]);

    return (
        <>
            <Breadcrumb heading="Service Details" />
            <Container className="my-5">
                <Row>
                    <Col xs={12} lg={7} xl={8}>
                        <img width="100%" className="rounded" src={service.img} alt="" />
                        <h3 className="my-4">{service.name}</h3>
                        <p>{service.description}</p>
                    </Col>

                    <Col xs={12} lg={5} xl={4}>
                        <div className="shadow py-3 px-4 rounded text-center">
                            <div className="my-4 pb-2 border-bottom d-flex justify-content-between">
                                <h5>Price</h5>
                                <span className="text-secondary">${service.price}</span>
                            </div>
                            <div className="my-4 pb-2 border-bottom d-flex justify-content-between">
                                <h5>Mentor</h5>
                                <span className="text-secondary">{service.mentor}</span>
                            </div>
                            <div className="my-4 pb-2 border-bottom d-flex justify-content-between">
                                <h5>Language</h5>
                                <span className="text-secondary">English</span>
                            </div>
                            <div className="my-4 pb-2 border-bottom d-flex justify-content-between">
                                <h5>Enrolled</h5>
                                <span className="text-secondary">{service.enroll}</span>
                            </div>
                            <div className="my-4 pb-2 border-bottom d-flex justify-content-between">
                                <h5>Duration</h5>
                                <span className="text-secondary">20 hours</span>
                            </div>
                            <div className="my-4 d-flex justify-content-between">
                                <h5>Deadline</h5>
                                <span className="text-secondary">Oct 10 2022</span>
                            </div>
                            <Button
                                variant="success"
                                className="px-5"
                                onClick={() => handleAddToCart(service)}
                            >
                                Add to Cart
                            </Button>
                        </div>
                        <div className="bg-light mt-4 p-3 rounded">
                            {
                                services.map(service => <button onClick={() => setService(service)} key={service.id} className="custom-tag shadow-sm mx-1 my-2 px-2 rounded border-0">
                                    {service.name}
                                </button>)
                            }
                        </div>
                    </Col>
                </Row>
                {show && <ModalOpen />}
            </Container>
        </>
    );
};

export default ServiceDetails;