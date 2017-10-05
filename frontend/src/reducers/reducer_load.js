import { FETCH_LOAD } from '../actions/index';

export default function(state = 0, action) {
  switch (action.type) {
    case FETCH_LOAD:
      return action.payload.data.avgLoad;
  }
  return state;
}
