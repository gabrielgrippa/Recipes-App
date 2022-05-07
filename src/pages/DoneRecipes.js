import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import ThreeButtons from '../components/ThreeButtons';
import HorizontalCards from '../components/HorizontalCards';

function DoneRecipes() {
  const doneRecipes = useSelector((state) => state.profileReducer.doneRecipes);
  const [arrayToRender, setArrayToRender] = useState(doneRecipes);

  useEffect(() => {
    setArrayToRender(doneRecipes);
  }, [doneRecipes]);

  const handleClick = ({ target }) => {
    if (target.value === 'All') {
      setArrayToRender(doneRecipes);
    } else {
      const filteredArray = doneRecipes.filter((recipe) => (
        recipe.type === target.value
      ));
      setArrayToRender(filteredArray);
    }
  };

  return (
    <div>
      <Header title="Done Recipes" enableSearch={ false } />
      <ThreeButtons handleClick={ handleClick } />
      <HorizontalCards recipesArray={ arrayToRender } />
    </div>
  );
}

export default DoneRecipes;
