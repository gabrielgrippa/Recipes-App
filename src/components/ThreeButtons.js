import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';

function ThreeButtons({ handleClick }) {
  return (
    <Container className="d-flex flex-wrap mt-2 mb-2">
      <Button
        data-testid="filter-by-all-btn"
        className="bg-warning text-dark flex-fill m-1"
        onClick={ handleClick }
        value="All"
      >
        All
      </Button>
      <Button
        className="bg-warning text-dark flex-fill m-1"
        data-testid="filter-by-food-btn"
        onClick={ handleClick }
        value="food"
      >
        Foods
      </Button>
      <Button
        className="bg-warning text-dark flex-fill m-1"
        data-testid="filter-by-drink-btn"
        onClick={ handleClick }
        value="drink"
      >
        Drinks
      </Button>
    </Container>
  );
}

ThreeButtons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ThreeButtons;
