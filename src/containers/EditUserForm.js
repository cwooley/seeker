import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUserData, editUser } from '../actions/users.js'
import {Input, Button, Form, Message } from 'semantic-ui-react';''



class EditUserForm extends Component{

  state = {
    username:'',
    password:'',
    email:'',
    profileImage:'',
    id: '',
    dailyGoal: '',
    errors: false
  }



  componentDidMount(){
    if (!this.props.user.username){
      this.props.fetchUserData()
      .then(()=>{
        console.log("setting state")
        this.setState({
        username:this.props.user.username,
        email:this.props.user.email,
        profileImage:this.props.user.profile_image_url,
        id: this.props.user.id
      })})
    } else{
      this.setState({
      username:this.props.user.username,
      email:this.props.user.email,
      profileImage:this.props.user.profile_image_url,
      id: this.props.user.id
    })
    }
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

  editBtnClicked = () => {
    if (!this.usernameError() && !this.passwordError() && !this.emailError()){
      this.props.editUser(this.state)
    } else {
      this.setState({errors: true})
    }
  }

  dailyGoalChanged = (event) => {
    this.setState({dailyGoal: event.target.value})
  }
  
  dailyGoalError = () => {
    return !(parseInt(this.state.dailyGoal, 10) > 0 && parseInt(this.state.dailyGoal, 10) < 21)
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
    if (this.dailyGoalError()){
      errList.push("Daily goal must be a number between 1 and 20")
    }
    if (this.state.errors && errList.length > 0 ) return  <Message error header='There was some errors with your submission' list={errList} />

  }

  render(){
    return (
      <div className="editForm">
        <div className="errorsContainer">{this.displayError()}</div>
        <Form>
          <Input onChange={this.usernameChanged} fluid label='Username' value={this.state.username} placeholder='username' />
          <br />
          <Input  onChange={this.passwordChanged} fluid label='Password' type='password' value={this.state.password} placeholder='password' />
          <br />
          <Input onChange={this.emailChanged} fluid label='Email' value={this.state.email} placeholder='email' />
          <br />
          <Input onChange={this.profileImageChanged} fluid label='Profile Image Url' value={this.state.profileImage} placeholder='profileImage' />
          <br />
          <Input onChange={this.dailyGoalChanged} error={this.dailyGoalError()} fluid label='Profile Image Url' value={this.state.dailyGoal} placeholder='1 - 20' />
          <br />
            <center><Button color='purple' onClick={this.editBtnClicked.bind(this)} >Edit Profile</Button></center>
        </Form>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return ({user: state.user})
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserData, editUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm)
