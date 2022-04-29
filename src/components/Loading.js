import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <Spinner
      as="span"
      animation="border"
      size="lg"
      role="status"
      aria-hidden="true"
      variant="success"
    />
  );
}

export default Loading;
