import React from 'react';
import { Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PATH_FOODS } from '../redux/actions';

function ExploreButtons({ exploreButtons, handlerClick }) {
  return (
    <Container className="d-flex flex-column mt-5">
      {exploreButtons.map((button) => {
        const lowerText = button.toLowerCase();
        const dinamicBg = lowerText === PATH_FOODS
          ? 'bg-warning text-dark' : 'bg-info text-white';
        return (
          <Button
            data-testid={ `explore-${lowerText}` }
            key={ button }
            className={ `m-1 ${dinamicBg}` }
            onClick={ () => handlerClick(lowerText) }
          >
            { `Explore ${button}` }
          </Button>
        );
      })}
    </Container>
  );
}

ExploreButtons.propTypes = {
  exploreButtons: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default ExploreButtons;
