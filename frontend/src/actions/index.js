import axios from 'axios';

const ROOT = 'localhost';
const PORT = 3000;
const URL = 'http://' + ROOT + ':' + PORT + '/load';

export const FETCH_LOAD = 'FETCH_LOAD';

export function fetchLoad() {
  const request = axios.get(URL);

  return {
    type: FETCH_LOAD,
    payload: request
  }
}
