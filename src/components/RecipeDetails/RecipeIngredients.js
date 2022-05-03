import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function RecipeIngredients({ recipe }) {
  return (
    <Container>
      <h5><strong>Ingredients</strong></h5>

      { recipe.ingredients.map(({ name, measure }, index) => (
        <p
          className="m-0"
          key={ name }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          { `- ${name} ${measure ? `- ${measure}` : ''}` }
        </p>
      )) }
    </Container>
  );
}

RecipeIngredients.propTypes = {
  recipe: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.any),
  }),
}.isRequired;

export default RecipeIngredients;
