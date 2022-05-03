import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/:api/:recipeId" component={ RecipeDetails } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
