import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function RecipeInstructions({ recipe }) {
  return (
    <Container>
      <h5><strong>Instructions</strong></h5>

      <p
        style={ { whiteSpace: 'pre-line' } }
        data-testid="instructions"
      >
        { recipe.instructions }
      </p>
    </Container>
  );
}

RecipeInstructions.propTypes = {
  recipe: PropTypes.shape({
    instructions: PropTypes.string,
  }),
}.isRequired;

export default RecipeInstructions;
