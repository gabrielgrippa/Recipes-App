import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function RecipeCard({ recipe, index, pathname }) {
  const dinamicBg = pathname === 'foods' ? 'bg-warning text-dark' : 'bg-info text-white';
  return (
    <Link
      data-testid={ `${index}-recipe-card` }
      to={ `/${pathname}/${recipe.id}` }
      style={ { width: '148.5px', margin: '2.5%' } }
    >
      <Card className="text-center">
        <Card.Img
          data-testid={ `${index}-card-img` }
          src={ recipe.image }
          alt={ `${recipe.title}-img` }
          variant="top"
        />
        <Card.Footer
          data-testid={ `${index}-card-name` }
          className={ dinamicBg }
        >
          { recipe.title }
        </Card.Footer>
      </Card>
    </Link>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object,
  pathname: PropTypes.string,
}.isRequired;

export default RecipeCard;
