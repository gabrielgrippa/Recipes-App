import React from 'react';
import { useHistory } from 'react-router-dom';
import ExploreButtons from '../../components/ExploreButtons';
import Footer from '../../components/Footer';
import routeHelper from '../../services/routeHelper';
import { getRandomRecipeId } from '../../services/API';

import Header from '../../components/Header';
import { PATH_FOODS } from '../../redux/actions';
import recipeNormalizer from '../../services/recipeNormalizer';

const foodsButtons = ['By Ingredient', 'By Nationality', 'Surprise'];
const drinksButtons = ['By Ingredient', 'Surprise'];

function ExploreRecipes() {
  const pathname = window.location.pathname.split('/')[2];
  const currentURL = pathname === PATH_FOODS;
  const currentTitle = currentURL ? 'Foods' : 'Drinks';
  const renderButtons = currentURL ? foodsButtons : drinksButtons;
  const route = routeHelper(pathname);

  const history = useHistory();

  const handlerSurprise = async () => {
    const recipeReq = await getRandomRecipeId(route.currentApiType);
    const { id } = recipeNormalizer(route.currentApiType, recipeReq);
    history.push(`/${pathname}/${id}`);
  };

  const handlerClick = (path) => {
    const explorePath = path.split(' ')[1] === 'ingredient'
      ? 'ingredients' : 'nationalities';
    if (path === 'surprise') {
      handlerSurprise();
    } else {
      history.push(`/explore/${pathname}/${explorePath}`);
    }
  };

  return (
    <div>
      <Header title={ `Explore ${currentTitle}` } enableSearch={ false } />
      <ExploreButtons exploreButtons={ renderButtons } handlerClick={ handlerClick } />
      <Footer />
    </div>
  );
}

export default ExploreRecipes;
