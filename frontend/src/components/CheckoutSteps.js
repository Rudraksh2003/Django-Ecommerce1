import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center mb-4 checkout-steps">
      <Nav.Item className={step1 ? 'completed' : 'inactive'}>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>
              <FaCheckCircle className="completed-icon" /> Login
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className="d-inline-block">
            Login
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className={step2 ? 'completed' : step1 ? 'active' : 'inactive'}>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>
              <FaCheckCircle className="completed-icon" /> Shipping
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className="d-inline-block">
            Shipping
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className={step3 ? 'completed' : step2 ? 'active' : 'inactive'}>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>
              <FaCheckCircle className="completed-icon" /> Payment
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className="d-inline-block">
            Payment
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className={step4 ? 'completed' : step3 ? 'active' : 'inactive'}>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>
              <FaCheckCircle className="completed-icon" /> Place Order
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className="d-inline-block">
            Place Order
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;
