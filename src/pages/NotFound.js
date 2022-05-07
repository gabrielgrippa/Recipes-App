import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <Card.Title
        className="text-danger"
      >
        Page Not Found
      </Card.Title>
      <Button
        onClick={ () => history.goBack() }
      >
        Go Back
      </Button>
    </Container>
  );
}

export default NotFound;
