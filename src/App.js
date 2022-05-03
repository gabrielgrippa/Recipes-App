import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/:api/:recipeId" component={ RecipeDetails } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/favorite-recipes" component={ Favorites } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
    </Switch>
  );
}

export default App;
