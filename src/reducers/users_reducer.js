import {BrowserRouter as Redirect} from 'react-router-dom'


export default function (state = {user: {companies: []}}, action){
  let newState
  switch (action.type) {
    case "INITIAL_API_HIT":
      console.log('hit  block and setting state with this data', action.payload.data)
      if(action.payload.data.jwt){
        localStorage.setItem('jwt', action.payload.data.jwt)
        window.location = 'http://localhost:3001/main'
      }
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

    case "CREATE_NEW_USER":

      console.log("STATE AFTER CREATED USER", newState)
        if(action.payload.data[0].jwt){
          localStorage.setItem('jwt', action.payload.data[0].jwt)
          window.location = 'http://localhost:3001/main'
        }
      console.log("USER AND JWT UPON SIGNUP IS", action.payload.data)
      return action.payload.data[1]
      
    default:
  }
  return state;
}
