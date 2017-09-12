import React, {Component} from 'react';
import UserProfile from '../containers/UserProfile';
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
        <Grid >
          <Grid.Row >
            <Grid.Column width="2" className='noPadding'>
            </Grid.Column>
            <Grid.Column width="12" color="black">
              <NavBar />
            </Grid.Column>
            <Grid.Column width="2" className='noPadding'>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row  >
            <Grid.Column width='2' floated='left'  className='noPadding' className="profileOuterColumns" >
            </Grid.Column>

            <Grid.Column width='12' color="white" className="profileColumns">
              <center>
                <div className='profileContainer'>
                  <UserProfile />
                </div>
              </center>
            </Grid.Column>

            <Grid.Column width='2' floated='right' className='noPadding' className="profileOuterColumns" >
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
