import { FETCH_LOAD } from '../actions/index';

export default function(state = { load: 0 }, action) {
  switch (action.type) {
    case FETCH_LOAD:
      return {...state, load: action.payload.data.avgLoad};
  }
  return state;
}
