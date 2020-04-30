import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const getData = () => {
  const promise = axios.get('http://numbersapi.com/random')

  return dispatch => {
    dispatch({ type: FETCH_DATA_START })
    promise
      .then(response => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data })
    })
    .catch(err => dispatch({ type:FETCH_DATA_FAIL, payload: err }))
  }
}