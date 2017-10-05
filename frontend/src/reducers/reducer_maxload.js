import { CHANGE_MAX_LOAD } from '../actions/index';

export default function(state = 1, action) {
  switch (action.type) {
    case CHANGE_MAX_LOAD:
      return action.maxLoad;
  }
  return state;
}
