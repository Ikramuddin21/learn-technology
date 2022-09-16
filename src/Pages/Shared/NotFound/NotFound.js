import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className='text-center d-flex justify-content-center align-items-center' style={{ height: '65vh' }}>
            <div>
                <h1>404!!</h1>
                <h2>Page not found.</h2>
                <Link to="/">
                    <Button variant="primary">Back to home</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;