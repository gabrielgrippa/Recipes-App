import {
  RESET_SHOWCASE,
  SET_SHOWCASE_ITEMS,
  TOGGLE_SEARCH_BAR,
  RECIPES_LOADING,
  EXPLORE_INGREDIENTS,
} from '../actions';

const initialState = {
  searchBar: false,
  loading: true, // implementar loading visual
  results: [],
  exploreIngredients: false,
};

const showcaseReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_SHOWCASE_ITEMS:
    return { ...state, results: action.payload, loading: false };
  case RESET_SHOWCASE:
    return initialState;
  case TOGGLE_SEARCH_BAR:
    return { ...state, searchBar: !state.searchBar };
  case RECIPES_LOADING:
    return { ...state, loading: action.state };
  case EXPLORE_INGREDIENTS:
    return { ...state, exploreIngredients: action.state };
  default:
    return state;
  }
};

export default showcaseReducer;
