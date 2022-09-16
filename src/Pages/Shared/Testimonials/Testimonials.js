import Carousel from "react-bootstrap/Carousel";
import React, { useEffect } from "react";
import { useState } from "react";
import carouselImg from "../../../images/carousel-banner.jpg";
import { Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const {pathname} = useLocation();

  useEffect(() => {
    const testimonialsFetch = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setTestimonials(data.reviews);
    };
    testimonialsFetch();
  }, []);

  const carouselStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${carouselImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "650px",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className={pathname.includes("about") ? "my-0" : "my-5"}>
      <h1 className="mb-5 text-center">Our Students Say <span className="text-warning">About us</span></h1>
      <Carousel fade>
        {testimonials.map((testimonial) => (
          <Carousel.Item key={testimonial.id}>
            <div style={carouselStyle}>
              <Carousel.Caption className="custom-carousel-position">
                <div>
                  <Image src={testimonial.img} roundedCircle alt="" />
                  <p className="my-3 custom-responsive-width mx-auto">
                    {testimonial.message}
                  </p>
                  <div>
                    <h3 className="text-warning">{testimonial.name}</h3>
                    <h3>{testimonial.address}</h3>
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
