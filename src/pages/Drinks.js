import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import CategoriesButtons from '../components/CategoriesButtons';
import Header from '../components/Header';
import ShowCase from '../components/ShowCase';
import SearchBar from '../components/SearchBar';

function Drinks() {
  const { location: { pathname } } = useHistory();
  useEffect(() => {

  }, []);
  return (
    <div>
      <Header title="Drinks" />
      <SearchBar />
      <CategoriesButtons selectedItem={ pathname } />
      <ShowCase />
    </div>
  );
}

Drinks.propTypes = {
  pathname: PropTypes.string,
}.isRequired;

export default Drinks;
