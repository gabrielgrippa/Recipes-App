import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import RecipeCard from './RecipeCard';

function ShowCase() {
  const currentRecipes = useSelector((state) => state.showcaseReducer.results);

  console.log(currentRecipes);

  const renderCards = () => {
    const pathname = window.location.pathname.split('/')[1];
    const lastWordIndex = -1;
    const keyData = (pathname.charAt(0).toUpperCase()
    + pathname.slice(1).slice(0, lastWordIndex));

    const keyImg = `str${keyData}Thumb`;
    const keyName = `str${keyData}`;
    const keyId = `id${keyData}`;

    return (
      <Container>
        {currentRecipes.map((recipe) => (
          <RecipeCard
            key={ recipe[keyId] }
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

// Fontes usadas para remover primeira a ultima palavra da string:
// https://flexiple.com/javascript-capitalize-first-letter/#:~:text=To%20capitalize%20the%20first%20character,()%20function%20to%20capitalize%20it.
// https://bobbyhadz.com/blog/javascript-remove-last-word-from-string#:~:text=To%20remove%20the%20last%20word,with%20the%20last%20word%20removed.
