import { GET_DRINKS, GET_MEALS } from '../actions';

const initialState = {
  drinks: [],
  meals: [],
};

const categoryButtonsReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_DRINKS:
    return {
      ...state,
      drinks: action.drinks,
    };
  case GET_MEALS:
    return {
      ...state,
      meals: action.meals,
    };
  default:
    return state;
  }
};

export default categoryButtonsReducer;
