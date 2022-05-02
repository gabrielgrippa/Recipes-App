import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeCard from './RecipeCard';

function ShowCase() {
  const currentRecipes = useSelector((state) => state.showcaseReducer.results);
  const searchBar = useSelector((state) => state.showcaseReducer.searchBar);
  const pathname = window.location.pathname.split('/')[1];
  const keyData = pathname === 'foods' ? 'Meal' : 'Drink';
  const keyImg = `str${keyData}Thumb`;
  const keyName = `str${keyData}`;
  const keyId = `id${keyData}`;

  if (currentRecipes.length === 1 && searchBar) {
    return <Redirect to={ `/${pathname}/${currentRecipes[0][keyId]}` } />;
  }
  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {currentRecipes.map((recipe, index) => (
        <RecipeCard
          key={ recipe[keyId] }
          recipeId={ recipe[keyId] }
          index={ index }
          keyImg={ recipe[keyImg] }
          keyName={ recipe[keyName] }
          pathname={ pathname }
        />
      ))}
    </Container>
  );
}

export default ShowCase;
