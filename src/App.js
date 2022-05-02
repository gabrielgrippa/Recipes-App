import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import FoodsDetails from './pages/FoodsDetails';
import DrinksDetails from './pages/DrinksDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/foods/:id" component={ FoodsDetails } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks/:id" component={ DrinksDetails } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
