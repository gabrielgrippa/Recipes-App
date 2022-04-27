import React from 'react';
import PropTypes from 'prop-types';
import CategoryButtons from '../components/CategoryButtons';
import Header from '../components/Header';

function Foods({ location: { pathname } }) {
  return (
    <div>
      <Header />
      <CategoryButtons selectedItem={ pathname } />
    </div>
  );
}

Foods.propTypes = {
  pathname: PropTypes.string,
}.isRequired;

export default Foods;
