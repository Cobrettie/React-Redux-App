import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions/index';

const initialState = {
  randomFacts: [],
  isFetching: false,
  error: ''
}

function reducer(state = initialState, action) {
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
        randomFacts: [...state.randomFacts, action.payload],
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