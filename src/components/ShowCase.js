import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import RecipeCard from './RecipeCard';

function ShowCase() {
  const currentRecipes = useSelector((state) => state.showcaseReducer.results);

  const renderCards = () => {
    const pathname = window.location.pathname.split('/')[1];
    const keyData = pathname === 'foods' ? 'Meal' : 'Drink';

    const keyImg = `str${keyData}Thumb`;
    const keyName = `str${keyData}`;
    const keyId = `id${keyData}`;

    return (
      <Container>
        {currentRecipes.map((recipe, index) => (
          <RecipeCard
            key={ recipe[keyId] }
            index={ index }
            keyImg={ recipe[keyImg] }
            keyName={ recipe[keyName] }
          />
        ))}
      </Container>
    );
  };

  return renderCards();
}

export default ShowCase;
