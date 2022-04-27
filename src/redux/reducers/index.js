import { combineReducers } from 'redux';
import showcaseReducer from './showcaseReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  showcaseReducer,
  profileReducer,
});

export default rootReducer;
