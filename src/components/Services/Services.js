import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)))
    }, []);

    return (
        <div className="services py-5">
            <Row sm={1} md={2} lg={3} xl={4} className='container g-3 mx-auto'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </Row>
        </div>
    );
};

export default Services;