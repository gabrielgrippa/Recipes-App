import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function DisplayCard({ recipe, typeCard, index, pathname }) {
  const dinamicBg = pathname === 'foods' ? 'bg-warning text-dark' : 'bg-info text-white';
  const redirectPath = typeCard === 'recipe'
    ? `/${pathname}/${recipe.id}` : `/${pathname}`;
  return (
    <Link
      data-testid={ `${index}-${typeCard}-card` }
      to={ redirectPath }
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

DisplayCard.propTypes = {
  recipe: PropTypes.object,
  pathname: PropTypes.string,
}.isRequired;

export default DisplayCard;
