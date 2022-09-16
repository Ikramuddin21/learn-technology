import React from "react";
import {
  Button,
  CloseButton,
  Container,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import Breadcrumb from "../Shared/Breadcrumb/Breadcrumb";

const Cart = () => {
  const { cartData } = useData();
  const [cart, setCart] = cartData;

  // handle close button
  const handleRemove = (service) => {
    const remainderService = cart.filter(
      (clickService) => clickService.id !== service.id
    );
    setCart(remainderService);
  };

  // service total price
  const total = cart.reduce((previous, service) => previous + service.price, 0);

  // shipping
  const shipping = total > 50 ? 20 : 0;

  // grand total
  const grandTotal = total + shipping;

  return (
    <>
      <Breadcrumb />
      <Container className="container my-5 text-center">
        <h1 className="mb-5">Cart details</h1>

        {cart.length === 0 && (
          <div className="my-5">
            <h5>Your cart is empty, go back home page and enroll.</h5>
            <Link to="/">
              <Button variant="primary" className="mt-3">
                Go Back
              </Button>
            </Link>
          </div>
        )}

        {cart.length > 0 && (
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((service, index) => (
                <tr key={service.id}>
                  <td>{index + 1}</td>
                  <td>{service.name}</td>
                  <td>${service.price}</td>
                  <td>
                    <CloseButton onClick={() => handleRemove(service)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {cart.length > 0 && (
          <div className="shadow custom-responsive-width mx-auto mt-5 p-3 p-sm-5 ">
            <h2 className="mb-5">Cart total</h2>
            <ListGroup>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>SubTotal :</span>
                <span>${total}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Shipping :</span>
                <span>${shipping}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Total :</span>
                <span>${grandTotal}</span>
              </ListGroup.Item>
            </ListGroup>
            <Link to="/login">
              <Button variant="success" className="mt-5">
                Proced to checkout
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
