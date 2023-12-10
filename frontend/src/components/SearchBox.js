import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function SearchBox() {
  const [keyword, setKeyword] = useState('');

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} inline className="d-flex">
      <FormControl
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products..."
        className="mr-2"
        style={{ borderRadius: '20px 0 0 20px', flex: '1' }}
      />
      <Button
        type="submit"
        variant="outline-success"
        className="p-2"
        style={{ borderRadius: '0 20px 20px 0' }}
      >
        <i className="fas fa-search"></i>
      </Button>
    </Form>
  );
}

export default SearchBox;
