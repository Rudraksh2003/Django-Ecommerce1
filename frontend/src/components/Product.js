import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`} className="text-decoration-none">
        <Card.Img src={product.image} variant="top" className="product-image" />
      </Link>
      <div className="d-flex align-items-center justify-content-end mt-2">
        {/* Assuming you have a Rating component */}
        <Rating value={product.rating} color={'#f8e825'} />
        <span className="ms-2">{product.numReviews} reviews</span>
      </div>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text
          as="div"
          className="d-flex justify-content-between align-items-center my-3"
        >
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Text>
        <div className="d-grid">
          <Link to={`/product/${product._id}`} className="text-decoration-none">
            <Button variant="dark" className="text-uppercase">
              View Product
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
