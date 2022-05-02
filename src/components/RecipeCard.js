import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function RecipeCard({ keyImg, keyName, index, pathname, recipeId }) {
  const dinamicBg = pathname === 'foods' ? 'bg-warning text-dark' : 'bg-info text-white';
  return (
    <Link
      data-testid={ `${index}-recipe-card` }
      to={ `/${pathname}/${recipeId}` }
      style={ { width: '148.5px', margin: '2.5%' } }
    >
      <Card className="text-center">
        <Card.Img
          data-testid={ `${index}-card-img` }
          src={ keyImg }
          alt={ `${keyName}-img` }
          variant="top"
        />
        <Card.Footer
          data-testid={ `${index}-card-name` }
          className={ dinamicBg }
        >
          { keyName }
        </Card.Footer>
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
