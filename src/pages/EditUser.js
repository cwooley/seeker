import React, {Component} from 'react';
import EditUserForm from '../containers/EditUserForm';
import {Grid} from 'semantic-ui-react';
import NavBar from '../components/NavBar';

export default class Login extends Component {

  componentDidMount(){
    if (!localStorage.jwt){
      window.location = 'https://seek-r.herokuapp.com/'
    }
  }

  render(){
    return (
      <div>
        <Grid className="myGrid">
          <Grid.Row>
            <Grid.Column width="2" color="blue">
            </Grid.Column>
            <Grid.Column width="12" color="black">
              <NavBar />
            </Grid.Column>
            <Grid.Column width="2" color="blue">
            </Grid.Column>
          </Grid.Row>

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
