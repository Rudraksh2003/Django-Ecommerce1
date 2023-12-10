import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      {/* Shop Banner */}
      <section className="shop-banner">
        <Container className="text-center">
          <h2>Welcome to Our Shop!</h2>
          <p>Explore our amazing collection. Limited time offers. Hurry up!</p>
          <Button variant="primary" size="lg">
            Shop Now
          </Button>
        </Container>
      </section>

      <footer className="mt-5 bg-light text-dark">
        <Container fluid className="p-4">
          <Row className="border-top justify-content-between">
            <Col md={4} sm={6} xs={12}>
              <div className="footer-section ">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <div className="footer-section">
                <h5>Newsletter</h5>
                <p>Subscribe to our newsletter for updates</p>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Subscribe
                  </Button>
                </Form>
              </div>
            </Col>
            <Col className="d-flex justify-content-end" md={4} xs={12}>
              <div className="footer-section">
                <h5>Follow Us</h5>
                <div className="social-icons">
                  <a href="https://www.facebook.com">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com/gds_k_s?lang=en">
                    <FaTwitter />
                  </a>
                  <a href="https://www.instagram.com/gagandeepgdsks/">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col className="text-center">
              <p>
                &copy; {new Date().getFullYear()} Your Company Name. All rights
                reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
