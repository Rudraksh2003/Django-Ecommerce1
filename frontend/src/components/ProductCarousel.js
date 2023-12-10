import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';

function ProductCarousel() {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { error, loading, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-light">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <div className="d-flex align-items-center justify-content-center">
            <div className="w-50">
              <Link to={`/product/${product._id}`} className="d-block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="carousel-image"
                />
              </Link>
            </div>
            <div className="w-50 text-dark p-4">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
              <Link to={`/product/${product._id}`}>
                <Button variant="dark">View Details</Button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
