import React, {Component} from 'react';
import UserProfile from '../containers/UserProfile';
import {Grid} from 'semantic-ui-react';''


export default class Login extends Component {

  render(){
    return (
      <div>
        <Grid >
          <Grid.Column width='2' floated='left' color='blue' className="profileColumns" >
          </Grid.Column>

          <Grid.Column width='4' className="profileColumns" >
            <UserProfile />
          </Grid.Column>

          <Grid.Column width='2' floated='right' color='blue' className="profileColumns" >
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
