import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { ServicesContext } from '../../App';

const Cart = () => {

    const {carts} = useContext(ServicesContext);
    const [cart] = carts;
    console.log(cart);

    return (
        <div className='container my-5'>
            <h1 className='text-center text-primary mb-5'>Cart details</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Cart;