import { CHANGE_MAX_LOAD } from '../actions/index';

export default function(state = { maxLoad: 1 }, action) {
  switch (action.type) {
    case CHANGE_MAX_LOAD:
      return { ...state, maxLoad: action.maxLoad };
  }
  return state;
}
