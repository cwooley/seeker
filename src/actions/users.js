import axios from 'axios'


export function fetchJWT(userData){
  //returns promise which is passed into payload
  var FormData = require('form-data');
  var form = new FormData();
  form.append('username', userData.username)
  form.append('password', userData.password)
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

export function createNewUser(userData){
  var FormData = require('form-data');
  var form = new FormData();
  form.append('user[username]', userData.username)
  form.append('user[password]', userData.password)
  form.append('user[email]', userData.email)
  form.append('user[profile_image_url]', userData.profileImage)
  let request = axios({
    method: 'post',
    url: 'http://localhost:3000/api/v1/users',
    data: form
  })
  return {
    type: 'CREATE_NEW_USER',
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
