import { FETCH_LOAD } from '../actions/index';

export default function(state = { history: [] }, action) {
  switch (action.type) {
    case FETCH_LOAD:
      return { ...state, history: [ ...state.history, action.payload.data.avgLoad]};
  }
  return state;
}
