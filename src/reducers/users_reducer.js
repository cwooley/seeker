export default function (state = {user: {companies: []}}, action){
  let newState
  switch (action.type) {
    case "INITIAL_API_HIT":
      console.log('hit  block and setting state with this data', action.payload.data)
      localStorage.setItem('jwt', action.payload.data.jwt)
      return state
    case "GET_USER_DATA":
      console.log('hit GET_USER_DATA block and setting state with this data', action.payload.data)
      return action.payload.data
    case "MAKE_NEW_COMPANY":
      newState = {...state}
      let newCompanies = [...state.companies]
      let newCompany = {...action.payload.data, contacts: [], interactions: [] }
      newCompanies.push(newCompany)
      newState.companies = newCompanies
      return newState
    default:
  }
  return state;
}
