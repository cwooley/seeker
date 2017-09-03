import React, {Component} from 'react';
import EditUserForm from '../containers/EditUserForm';
import {Grid} from 'semantic-ui-react';''


export default class Login extends Component {

  render(){
    return (
      <div>
        <Grid className="myGrid">
          <Grid.Column width='2' floated='left' color='blue' >

          </Grid.Column>
          <Grid.Column className="myGrid" width='4'>
            <EditUserForm />
          </Grid.Column>
          <Grid.Column width='2' floated='right' color='blue'>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
