import React from 'react';
import { useHistory } from 'react-router-dom';
import ExploreButtons from '../components/ExploreButtons';
import Footer from '../components/Footer';

import Header from '../components/Header';
import { PATH_FOODS } from '../redux/actions';

const allButtons = ['By Ingredient', 'By Nationality', 'Surprise'];

function ExploreRecipes() {
  const pathname = window.location.pathname.split('/')[2];
  const currentURL = pathname === PATH_FOODS;
  const currentTitle = currentURL ? 'Foods' : 'Drinks';
  const renderButtons = currentURL
    ? allButtons : [...allButtons.splice(0, 1), ...allButtons.splice(1, 2)];

  const history = useHistory();

  const handlerClick = (path) => {
    const explorePath = path === 'ingredient' ? 'ingredients' : 'nationalities';
    if (path === 'surprise') {
      console.log('solicitacao random para api redicionando para tela inicial');
      history.push(`/${pathname}`);
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
