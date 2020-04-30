import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions/index';

const initialState = {
  testArray: [],
  isFetching: true,
  error: ''
}

function reducer(state = initialState, action) {
  console.log('reducer', state, action)
  switch(action.type) {
    case FETCH_DATA_START:
      return {
        ...state, 
        isFetching: true,
        error: ''
      }

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        testArray: [...state.testArray, action.payload],
        isFetching: false,
        error: ''
      }

    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default reducer;