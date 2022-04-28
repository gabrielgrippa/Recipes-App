import { useEffect } from 'react';
import { NAME_SEARCH } from '../redux/actions';
import { searchAction } from '../redux/actions/showcaseActions';
import fetchCategories from '../redux/actions/categoriesActions';

const useRecipes = (pathname, dispatch) => {
  useEffect(() => {
    console.log(pathname);

    const searchType = NAME_SEARCH;
    const query = '';
    dispatch(searchAction({
      api: pathname,
      searchType,
      query,
    }));
    dispatch(fetchCategories());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useRecipes;
