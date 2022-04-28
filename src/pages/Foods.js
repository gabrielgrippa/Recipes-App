import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CategoriesButtons from '../components/CategoriesButtons';
import Header from '../components/Header';
import ShowCase from '../components/ShowCase';
import SearchBar from '../components/SearchBar';

function Foods() {
  const { location: { pathname } } = useHistory();
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
