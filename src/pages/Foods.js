import React from 'react';
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

export default Foods;
