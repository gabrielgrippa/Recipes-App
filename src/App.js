import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      { /**
         * <Route exact to="/foods/:id" component={ Foods } />
         * <Route exact to="/foods" component={ Foods } />
         * <Route exact to="/drinks/:id" component={ Drinks } />
         * <Route exact to="/drinks" component={ Drinks } />
         */
      }
      <Route exact to="/" component={ Login } />
    </Switch>
  );
}

export default App;
