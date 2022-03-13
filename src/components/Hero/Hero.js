import React from 'react';
import img from '../../images/hero.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/services");
    };

    return (
        <div className="container-fluid bg-success bg-gradient bg-opacity-75">
            <div className="container">
                <div className='row align-items-center'>
                    <div className='col-md-5 py-4 text-white'>
                        <h1 className='hero-title'>Our services are available <span className="text-warning">world wide</span></h1>
                        <p className='lh-lg'>Lorem, ipsum dolor sit amet consectetur necessitatibus! is adadipisicing Voluptat exercitationem non eveniet vero, asperiores deser expedita esse nisi reprehenderit.</p>
                        <Button
                            variant="primary"
                            onClick={handleClick}
                        >Get started</Button>
                    </div>

                    <div className="col-md-7">
                        <img className='w-100' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;