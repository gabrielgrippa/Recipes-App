import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

import Foods from './pages/Foods';
import Drinks from './pages/Drinks';

function App() {
  return (
    <Switch>
      <Route exact path="/meals/:id" component={ Foods } />
      <Route exact path="/meals" component={ Foods } />
      <Route exact path="/drinks/:id" component={ Drinks } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
