import React from 'react';
import { useSelector } from 'react-redux';

function ShowCase() {
  const currentRecipes = useSelector((state) => state.showcaseReducer);
  const lengthLimit = () => {
    // const QT_MAX = 12;
    console.log(currentRecipes);
  };
  lengthLimit();
  return (
    <div>
      showcase
    </div>
  );
}

export default ShowCase;
