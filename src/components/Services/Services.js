import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { ServicesContext } from '../../App';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const {useServices, carts} = useContext(ServicesContext);
    const [services] = useServices;
    const [cart, setCart] = carts;

    // add to cart 
    const handleAddToCart = service => {
        const newCart = [...cart, service];
        setCart(newCart);
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
        </div>
    );
};

export default Services;