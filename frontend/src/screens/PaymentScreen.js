import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';
import paypalIcon from '../images/paypal-icon.png';

function PaymentScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  if (!shippingAddress.address) {
    history.push('/shipping');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div
      className="bg-gradient-light py-4 mb-4 rounded shadow-lg"
      style={{
        background: 'linear-gradient(to right, #6c757d, #aab7b8)', // Bluish-grey gradient
      }}
    >
      <div className="container text-center">
        <h1 className="mb-3 text-light">Secure Payment</h1>
        <p className="lead text-light">
          Choose your preferred payment method to complete your purchase
        </p>
      </div>

      <FormContainer>
        <CheckoutSteps step1 step2 step3 />

        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend" className="text-light">
              Select Your Payment Method
            </Form.Label>
            <div className="d-flex align-items-center flex-column">
              <Form.Check
                type="radio"
                label={
                  <div className="d-flex align-items-center">
                    <img
                      src={paypalIcon} // Replace with your PayPal or Credit Card icon
                      alt="PayPal or Credit Card"
                      className="me-3"
                      style={{ maxWidth: '40px' }} // Adjust the icon size as needed
                    />
                    <span className="fs-5 text-light">
                      PayPal or Credit Card
                    </span>
                  </div>
                }
                id="paypal"
                name="paymentMethod"
                value="PayPal"
                checked={paymentMethod === 'PayPal'}
                onChange={handlePaymentChange}
              ></Form.Check>
              {/* Add more payment options similarly */}
            </div>
          </Form.Group>

          <div className="d-grid mt-4">
            <Button
              type="submit"
              variant="primary"
              className="rounded-pill shadow neon-text"
            >
              Continue
            </Button>
          </div>
        </Form>
      </FormContainer>
    </div>
  );
}

export default PaymentScreen;
