import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import logo from '../../images/logo.png';
import { Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {

    // social media click handle
    const handleClick = mediaLink => {
        window.open(mediaLink);
    }

    return (
        <footer className='footer bg-dark text-white text-center'>
            <div className="container py-5">
                <div className='row'>
                    <div className='col-md-6 col-sm-12 logo-area mt-4'>
                        <Link to='/home'><img src={logo} alt="Logo" width='100' /></Link>
                        <p className='w-75 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium architecto quidem provident repellat natus quisquam perferendis temporibus, facilis culpa suscipit velit repellendus, dolores omnis cum dolore maxime vero voluptatibus labore eum fugit eos animi? Doloribus labore quo praesentium dolorem velit hic maxime sed.</p>
                    </div>

                    <Nav className="col-md-3 col-sm-6 flex-column">
                        <Link className='nav-link mt-3 text-white custom-hover' to="/home">Home</Link>
                        <Link className='nav-link mt-1 text-white custom-hover' to="/about">About</Link>
                        <Link className='nav-link mt-1 text-white custom-hover' to="/services">Our Services</Link>
                        <Link className='nav-link mt-1 text-white custom-hover' to='/contact'>Contact us</Link>
                        <Link className='nav-link mt-1 text-white custom-hover' to='/signin'>Sign in</Link>
                    </Nav>
                    
                    <ul className='col-md-3 col-sm-6 media-icons list-unstyled'>
                        <li className='mt-4 fs-4 custom-hover' role="button"
                            onClick={() => handleClick("https://www.facebook.com/")}
                        ><FaFacebookSquare /></li>

                        <li className='mt-4 fs-4 custom-hover' role="button"
                            onClick={() => handleClick("https://www.instagram.com/")}
                        ><FaInstagramSquare  className='custom-hover' /></li>

                        <li className='mt-4 fs-4 custom-hover' role="button"
                            onClick={() => handleClick("https://www.twitter.com/")}
                        ><FaTwitterSquare  className='custom-hover' /></li>

                        <li className='mt-4 fs-4 custom-hover' role="button"
                            onClick={() => handleClick("https://www.whatsapp.com/")}
                        ><FaWhatsappSquare /></li>
                    </ul>
                </div>
            </div>
            <span><small>&copy; Ikram Uddin 2022</small></span>
        </footer>
    );
};

export default Footer;