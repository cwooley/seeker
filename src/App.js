import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJWT, fetchUserData} from './actions/users.js'

class App extends Component {

  componentDidMount(){
    if (!localStorage.jwt){
      this.props.fetchJWT()
    } else {
      //get user data and put it into redux store... also set up redux you lazy sack of shit!
      console.log('jwt:', localStorage.jwt)
      this.props.fetchUserData()
    }


  }

  getJWT = () => {

  }
  // getJWT = () => {
  //   //Login form will go here, hardcoded for now
  //   var FormData = require('form-data');
  //   var form = new FormData();
  //   form.append('username', 'cwooley')
  //   form.append('password', 'admin')
  //   console.log(localStorage)
  //   fetch('http://localhost:3000/api/v1/login', {method: 'POST', body: form})
  //   .then(resp => resp.json())
  //   .then(data => localStorage.setItem('jwt', data.jwt))
  // }


  render() {
    console.log('STATE:', this.props.state)
    return (
      <div >

          Woo

      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchJWT, fetchUserData }, dispatch)
}

function mapStateToProps(state){
  return {state}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
