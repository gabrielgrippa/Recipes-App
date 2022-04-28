import React from 'react';
import { useSelector } from 'react-redux';

function ShowCase() {
  const currentRecipes = useSelector((state) => state.showcaseReducer.results);

  console.log(currentRecipes);

  return (
    <div>
      showcase
    </div>
  );
}

export default ShowCase;
