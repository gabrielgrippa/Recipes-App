import React, { useEffect } from 'react';

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

export default Drinks;
