import { combineReducers } from 'redux';
import loadReducer from './reducer_load';
import historyReducer from './reducer_history';

const rootReducer = combineReducers({
  load: loadReducer,
  history: historyReducer
});

export default rootReducer;
