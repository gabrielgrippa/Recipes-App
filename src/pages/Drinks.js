import React from 'react';
import PropTypes from 'prop-types';

import CategoriesButtons from '../components/CategoriesButtons';
import Header from '../components/Header';
import ShowCase from '../components/ShowCase';

function Drinks({ location: { pathname } }) {
  return (
    <div>
      <Header />
      <CategoriesButtons selectedItem={ pathname } />
      <ShowCase />
    </div>
  );
}

Drinks.propTypes = {
  pathname: PropTypes.string,
}.isRequired;

export default Drinks;
