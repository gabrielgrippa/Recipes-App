import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

import Recipes from './pages/Recipes';
import RecipesDetails from './pages/RecipesDetails';
import Explore from './pages/Explore';
import ExploreRecipes from './pages/ExploreRecipes';
import ExploreIngredients from './pages/ExploreIngredients';
import ExploreNationalities from './pages/ExploreNationalities';

const exploreIngredientsPath = '/explore/:recipes/ingredients';
const exploreNationalitiesPath = '/explore/foods/nationalities';
const exploreRecipesPath = '/explore/:recipes';
const explorePath = '/explore';
const recipesIdPath = '/:recipes/:id';
const recipesPath = '/:recipes';
const loginPath = '/';

function App() {
  return (
    <Switch>
      <Route exact path={ exploreNationalitiesPath } component={ ExploreNationalities } />
      <Route exact path={ exploreIngredientsPath } component={ ExploreIngredients } />
      <Route exact path={ exploreRecipesPath } component={ ExploreRecipes } />
      <Route exact path={ explorePath } component={ Explore } />
      <Route exact path={ recipesIdPath } component={ RecipesDetails } />
      <Route exact path={ recipesPath } component={ Recipes } />
      <Route exact path={ loginPath } component={ Login } />
    </Switch>
  );
}

export default App;
