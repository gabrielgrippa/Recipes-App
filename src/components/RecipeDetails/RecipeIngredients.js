import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import routeHelper from '../../services/routeHelper';
import { updateProgress } from '../../redux/actions/profileActions';

function RecipeIngredients({ recipe, editMode }) {
  const { api, recipeId } = useParams();
  const { progressRecipeKey } = routeHelper(api);
  const dispatch = useDispatch();

  const recipeProgress = useSelector((state) => {
    const { profileReducer } = state;
    return profileReducer.inProgressRecipes[progressRecipeKey];
  })[recipeId] || [];

  const onCheck = ({ target }) => {
    if (recipeProgress.includes(target.name)) {
      recipeProgress.splice(recipeProgress.indexOf(target.name), 1);
    } else {
      recipeProgress.push(target.name);
    }

    dispatch(updateProgress(progressRecipeKey, recipeId, recipeProgress));
  };

  return (
    <Container>
      <h5><strong>Ingredients</strong></h5>

      { recipe.ingredients.map(({ name, measure }, index) => {
        const checked = recipeProgress.includes(`${index}`);
        const disableDecoration = checked ? 'line-through' : 'none';
        return (
          editMode ? (
            <div
              className="form-check"
              data-testid={ `${index}-ingredient-step` }
              key={ index }
            >
              <input
                className="form-check-input"
                type="checkbox"
                id={ name }
                name={ index }
                checked={ checked }
                onChange={ onCheck }
              />
              <label
                className="form-check-label"
                style={ { textDecoration: disableDecoration } }
                htmlFor={ name }
              >
                { `${name}${measure ? ` - ${measure}` : ''}` }
              </label>
            </div>
          ) : (
            <p
              key={ index }
              className="m-0"
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${name}${measure ? ` - ${measure}` : ''}` }
            </p>
          ));
      })}

    </Container>
  );
}

RecipeIngredients.propTypes = {
  recipe: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
  editMode: PropTypes.bool,
};

RecipeIngredients.defaultProps = {
  editMode: false,
};

export default RecipeIngredients;
