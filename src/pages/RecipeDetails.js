/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { getRecipe, searchApi } from '../services/API';
import recipeNormalizer from '../services/recipeNormalizer';
import routeHelper from '../services/routeHelper';
import RecipeActions from '../components/RecipeDetails/RecipeActions';
import RecipeIngredients from '../components/RecipeDetails/RecipeIngredients';
import RecipeInstructions from '../components/RecipeDetails/RecipeInstructions';
import RecipeVideo from '../components/RecipeDetails/RecipeVideo';
import RecipeTitle from '../components/RecipeDetails/RecipeTitle';

function RecipeDetails() {
  // Helper hooks/variables
  const RECOMMENDED_RECIPES_QTY = 6;
  const { api, recipeId } = useParams();
  const {
    currentApiType,
    oppositeApiType,
    oppositeRoute,
    progressRecipeKey,
  } = routeHelper(api);

  // State
  const [recipe, setRecipe] = useState(null);
  const [recommended, setRecommended] = useState(null);

  const { inProgressRecipes, doneRecipes } = useSelector((s) => s.profileReducer);
  const recipeProgress = inProgressRecipes[progressRecipeKey][recipeId];
  const recipeIsDone = doneRecipes.find((done) => done.id === recipeId);

  useEffect(() => {
    setRecipe(null);
    setRecommended(null);

    (async () => {
      const recipeReq = await getRecipe(currentApiType, recipeId);
      setRecipe(recipeNormalizer(currentApiType, recipeReq));

      const recommendedReq = await searchApi({
        api: oppositeApiType,
        searchType: 'name',
        token: '1',
      });
      setRecommended(recommendedReq.slice(0, RECOMMENDED_RECIPES_QTY));
    })();
  }, []);

  if (!recipe || !recommended) return <Loading fullPage />;
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
      <RecipeIngredients recipe={ recipe } />

      <hr />
      <RecipeInstructions recipe={ recipe } />

      { recipe.video && <hr /> }
      { recipe.video && <RecipeVideo recipe={ recipe } /> }

      <Container>
        <hr />

        <h5><strong>Recommended</strong></h5>
        <div
          className="d-flex flex-nowrap overflow-auto"
          style={ { gap: '10px' } }
        >
          { recommended.map((item, index) => {
            const normalized = recipeNormalizer(oppositeApiType, item);

            return (
              <Link
                key={ normalized.id }
                to={ `${oppositeRoute}/${normalized.id}` }
                style={ { minWidth: '65%' } }
                data-testid={ `${index}-recomendation-card` }
              >
                <Card
                  className="card-block"
                >
                  <Card.Img
                    height="100px"
                    style={ { objectFit: 'cover' } }
                    className="shadow-sm"
                    src={ normalized.image }
                    alt={ normalized.title }
                  />
                  <Card.Title
                    className="text-truncate m-2"
                    data-testid={ `${index}-recomendation-title` }
                  >
                    { normalized.title }
                  </Card.Title>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>

      <div className="mb-5 pb-2" />
      { !recipeIsDone && (
        <Link to={ `/${api}/${recipeId}/in-progress` }>
          <Button
            className="w-100 fixed-bottom p-2"
            data-testid="start-recipe-btn"
          >
            { recipeProgress ? 'Continue Recipe' : 'Start Recipe' }
          </Button>
        </Link>
      ) }
    </>
  );
}

export default RecipeDetails;
