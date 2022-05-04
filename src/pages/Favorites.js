import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import HorizontalCards from '../components/HorizontalCards';
import ThreeButtons from '../components/ThreeButtons';

function Favorites() {
  const favorites = useSelector((state) => state.profileReducer.favoriteRecipes);
  const [arrayToRender, setArrayToRender] = useState(favorites);

  useEffect(() => {
    console.log(favorites);
    setArrayToRender(favorites);
  }, [favorites]);

  console.log(favorites);

  const handleClick = ({ target }) => {
    if (target.value === 'All') {
      setArrayToRender(favorites);
    } else {
      const filteredArray = favorites.filter((recipe) => (
        recipe.type === target.value
      ));
      setArrayToRender(filteredArray);
    }
  };

  return (
    <>
      <Header title="Favorite Recipes" enableSearch={ false } />
      <ThreeButtons handleClick={ handleClick } />
      <HorizontalCards recipesArray={ arrayToRender } />
    </>
  );
}

export default Favorites;
