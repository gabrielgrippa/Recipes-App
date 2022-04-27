import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import fetchCategories from './redux/actions/getCategories';

import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Login from './pages/Login';

function App({ getCategories }) {
  // Temporario até a existencia do login, ação deve acontecer no login.
  useEffect(() => {
    getCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

App.propTypes = {
  getCategories: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(fetchCategories()),
});

export default connect(null, mapDispatchToProps)(App);
