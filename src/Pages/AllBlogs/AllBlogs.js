import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Breadcrumb from "../Shared/Breadcrumb/Breadcrumb";
import AllBlog from "./AllBlog/AllBlog";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setBlogs(data.blogsData);
    };
    fetchBlogs();
  }, []);
  return (
    <>
    <Breadcrumb heading="Our Blogs" />
      <Container className="my-5">
        <Row xs={1} md={2} xl={3} className="g-4 me-0 ms-0">
          {blogs.map((blog) => (
            <AllBlog key={blog.id} blog={blog} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllBlogs;
