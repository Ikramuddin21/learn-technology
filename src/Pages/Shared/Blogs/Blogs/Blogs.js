import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      const threeBlogs = data.blogsData.slice(0, 3);
      setBlogs(threeBlogs);
    };
    fetchBlogs();
  }, []);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Blogs</h1>
      <Row xs={1} md={2} className="g-4 me-0 ms-0">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
