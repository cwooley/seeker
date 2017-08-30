import axios from 'axios'


export function fetchJWT(){
  //returns promise which is passed into payload
  var FormData = require('form-data');
  var form = new FormData();
  form.append('username', 'cwooley')
  form.append('password', 'admin')
  let request = axios({
  	method: 'post',
  	url: 'http://localhost:3000/api/v1/login',
  	data: form
  })
  return {
    type: 'INITIAL_API_HIT',
    payload: request
  }
}

export function fetchUserData(){
  let url = 'http://localhost:3000/api/v1/users/1234567'

  let request = axios({
  	method: 'get',
  	url: url,
  	headers: {'id': localStorage.jwt}
  })
  return {
    type: 'GET_USER_DATA',
    payload: request
  }
}
