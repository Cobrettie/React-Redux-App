const initialState = {
  testArray: []
}

function reducer(state = initialState, action) {
  console.log('reducer', state)
  return state
}

export default reducer;