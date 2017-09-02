export default function (state = {activeCompany: {interactions: [], contacts: []}}, action){
  let newState
  switch (action.type) {
    case "SET_ACTIVE_COMPANY":
      newState = {...state}
      newState.activeCompany = action.payload
      return newState
    case "MAKE_NEW_COMPANY":
      newState = {...state }
      let newActiveCompany = {...action.payload.data, interactions: [], contacts: []}
      newState.activeCompany = newActiveCompany
      return newState
    case "ADD_CONTACT":
      newState = Object.assign({}, state);
      newState.activeCompany = Object.assign({},state.activeCompany)
      newState.activeCompany.contacts = [...newState.activeCompany.contacts, action.payload.data]
      return newState
    case "ADD_INTERACTION":
      newState = Object.assign({}, state);
      newState.activeCompany = Object.assign({},state.activeCompany)
      newState.activeCompany.interactions = [...newState.activeCompany.interactions, action.payload.data]
      return newState
    default:
  }
  return state;
}
