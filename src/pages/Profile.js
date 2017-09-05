import React, {Component} from 'react';
import UserProfile from '../containers/UserProfile';
import {Grid} from 'semantic-ui-react';
import NavBar from '../components/NavBar';

export default class Login extends Component {

  componentDidMount(){
    if (!localStorage.jwt){
      window.location = 'http://localhost:3001/'
    }
  }

  render(){
    return (
      <div>
        <Grid >
          <Grid.Row>
            <Grid.Column width="2" color="violet">
            </Grid.Column>
            <Grid.Column width="12" color="black">
              <NavBar />
            </Grid.Column>
            <Grid.Column width="2" color="violet">
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='2' floated='left' color='violet' className="profileColumns" >
            </Grid.Column>

            <Grid.Column width='4' className="profileColumns" >
              <UserProfile />
            </Grid.Column>

            <Grid.Column width='2' floated='right' color='violet' className="profileColumns" >
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
