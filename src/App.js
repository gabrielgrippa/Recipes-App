import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

import Recipes from './pages/Recipes';
import RecipesDetails from './pages/RecipesDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/:recipes/:id" component={ RecipesDetails } />
      <Route exact path="/:recipes" component={ Recipes } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
