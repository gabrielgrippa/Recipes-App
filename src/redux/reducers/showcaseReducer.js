// Temporário
import mealsData from '../../helpers/mockMeals';

const initialState = [...mealsData];

const showcaseReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_SHOWCASE_ITEMS':
    return action.payload;
  case 'RESET_SHOWCASE':
    return initialState;
  default:
    return state;
  }
};

export default showcaseReducer;
