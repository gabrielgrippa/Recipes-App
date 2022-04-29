import { FILTER_CATEGORY, GET_DRINKS, GET_MEALS, FILTER_ALL } from '../actions';

const initialState = {
  drinks: [],
  meals: [],
  categoryFilter: FILTER_ALL,
};

const categoriesButtonsReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_DRINKS:
    return {
      ...state,
      drinks: [FILTER_ALL, ...action.drinks],
    };
  case GET_MEALS:
    return {
      ...state,
      meals: [FILTER_ALL, ...action.meals],
    };
  case FILTER_CATEGORY:
    return {
      ...state,
      categoryFilter: action.category,
    };
  default:
    return state;
  }
};

export default categoriesButtonsReducer;
