import { combineReducers } from 'redux';
import loadReducer from './reducer_load';

const rootReducer = combineReducers({
  load: loadReducer
});

export default rootReducer;
