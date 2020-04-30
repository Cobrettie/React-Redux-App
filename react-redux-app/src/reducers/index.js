const initialState = {
  testArray: []
}

function reducer(state = initialState, action) {
  console.log('reducer', state)
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        testArray: [...state.testArray, action.payload]
      }

    default:
      return state
  }
}

export default reducer;