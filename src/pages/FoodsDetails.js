import React from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../components/Loading';

function FoodsDetails() {
  const pathname = window.location.pathname.split('/')[2];
  console.log(pathname);
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Loading />
    </Container>
  );
}

export default FoodsDetails;
