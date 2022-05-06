import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

import MainScreen from './pages/MainScreen';
import RecipeDetails from './pages/RecipeDetails';
import Explore from './pages/Explore/Explore';
import ExploreRecipes from './pages/Explore/ExploreRecipes';
import ExploreIngredients from './pages/Explore/ExploreIngredients';
import ExploreNationalities from './pages/Explore/ExploreNationalities';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import InProgressRecipe from './pages/InProgressRecipe';
import NotFound from './pages/NotFound';

const favoriteRecipesPath = '/favorite-recipes';
const profilePath = '/profile';
const doneRecipesPath = '/done-recipes';
const exploreIngredientsPath = '/explore/:recipeType/ingredients';
const exploreNationalitiesPath = '/explore/:recipeType/nationalities';
const exploreRecipesPath = '/explore/:recipes';
const explorePath = '/explore';
const recipesIdPath = '/:api/:recipeId';
const inProgressRecipePath = '/:api/:recipeId/in-progress';
const recipesPath = '/:recipeType';
const loginPath = '/';
const NotFoundPath = '*';

function App() {
  return (
    <Switch>
      <Route exact path={ inProgressRecipePath } component={ InProgressRecipe } />
      <Route exact path={ favoriteRecipesPath } component={ Favorites } />
      <Route exact path={ profilePath } component={ Profile } />
      <Route exact path={ doneRecipesPath } component={ DoneRecipes } />
      <Route exact path={ exploreNationalitiesPath } component={ ExploreNationalities } />
      <Route exact path={ exploreIngredientsPath } component={ ExploreIngredients } />
      <Route exact path={ exploreRecipesPath } component={ ExploreRecipes } />
      <Route exact path={ explorePath } component={ Explore } />
      <Route exact path={ recipesIdPath } component={ RecipeDetails } />
      <Route exact path={ recipesPath } component={ MainScreen } />
      <Route exact path={ loginPath } component={ Login } />
      <Route exact path={ NotFoundPath } component={ NotFound } />
    </Switch>
  );
}

export default App;
