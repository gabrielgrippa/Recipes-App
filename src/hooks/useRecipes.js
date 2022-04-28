import { useEffect } from 'react';
import { NAME_SEARCH } from '../redux/actions';
import { searchAction } from '../redux/actions/showcaseActions';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useRecipes;
