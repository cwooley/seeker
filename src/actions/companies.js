import axios from 'axios'

export function setActiveCompany (company) {
  return {
    type: "SET_ACTIVE_COMPANY",
    payload: company
  }
}

export function deleteCompany (id){
  let request = axios({
    method: 'delete',
    url: `http://localhost:3000/api/v1/companies/${id}`
  })
  return {
    type: "DELETE_COMPANY",
    payload: request
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

export function addContact (contactInfo) {
  var FormData = require('form-data');
  var form = new FormData();
  // NEED TO APPEND DATA TO FORM TO MAKE CONTACT!!!!
  form.append('contact[name]', contactInfo.contactName)
  form.append('contact[email]', contactInfo.contactEmail)
  form.append('contact[phone_number]', contactInfo.contactPhone)
  form.append('contact[company_id]', contactInfo.company_id)
  let request = axios({
    method: 'post',
    url: 'http://localhost:3000/api/v1/contacts',
    data:form
  })
  return {
    type: "ADD_CONTACT",
    payload: request
  }
}

export function deleteContact(id){
  let request = axios({
    method: 'delete',
    url: `http://localhost:3000/api/v1/contacts/${id}`
  })
  return {
    type: "DELETE_CONTACT",
    payload: request
  }
}

export function addInteraction (interactionInfo){
  var FormData = require('form-data');
  var form = new FormData();
  // NEED TO APPEND DATA TO FORM TO MAKE INTERACTION!!!!!
  form.append('interaction[kind]', interactionInfo.interactionType)
  form.append('interaction[status]', interactionInfo.interactionStatus)
  form.append('interaction[company_id]', interactionInfo.company_id)
  let request = axios({
    method: 'post',
    url: 'http://localhost:3000/api/v1/interactions',
    data:form
  })
  return {
    type: "ADD_INTERACTION",
    payload: request
  }
}

export function deleteInteraction(id){
  let request = axios({
    method: 'delete',
    url: `http://localhost:3000/api/v1/interactions/${id}`
  })
  return {
    type: "DELETE_INTERACTION",
    payload: request
  }
}
