import { NAME_SEARCH } from '../redux/actions';
import { searchAction } from '../redux/actions/showcaseActions';
import fetchCategories from '../redux/actions/categoriesActions';

const loadRecipes = (CURRENT_API, dispatch) => {
  // useEffect(() => {
  const searchType = NAME_SEARCH;
  dispatch(searchAction({
    api: CURRENT_API,
    searchType,
  }));
  dispatch(fetchCategories());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
};

export default loadRecipes;
