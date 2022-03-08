import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className="d-inline-block align-top" alt="Logo" width='100' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className=''>
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Link className='nav-link' to="/home">Home</Link>
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/services">Our Services</Link>
                    </Nav>
                    <Nav>
                        <Link className='nav-link me-2 fs-5' to="/cart">
                            <FontAwesomeIcon icon={faShoppingBasket} />
                            <span>0</span>
                        </Link>

                        <Link className='nav-link me-2' to="/contact">
                            <Button variant="outline-success">Contact us</Button>
                        </Link>

                        <Link className='nav-link' to="/signin">
                            <Button variant="primary">Sign in</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;