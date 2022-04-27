import React from 'react';
import PropTypes from 'prop-types';
import CategoryButtons from '../components/CategoryButtons';
import Header from '../components/Header';

function Drinks({ location: { pathname } }) {
  return (
    <div>
      <Header />
      <CategoryButtons selectedItem={ pathname } />
    </div>
  );
}

Drinks.propTypes = {
  pathname: PropTypes.string,
}.isRequired;

export default Drinks;
