import { RESET_SHOWCASE, SET_SHOWCASE_ITEMS, TOGGLE_SEARCH_BAR } from '../actions';

const initialState = {
  searchBar: false,
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
  default:
    return state;
  }
};

export default showcaseReducer;
