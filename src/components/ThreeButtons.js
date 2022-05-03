import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import favoriteRecipes from './favoriteRecipes';
import HorizontalCards from './HorizontalCards';

function ThreeButtons() {
  const [arrayToRender, setArrayToRender] = useState(favoriteRecipes);

  const handleClick = ({ target }) => {
    if (target.value === 'All') {
      setArrayToRender(favoriteRecipes);
    } else {
      const filteredArray = favoriteRecipes.filter((recipe) => (
        recipe.type === target.value
      ));
      setArrayToRender(filteredArray);
    }
  };

  return (
    <Container className="d-flex flex-wrap mt-2 mb-2">
      <Button
        data-testid="filter-by-all-btn"
        className="bg-warning text-dark flex-fill m-1"
        onClick={ handleClick }
        value="All"
      >
        All
      </Button>
      <Button
        className="bg-warning text-dark flex-fill m-1"
        data-testid="filter-by-food-btn"
        onClick={ handleClick }
        value="food"
      >
        Foods
      </Button>
      <Button
        className="bg-warning text-dark flex-fill m-1"
        data-testid="filter-by-drink-btn"
        onClick={ handleClick }
        value="drink"
      >
        Drinks
      </Button>
      <HorizontalCards recipesArray={ arrayToRender } />
    </Container>
  );
}

export default ThreeButtons;
