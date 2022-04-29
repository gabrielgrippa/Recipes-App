import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORY_SEARCH } from '../redux/actions';
import { searchAction } from '../redux/actions/showcaseActions';

function CategoryButtons({ selectedItem }) {
  const meals = useSelector((state) => state.categoriesButtonsReducer.meals);
  const drinks = useSelector((state) => state.categoriesButtonsReducer.drinks);
  const categoryFilter = useSelector(
    (state) => state.categoriesButtonsReducer.categoryFilter,
  );
  const dispatch = useDispatch();
  console.log(categoryFilter);

  // Atenção: Caso a categoria retorne apenas um resultado, NÃO deve ser feito o redirecionamento para a página de detalhes.

  const filteringByCategory = (category) => {
    const pathname = window.location.pathname.split('/')[1];

    dispatch(searchAction({
      api: pathname,
      searchType: CATEGORY_SEARCH,
      query: category,
    }));
  };

  const renderButtons = (categories) => (
    <div>
      <Button
        data-testid="All-category-filter"
        onClick={ () => filteringByCategory('all') }
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={ category }
          data-testid={ `${category}-category-filter` }
          onClick={ () => filteringByCategory(category) }
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
