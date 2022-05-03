import React from 'react';
import Header from '../components/Header';
import ThreeButtons from '../components/ThreeButtons';

function Favorites() {
  return (
    <>
      <Header title="Favorite Recipes" enableSearch={ false } />
      <ThreeButtons />
    </>
  );
}

export default Favorites;
