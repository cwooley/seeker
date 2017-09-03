import React, {Component} from 'react'
import { Grid, Input, Menu, Segment, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJWT, fetchUserData, createNewUser } from '../actions/users.js'


class Login extends Component {
  state = {
    activeItem: 'Login',
    username: '',
    password: '',
    email: '',
    profileImage: ''
  }

  componentDidMount(){
    //Check for JWT and redirect if so.
  }

  loginBtnClicked = () => {
    this.props.fetchJWT(this.state)
  }

  signUpBtnClicked = () => {
    this.props.createNewUser(this.state)
  }

  usernameChanged = (event) => {
    this.setState({ username: event.target.value })
  }

  passwordChanged = (event) => {
    this.setState({ password: event.target.value })
  }

  emailChanged = (event) => {
    this.setState({ email: event.target.value })
  }

  profileImageChanged = (event) => {
    this.setState({ profileImage: event.target.value })
  }

  fillInTabs(){
    if (this.state.activeItem === 'Login'){
      return (
        <div>
          <Input onChange={this.usernameChanged} fluid label='Username' value={this.state.username} placeholder='username' />
          <br />
          <Input onChange={this.passwordChanged}  fluid label='Password' type="password" value={this.state.password} placeholder='password' />
          <br />
            <center><Button color='purple' onClick={this.loginBtnClicked.bind(this)} >Login</Button></center>
        </div>
      )
    } else if (this.state.activeItem === 'SignUp'){
      return (
        <div>
          <Input onChange={this.usernameChanged} fluid label='Username' value={this.state.username} placeholder='username' />
          <br />
          <Input onChange={this.passwordChanged} fluid label='Password' type='password' value={this.state.password} placeholder='password' />
          <br />
          <Input onChange={this.emailChanged} fluid label='Email' value={this.state.email} placeholder='email' />
          <br />
          <Input onChange={this.profileImageChanged} fluid label='Profile Image Url' value={this.state.profileImage} placeholder='profileImage' />
          <br />
            <center><Button color='purple' onClick={this.signUpBtnClicked.bind(this)} >Sign Up</Button></center>
        </div>
      )
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return(
      <Grid className="myGrid">
        <Grid.Column width='2' floated='left' color='blue' >

        </Grid.Column>
        <Grid.Column width='4'>
          <Menu attached='top' tabular className="loginForm">
            <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />
            <Menu.Item name='SignUp' active={activeItem === 'SignUp'} onClick={this.handleItemClick} />
          </Menu>
          <Segment attached='bottom'>
            {this.fillInTabs()}
          </Segment>
        </Grid.Column>
        <Grid.Column width='2' floated='right' color='blue'>

        </Grid.Column>
      </Grid>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchJWT, fetchUserData, createNewUser }, dispatch)
}

function mapStateToProps(state){
  return state
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
