import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import RecipeActions from '../components/RecipeDetails/RecipeActions';
import RecipeIngredients from '../components/RecipeDetails/RecipeIngredients';
import RecipeInstructions from '../components/RecipeDetails/RecipeInstructions';
import RecipeTitle from '../components/RecipeDetails/RecipeTitle';
import { addDoneRecipe, updateProgress } from '../redux/actions/profileActions';
import { getRecipe } from '../services/API';
import recipeNormalizer from '../services/recipeNormalizer';
import routeHelper from '../services/routeHelper';

function InProgressRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { api, recipeId } = useParams();
  const { currentApiType, progressRecipeKey } = routeHelper(api);

  const [recipe, setRecipe] = useState(null);

  const recipeProgress = useSelector((state) => {
    const { inProgressRecipes } = state.profileReducer;
    return inProgressRecipes[progressRecipeKey];
  })[recipeId];

  useEffect(() => {
    if (!recipeProgress) {
      dispatch(updateProgress(progressRecipeKey, recipeId, []));
    }

    (async () => {
      const recipeReq = await getRecipe(currentApiType, recipeId);
      const normalizedRecipe = recipeNormalizer(currentApiType, recipeReq);
      setRecipe(normalizedRecipe);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!recipe) return <Loading fullPage />;

  const completeRecipe = () => {
    dispatch(addDoneRecipe(recipe));
    history.push('/done-recipes');
  };

  const recipeCompleted = recipeProgress?.length === recipe.ingredients.length;

  return (
    <>
      <img
        data-testid="recipe-photo"
        src={ recipe.image }
        alt={ recipe.title }
        className="w-100 mb-3 shadow-sm"
        style={ { objectFit: 'cover', height: '200px' } }
      />

      <Container
        className="d-flex justify-content-between align-items-center"
      >
        <RecipeTitle recipe={ recipe } />
        <RecipeActions recipe={ recipe } />
      </Container>

      <hr />
      <RecipeIngredients editMode recipe={ recipe } />

      <hr />
      <RecipeInstructions recipe={ recipe } />

      <div className="mb-5 pb-2" />
      <Button
        className="w-100 fixed-bottom p-2"
        data-testid="finish-recipe-btn"
        disabled={ !recipeCompleted }
        onClick={ completeRecipe }
      >
        Finish recipe
      </Button>
    </>
  );
}

export default InProgressRecipe;
