import { combineReducers } from 'redux';
import showcaseReducer from './showcaseReducer';
import categoriesButtonsReducer from './categoriesButtonsReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  showcaseReducer,
  categoriesButtonsReducer,
  profileReducer,
});

export default rootReducer;
