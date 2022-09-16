import React from "react";
import { Link, useLocation } from "react-router-dom";
import bgImg from "../../../images/breadcrumb-banner.jpg";

const Breadcrumb = ({ heading }) => {
  const { pathname } = useLocation();

  const breadcrumbStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "450px",
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  };

  return (
    <div style={breadcrumbStyle} className="text-white">
      <h1>{heading ? heading : pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2)}</h1>
      <div>
        <Link to="/" className="text-white text-decoration-none border-end border-2 pe-2 fs-5">
          <span>Home</span>
        </Link>
        <span className="ms-2 text-warning fs-5">{heading ? heading : pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2)}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
