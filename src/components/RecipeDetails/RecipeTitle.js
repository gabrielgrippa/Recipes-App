import React from 'react';
import PropTypes from 'prop-types';

function RecipeTitle({ recipe }) {
  return (
    <div>
      <h1
        data-testid="recipe-title"
        className="h3 m-0"
      >
        { recipe.title }
      </h1>
      <span
        data-testid="recipe-category"
        className="text-muted"
      >
        { recipe.category }
        { recipe.alcoholic && ' - Alcoholic' }
      </span>
    </div>
  );
}

RecipeTitle.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    alcoholic: PropTypes.string,
  }),
}.isRequired;

export default RecipeTitle;
