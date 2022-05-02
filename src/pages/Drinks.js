import React from 'react';

import { useDispatch } from 'react-redux';
import CategoriesButtons from '../components/CategoriesButtons';
import Header from '../components/Header';
import ShowCase from '../components/ShowCase';
import SearchBar from '../components/SearchBar';
import useRecipes from '../hooks/useRecipes';
import Footer from '../components/Footer';

function Drinks() {
  const pathname = window.location.pathname.split('/')[1];
  const dispatch = useDispatch();
  useRecipes(pathname, dispatch);
  return (
    <div>
      <Header title="Drinks" />
      <SearchBar />
      <CategoriesButtons selectedItem={ pathname } />
      <ShowCase />
      <Footer />
    </div>
  );
}

export default Drinks;
