import { combineReducers } from 'redux';
import showcaseReducer from './showcaseReducer';
import categoryButtonsReducer from './categoryButtonsReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  showcaseReducer,
  categoryButtonsReducer,
  profileReducer,
});

export default rootReducer;
