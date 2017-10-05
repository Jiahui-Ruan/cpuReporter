import { FETCH_LOAD } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LOAD:
      return [ ...state, action.payload.data.avgLoad];
  }
  return state;
}
