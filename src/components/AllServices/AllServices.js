import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { ServicesContext } from '../../App';
import ShowAllService from './ShowAllService';

const AllServices = () => {

    const {services, carts} = useContext(ServicesContext);
    const [cart, setCart] = carts;

    // handle add to cart
    const handleAddToCart = service => {
        const newCart = [...cart, service];
        setCart(newCart);
    };

    return (
        <div className='container my-5'>
            <h1 className='text-center text-primary mb-5'>All Services Here</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <ShowAllService
                        key={service.id}
                        service={service}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </Row>
        </div>
    );
};

export default AllServices;