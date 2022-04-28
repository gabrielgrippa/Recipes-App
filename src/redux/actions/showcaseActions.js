import { DRINK_TYPE, TOGGLE_SEARCH_BAR, SET_SHOWCASE_ITEMS } from '.';
import searchApi from '../../services/API';

const searchAction = (options) => async (dispatch, getState) => {
  const { profileReducer: { cocktailsToken, mealsToken } } = getState();

  const request = await searchApi({
    ...options,
    token: options.api === DRINK_TYPE ? cocktailsToken : mealsToken,
  });

  const LIMIT_INDEX = 12;
  dispatch({
    type: SET_SHOWCASE_ITEMS,
    payload: request ? request.slice(0, LIMIT_INDEX) : [] });
};

const toggleSearchBar = { type: TOGGLE_SEARCH_BAR };

export { searchAction, toggleSearchBar };
