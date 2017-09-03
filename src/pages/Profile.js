import React, {Component} from 'react';
import UserProfile from '../containers/UserProfile';
import {Grid} from 'semantic-ui-react';
import NavBar from '../components/NavBar';

export default class Login extends Component {

  render(){
    return (
      <div>
        <Grid >
          <Grid.Row>
            <Grid.Column width="2" color="blue">
            </Grid.Column>
            <Grid.Column width="12" color="black">
              <NavBar />
            </Grid.Column>
            <Grid.Column width="2" color="blue">
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='2' floated='left' color='blue' className="profileColumns" >
            </Grid.Column>

            <Grid.Column width='4' className="profileColumns" >
              <UserProfile />
            </Grid.Column>

            <Grid.Column width='2' floated='right' color='blue' className="profileColumns" >
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}