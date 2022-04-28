import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function RecipeCard({ keyImg, keyName, index }) {
  return (
    <Card
      data-testid={ `${index}-recipe-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ keyImg }
        alt={ `${keyName}-img` }
      />
      <h2
        data-testid={ `${index}-card-name` }
      >
        { keyName }
      </h2>
    </Card>
  );
}

RecipeCard.propTypes = {
  keyImg: PropTypes.string,
  keyName: PropTypes.string,
}.isRequired;

export default RecipeCard;
