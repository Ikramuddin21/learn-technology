import React, { useContext } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { FaCartArrowDown } from "react-icons/fa";
import { ServicesContext } from '../../App';

const Header = () => {
    const { carts } = useContext(ServicesContext);
    const [cart] = carts;
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Nav>
                    <Link to="/home">
                        <img src={logo} className="d-inline-block align-top" alt="Logo" width='100' />
                    </Link>
                </Nav>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 ms-3" navbarScroll>
                        <Link className='nav-link' to="/home">Home</Link>
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/services">Our Services</Link>
                    </Nav>
                    <Nav>
                        <Link className='nav-link me-2 fs-5' to="/cart">
                            <FaCartArrowDown />
                            <span className='text-primary fw-bold'>{cart.length}</span>
                        </Link>

                        <Link className='nav-link me-2' to="/contact">
                            <Button variant="outline-success">Contact us</Button>
                        </Link>

                        <Link className='nav-link' to="/login">
                            <Button variant="primary">Log in</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;