import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORY_SEARCH, NAME_SEARCH, FILTER_ALL, PATH_FOODS } from '../redux/actions';
import { searchAction } from '../redux/actions/showcaseActions';
import { filterCategory } from '../redux/actions/categoriesActions';

function CategoryButtons({ selectedItem }) {
  const meals = useSelector((state) => state.categoriesButtonsReducer.meals);
  const drinks = useSelector((state) => state.categoriesButtonsReducer.drinks);
  const categoryFilter = useSelector(
    (state) => state.categoriesButtonsReducer.categoryFilter,
  );
  const dispatch = useDispatch();

  // Atenção: Caso a categoria retorne apenas um resultado, NÃO deve ser feito o redirecionamento para a página de detalhes

  const alreadyFiltered = (filter) => {
    const query = filter === FILTER_ALL || filter === categoryFilter ? '' : filter;
    const searchType = filter === FILTER_ALL || filter === categoryFilter
      ? NAME_SEARCH : CATEGORY_SEARCH;
    return [query, searchType];
  };

  const filteringByCategory = (category) => {
    const pathname = window.location.pathname.split('/')[1];
    const setCategory = category === categoryFilter ? FILTER_ALL : category;

    dispatch(filterCategory(setCategory));
    const [query, searchType] = alreadyFiltered(category);
    dispatch(searchAction({
      api: pathname,
      searchType,
      query,
    }));
  };

  const renderButtons = (categories) => {
    const dinamicBg = selectedItem === PATH_FOODS
      ? 'bg-warning text-dark' : 'bg-info text-white';
    return (
      <Container className="d-flex flex-wrap mt-2 mb-2">
        {categories.map((category) => (
          <Button
            className={ `${dinamicBg} flex-fill m-1` }
            key={ category }
            data-testid={ `${category}-category-filter` }
            onClick={ () => filteringByCategory(category) }
          >
            {category}
          </Button>
        ))}
      </Container>);
  };

  const currentPage = selectedItem === PATH_FOODS ? meals : drinks;

  return renderButtons(currentPage);
}

export default CategoryButtons;
