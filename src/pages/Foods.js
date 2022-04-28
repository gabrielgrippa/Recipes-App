import React from 'react';
import PropTypes from 'prop-types';
import CategoriesButtons from '../components/CategoriesButtons';
import Header from '../components/Header';
import ShowCase from '../components/ShowCase';
import SearchBar from '../components/SearchBar';

function Foods({ location: { pathname } }) {
  return (
    <div>
      <Header title="Foods" />
      <SearchBar />
      <CategoriesButtons selectedItem={ pathname } />
      <ShowCase />
    </div>
  );
}

Foods.propTypes = {
  pathname: PropTypes.string,
}.isRequired;

export default Foods;
