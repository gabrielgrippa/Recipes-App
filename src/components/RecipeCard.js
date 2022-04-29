import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function RecipeCard({ keyImg, keyName, index, pathname, recipeId }) {
  return (
    <Link
      data-testid={ `${index}-recipe-card` }
      to={ `/${pathname}/${recipeId}` }
    >
      <Card>
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
    </Link>
  );
}

RecipeCard.propTypes = {
  keyImg: PropTypes.string,
  keyName: PropTypes.string,
  pathname: PropTypes.string,
}.isRequired;

export default RecipeCard;
