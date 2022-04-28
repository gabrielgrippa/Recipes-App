import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function RecipeCard({ keyImg, keyName }) {
  return (
    <Card>
      <img src={ keyImg } alt={ `${keyName}-img` } />
      { keyName }
    </Card>
  );
}

RecipeCard.propTypes = {
  keyImg: PropTypes.string,
  keyName: PropTypes.string,
}.isRequired;

export default RecipeCard;
