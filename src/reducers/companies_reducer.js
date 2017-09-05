export default function (state = {id: 0}, action){
  let newState
  switch (action.type) {
    case "SET_ACTIVE_COMPANY":
      newState = {...state}
      newState.id = action.payload
      return newState
    case "MAKE_NEW_COMPANY":
      newState = {...state }
      newState.id = action.payload.data.id
      return newState
    default:
  }
  return state;
}
