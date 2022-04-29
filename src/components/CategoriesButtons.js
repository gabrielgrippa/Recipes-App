import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORY_SEARCH, NAME_SEARCH } from '../redux/actions';
import { searchAction } from '../redux/actions/showcaseActions';
import { filterCategory } from '../redux/actions/categoriesActions';

function CategoryButtons({ selectedItem }) {
  const meals = useSelector((state) => state.categoriesButtonsReducer.meals);
  const drinks = useSelector((state) => state.categoriesButtonsReducer.drinks);
  const categoryFilter = useSelector(
    (state) => state.categoriesButtonsReducer.categoryFilter,
  );
  const dispatch = useDispatch();

  // Atenção: Caso a categoria retorne apenas um resultado, NÃO deve ser feito o redirecionamento para a página de detalhes.

  const alreadyFiltered = (filter) => {
    const query = filter === 'all' || filter === categoryFilter ? '' : filter;
    const searchType = filter === 'all' || filter === categoryFilter
      ? NAME_SEARCH : CATEGORY_SEARCH;
    return [query, searchType];
  };

  const filteringByCategory = (category) => {
    const pathname = window.location.pathname.split('/')[1];
    const setCategory = category === categoryFilter ? 'all' : category;

    dispatch(filterCategory(setCategory));
    const [query, searchType] = alreadyFiltered(category);
    dispatch(searchAction({
      api: pathname,
      searchType,
      query,
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
