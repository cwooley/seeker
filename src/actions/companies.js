import axios from 'axios'

export function setActiveCompany (company) {
  return {
    type: "SET_ACTIVE_COMPANY",
    payload: company
  }
}

export function makeNewCompany (companyName) {
  var FormData = require('form-data');
  var form = new FormData();
  form.append('company[name]', companyName)
  form.append('user_id', localStorage.jwt)
  let request = axios({
    method: 'post',
    url: 'http://localhost:3000/api/v1/companies',
    data:form
  })
  return {
    type: "MAKE_NEW_COMPANY",
    payload: request
  }
}
