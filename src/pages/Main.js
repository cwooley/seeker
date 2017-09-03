import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJWT, fetchUserData} from '../actions/users.js'
import { Grid } from 'semantic-ui-react'
import CompaniesList from '../containers/CompaniesList'
import ActiveCompany from '../containers/ActiveCompany'
import NavBar from '../components/NavBar'
class Main extends Component {

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

  render() {
    console.log('STATE:', this.props.state)
    return (
      <div >
        <Grid className="myGrid" >
          <Grid.Row>
            <Grid.Column width="2" color="blue">
            </Grid.Column>
            <Grid.Column width="12" color="black">
              <NavBar />
            </Grid.Column>
            <Grid.Column width="2" color="blue">
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column width="2" color="blue">
            </Grid.Column>
            <Grid.Column width="4" >
              <CompaniesList />
            </Grid.Column>
            <Grid.Column width="8" >
              <ActiveCompany />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
