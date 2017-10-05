import { combineReducers } from 'redux';
import loadReducer from './reducer_load';
import historyReducer from './reducer_history';
import maxloadReducer from './reducer_maxload';

const rootReducer = combineReducers({
  load: loadReducer,
  history: historyReducer,
  maxLoad: maxloadReducer
});

export default rootReducer;
