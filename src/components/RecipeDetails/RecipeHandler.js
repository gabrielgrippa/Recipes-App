import React from 'react';
import { Button } from 'react-bootstrap';

function RecipeHandler() {
  return (
    <Button
      className="w-100 fixed-bottom p-2"
      data-testid="start-recipe-btn"
    >
      Start recipe
    </Button>
  );
}

export default RecipeHandler;
