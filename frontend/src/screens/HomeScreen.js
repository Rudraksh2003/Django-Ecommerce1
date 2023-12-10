import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import { listProducts } from '../actions/productActions';

function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div className="container mt-4">
      {!keyword && <ProductCarousel />}

      <div className="text-center mb-4">
        <h1>Browse Electronics</h1>
        <p>Click on the products to add to cart and continue shopping</p>
      </div>

      {loading ? (
        <Loader /> // Assuming Loader is a component for displaying loading animation
      ) : error ? (
        <Message variant="danger">{error}</Message> // Assuming Message is a component for displaying error messages
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />{' '}
                {/* Assuming Product is a component */}
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Paginate page={page} pages={pages} keyword={keyword} />{' '}
            {/* Assuming Paginate is a component */}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
