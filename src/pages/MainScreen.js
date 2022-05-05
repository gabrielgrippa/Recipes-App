import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import CategoriesButtons from '../components/CategoriesButtons';
import Header from '../components/Header';
import ShowCase from '../components/ShowCase';
import SearchBar from '../components/SearchBar';
import loadRecipes from '../services/loadRecipes';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

function MainScreen() {
  const { recipeType } = useParams();
  const loading = useSelector((state) => state.showcaseReducer.loading);
  const exploreIngredients = useSelector(
    (state) => state.showcaseReducer.exploreIngredients,
  );
  console.log(useHistory());
  const dispatch = useDispatch();
  const currentTitle = recipeType[0].toUpperCase() + recipeType.slice(1);

  if (!exploreIngredients) loadRecipes(recipeType, dispatch);
  return (
    <div>
      <Header title={ currentTitle } />
      <SearchBar />
      {loading
        ? <Loading fullPage />
        : (
          <>
            <CategoriesButtons selectedItem={ recipeType } />
            <ShowCase />
            <Footer />
          </>
        )}

    </div>
  );
}

export default MainScreen;
