import React from 'react';
import ExploreButtons from '../components/ExploreButtons';

import Header from '../components/Header';
import { PATH_FOODS } from '../redux/actions';

const foodsButtons = ['By Ingredient', 'By Nationality', 'Surprise me!'];

function ExploreRecipes() {
  const pathname = window.location.pathname.split('/')[2];
  const currentTitle = pathname === PATH_FOODS ? 'Foods' : 'Drinks';
  return (
    <div>
      <Header title={ `Explore ${currentTitle}` } enableSearch={ false } />
      <ExploreButtons exploreButtons={ foodsButtons } />
    </div>
  );
}

export default ExploreRecipes;
