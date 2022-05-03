import React from 'react';
import { Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PATH_FOODS } from '../redux/actions';

function ExploreButtons({ exploreButtons, handlerClick }) {
  const renderLabel = (text) => {
    if (text === 'Foods' || text === 'Drinks') return `Explore ${text}`;
    if (text === 'Surprise') return 'Surprise me!';
    return `By ${text}`;
  };

  const testIdLabel = (text) => {
    if (text === 'surprise me!') return 'explore-surprise';
    return `explore-${text.replace(' ', '-')}`;
  };

  return (
    <Container className="d-flex flex-column mt-5">
      {exploreButtons.map((button) => {
        const lowerText = button.toLowerCase();
        const dinamicBg = lowerText === PATH_FOODS
          ? 'bg-warning text-dark' : 'bg-info text-white';
        return (
          <Button
            data-testid={ testIdLabel(lowerText) }
            key={ button }
            className={ `m-1 ${dinamicBg}` }
            onClick={ () => handlerClick(lowerText) }
          >
            { renderLabel(button) }
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
