import { combineReducers } from 'redux';
import showcaseReducer from './showcaseReducer';
import categoryButtonsReducer from './categoryButtonsReducer';

const rootReducer = combineReducers({
  showcaseReducer,
  categoryButtonsReducer,
});

export default rootReducer;
