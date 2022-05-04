import React from 'react';

import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import CategoriesButtons from '../components/CategoriesButtons';
import Header from '../components/Header';
import ShowCase from '../components/ShowCase';
import SearchBar from '../components/SearchBar';
import useRecipes from '../hooks/useRecipes';
import Footer from '../components/Footer';

function MainScreen() {
  const { recipeType } = useParams();
  console.log(useHistory());
  const dispatch = useDispatch();
  const currentTitle = recipeType[0].toUpperCase() + recipeType.slice(1);
  useRecipes(recipeType, dispatch);
  return (
    <div>
      <Header title={ currentTitle } />
      <SearchBar />
      <CategoriesButtons selectedItem={ recipeType } />
      <ShowCase />
      <Footer />
    </div>
  );
}

export default MainScreen;
