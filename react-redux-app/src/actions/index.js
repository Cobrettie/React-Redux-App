import axios from 'axios';

const API = 'http://numbersapi.com/number/random'

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START })
  axios
    .get('http://numbersapi.com/number/random')
    .then(response => {
      console.log('getData action creator axios get req', response)
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data })
    })
    .catch(err => dispatch({ type:FETCH_DATA_FAIL, payload: err }))
}