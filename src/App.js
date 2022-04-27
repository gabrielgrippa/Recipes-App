import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Login from './pages/Login';

function App() {
  return (

    <Switch>
      <Route exact path="/foods/:id" component={ Foods } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks/:id" component={ Drinks } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/" component={ Login } />
    </Switch>

  );
}

export default App;
