import React, {Component} from 'react'
import { Grid, Input, Menu, Segment, Button, Dropdown, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJWT, fetchUserData, createNewUser } from '../actions/users.js'


class Login extends Component {
  state = {
    activeItem: 'Login',
    username: '',
    password: '',
    email: '',
    profileImage: '',
    errors: false
  }

  componentDidMount(){
    //Check for JWT and redirect if so.
  }

  loginBtnClicked = () => {
    this.props.fetchJWT(this.state)
  }

  signUpBtnClicked = () => {
    if (!this.usernameError() && !this.passwordError() && !this.emailError()){
      this.props.createNewUser(this.state)
    } else {
      this.setState({errors: true})
    }
  }

  displayError(){
    let errList = []
    if (this.usernameError()){
      errList.push("Username must be 4 or more characters")
    }
    if (this.passwordError()){
      errList.push("Password must be 4 or more characters")
    }
    if (this.emailError()){
      errList.push("must be valid email")
    }
    if (this.state.errors && errList.length > 0 ) return  <Message error header='There was some errors with your submission' list={errList} />

  }
  usernameChanged = (event) => {
    this.setState({ username: event.target.value })
  }

  usernameError = () => {
    return this.state.username.length > 3 ? false : true
  }

  passwordChanged = (event) => {
    this.setState({ password: event.target.value })
  }

  passwordError = () => {
    return this.state.password.length > 3 ? false : true
  }

  emailChanged = (event) => {
    this.setState({ email: event.target.value })
  }

  emailError = () => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(this.state.email);
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
          <Input onChange={this.usernameChanged} fluid label='Username' error={this.usernameError()} value={this.state.username} placeholder='username' />
          <br />
          <Input onChange={this.passwordChanged} fluid label='Password' error={this.passwordError()} type='password' value={this.state.password} placeholder='password' />
          <br />
          <Input onChange={this.emailChanged} fluid label='Email' error={this.emailError()} value={this.state.email} placeholder='email' />
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
          {this.displayError()}
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
