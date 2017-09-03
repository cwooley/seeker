import {BrowserRouter as Redirect} from 'react-router-dom'


export default function (state = {user: {companies: []}}, action){
  let newState
  let newCompanies
  let newCompany
  switch (action.type) {
    case "INITIAL_API_HIT":
      console.log('hit  block and setting state with this data', action.payload.data)
      if(action.payload.data[0].jwt){
        localStorage.setItem('jwt', action.payload.data[0].jwt)
        window.location = 'http://localhost:3001/main'
      }
      let userObj = JSON.parse(action.payload.data[1])
      return userObj

    case "GET_USER_DATA":
      console.log('hit GET_USER_DATA block and setting state with this data', action.payload.data)
      return action.payload.data

    case "MAKE_NEW_COMPANY":
      newState = {...state}
      newCompanies = [...state.companies]
      newCompany = {...action.payload.data, contacts: [], interactions: [] }
      newCompanies.push(newCompany)
      newState.companies = newCompanies
      return newState

    case "DELETE_COMPANY":
      newState = {...state}
      newCompanies = state.companies.filter(company => company.id != action.payload.data.id)
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

    case "EDIT_USER":
    window.location = 'http://localhost:3001/profile'
    return action.payload.data

    case "ADD_INTERACTION":
      // newState = {...state}
      // newCompany = newState.companies.find(company => company.id === action.payload.data.company_id)
      // console.log(newCompany)
      // newCompany.interactions.push(action.payload.data)
      return state


    default:
  }
  return state;
}
