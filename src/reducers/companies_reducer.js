export default function (state = {activeCompany: {interactions: []}}, action){
  let newState
  switch (action.type) {
    case "SET_ACTIVE_COMPANY":
      newState = {...state}
      newState.activeCompany = action.payload
      return newState
    case "MAKE_NEW_COMPANY":
      console.log("PAYLOAD", action.payload)
      newState = {...state }
      let newActiveCompany = {...action.payload.data, interactions: [], contacts: []}
      newState.activeCompany = newActiveCompany
      return newState
    default:
  }
  return state;
}
