import React, { useContext } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ServicesContext } from '../../App';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const { services, carts } = useContext(ServicesContext);
    const [cart, setCart] = carts;
    const navigate = useNavigate();

    // add to cart 
    const handleAddToCart = service => {
        const newCart = [...cart, service];
        setCart(newCart);
    };

    // see all services button handler
    const handleClick = () => {
        navigate("/services");
    };

    return (
        <div className="services py-5">
            <Row xs={1} sm={1} md={2} xl={3} xxl={4} className='container g-4 mx-auto'>
                {
                    services.slice(0, 4).map(service => <Service
                        key={service.id}
                        service={service}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </Row>
            <div className='mt-5 text-center'>
                <Button
                    variant='primary'
                    onClick={handleClick}
                >See All Services</Button>
            </div>
        </div>
    );
};

export default Services;