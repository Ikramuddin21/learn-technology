import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { FaCartArrowDown } from "react-icons/fa";
import useData from '../../../hooks/useData';

const Header = () => {
    const {cartData} = useData();
    const [cart] = cartData;

    // custom header background
    const customBg = {
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)"
    }

    return (
        <Navbar style={customBg} expand="lg" sticky="top">
            <Container>
                <Nav>
                    <Link to="/">
                        <img src={logo} className="" alt="Logo" width='50px' />
                    </Link>
                </Nav>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 ms-3" navbarScroll>
                        <Link className='nav-link text-light' to="/home">Home</Link>
                        <Link className='nav-link text-light' to="/about">About</Link>
                        <Link className='nav-link text-light' to="/services">Our Services</Link>
                        <Link className='nav-link text-light' to="/blog">Blog</Link>
                    </Nav>
                    <Nav>
                        <Link className='nav-link me-2 fs-5 text-light' to="/cart">
                            <FaCartArrowDown />
                            <span className='fw-bold'>{cart.length}</span>
                        </Link>

                        <Link className='nav-link me-2' to="/contact">
                            <Button variant="success">Contact us</Button>
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