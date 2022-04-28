import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function CategoryButtons({ selectedItem }) {
  const meals = useSelector((state) => state.categoryButtonsReducer.meals);
  const drinks = useSelector((state) => state.categoryButtonsReducer.drinks);

  const categoryFilter = (category) => {
    console.log(category);
  };

  const renderButtons = (categories) => (
    <div>
      <Button
        data-testid="All-category-filter"
        onClick={ () => categoryFilter('all') }
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={ category }
          data-testid={ `${category}-category-filter` }
          onClick={ () => categoryFilter(category) }
        >
          {category}
        </Button>
      ))}
    </div>
  );

  const currentPage = selectedItem === 'foods' ? meals : drinks;

  return renderButtons(currentPage);
}

export default CategoryButtons;
