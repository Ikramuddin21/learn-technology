import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import logo from "../../../images/logo.png";
import { Container, Nav } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  // social media click handle
  const handleClick = (mediaLink) => {
    window.open(mediaLink);
  };

  return (
    <footer className="footer bg-dark text-light text-center">
      <Container className="py-5">
        <div className="">
          <Link to="/">
            <img src={logo} alt="Logo" width="70px" />
          </Link>
        </div>

        <Nav className="d-flex align-items-center justify-content-center mt-3">
          <Link className="nav-link text-light custom-hover px-1 mx-2" to="/home">
            Home
          </Link>
          <Link className="nav-link text-light custom-hover px-1 mx-2" to="/about">
            About
          </Link>
          <Link className="nav-link text-light custom-hover px-1 mx-2" to="/services">
            Our Services
          </Link>
          <Link className="nav-link text-light custom-hover px-1 mx-2" to="/contact">
            Contact us
          </Link>
          <Link className="nav-link text-light custom-hover px-1 mx-2" to="/blog">
            Blog
          </Link>
        </Nav>

        <ul className="d-flex align-items-center justify-content-center list-unstyled mt-3">
          <li
            className="fs-4 custom-hover text-light mx-3"
            role="button"
            onClick={() => handleClick("https://www.facebook.com/")}
          >
            <FaFacebookSquare />
          </li>

          <li
            className="fs-4 custom-hover text-light mx-3"
            role="button"
            onClick={() => handleClick("https://www.instagram.com/")}
          >
            <FaInstagramSquare />
          </li>

          <li
            className="fs-4 custom-hover text-light mx-3"
            role="button"
            onClick={() => handleClick("https://www.twitter.com/")}
          >
            <FaTwitterSquare />
          </li>

          <li
            className="fs-4 custom-hover text-light mx-3"
            role="button"
            onClick={() => handleClick("https://www.whatsapp.com/")}
          >
            <FaWhatsappSquare />
          </li>
        </ul>
        <p className="custom-responsive-width mx-auto mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          architecto quidem provident repellat natus quisquam perferendis
          temporibus, facilis culpa suscipit velit repellendus, dolores.
        </p>
      </Container>
      <div className="custom-copy-right p-3">
        <small>&copy; Ikram Uddin 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
