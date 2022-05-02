import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

import Recipes from './pages/Recipes';
import RecipesDetails from './pages/RecipesDetails';
import Explore from './pages/Explore';
import ExploreRecipes from './pages/ExploreRecipes';

function App() {
  return (
    <Switch>
      <Route exact path="/explore/:recipes" component={ ExploreRecipes } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/:recipes/:id" component={ RecipesDetails } />
      <Route exact path="/:recipes" component={ Recipes } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
