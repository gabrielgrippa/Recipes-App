import {
  RESET_SHOWCASE,
  SET_SHOWCASE_ITEMS,
  TOGGLE_SEARCH_BAR,
  RECIPES_LOADING,
} from '../actions';

const initialState = {
  searchBar: false,
  loading: true, // implementar loading visual
  results: [],
};

const showcaseReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_SHOWCASE_ITEMS:
    return { ...state, results: action.payload };
  case RESET_SHOWCASE:
    return initialState;
  case TOGGLE_SEARCH_BAR:
    return { ...state, searchBar: !state.searchBar };
  case RECIPES_LOADING:
    return { ...state, loading: action.state };
  default:
    return state;
  }
};

export default showcaseReducer;
