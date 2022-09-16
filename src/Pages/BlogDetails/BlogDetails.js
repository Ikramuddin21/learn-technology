import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Shared/Breadcrumb/Breadcrumb";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogsData);
        const matchBlog = data?.blogsData?.find((item) => item.id === +blogId);
        setBlog(matchBlog);
      })
  }, [blogId]);
  return (
    <>
      <Breadcrumb heading="Blog Details" />
      <Container className="my-5">
        <Row>
          <Col xs={12} lg={7} xl={8}>
            <img width="100%" className="rounded" src={blog.img} alt="" />
            <h3 className="my-4">{blog.title}</h3>
            <p>{blog.description}</p>
          </Col>

          <Col xs={12} lg={5} xl={4}>
            <div className="shadow py-3 px-4 rounded">
              <h4 className="mb-4">Related Post</h4>
              {
                blogs.map(blog => <div onClick={() => setBlog(blog)} className="bg-light mb-4" role="button" key={blog.id}>
                  <img width="90px" className="rounded me-2 me-sm-3" src={blog.img} alt="" />
                  <span>{blog.title}</span>
                </div>)
              }
            </div>
            <div className="bg-light mt-4 p-3 rounded">
              {
                blogs.map(blog => <button onClick={() => setBlog(blog)} key={blog.id} className="custom-tag shadow-sm mx-1 my-2 px-2 rounded border-0">
                  {blog.title}
                </button>)
              }
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogDetails;
