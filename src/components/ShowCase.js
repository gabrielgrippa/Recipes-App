import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import DisplayCard from './DisplayCard';

function ShowCase() {
  const currentRecipes = useSelector((state) => state.showcaseReducer.results);
  const searchBar = useSelector((state) => state.showcaseReducer.searchBar);
  const { recipeType } = useParams();

  // Caso retorne uma receita da barra de pesquisa, ja redireciona para os detalhes da receita.
  if (currentRecipes.length === 1 && searchBar) {
    return <Redirect to={ `/${recipeType}/${currentRecipes[0].id}` } />;
  }

  // Retorna um alerta, caso o resultado pela barra de pesquisa for 0
  if (currentRecipes.length === 0 && searchBar) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }

  return (
    <Container className="d-flex flex-wrap justify-content-center pb-5">
      {currentRecipes.map((recipe, index) => (
        <DisplayCard
          key={ recipe.id }
          typeCard="recipe"
          index={ index }
          recipe={ recipe }
          pathname={ recipeType }
        />
      ))}
    </Container>
  );
}

export default ShowCase;
