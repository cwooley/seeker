import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJWT, fetchUserData} from './actions/users.js'
import { Grid } from 'semantic-ui-react'
import CompaniesList from './containers/CompaniesList'
import ActiveCompany from './containers/ActiveCompany'
import NavBar from './components/NavBar'
import ActionPane from './containers/ActionsPane'
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
      <div>
        <Grid >
          <Grid.Row >
            <Grid.Column width="2" color="blue">
            </Grid.Column>
            <Grid.Column width="12" color="black">
              <NavBar />
            </Grid.Column>
            <Grid.Column width="2" color="blue">
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="bigRow">
            <Grid.Column width="2" color="blue">
            </Grid.Column>
            <Grid.Column width="4" >
              <CompaniesList />
            </Grid.Column>
            <Grid.Column width="8" >
              <ActiveCompany />
              <ActionPane />
            </Grid.Column>
            <Grid.Column width="2" color="blue">
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
