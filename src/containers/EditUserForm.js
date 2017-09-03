import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUserData, editUser } from '../actions/users.js'
import {Input, Button, Form } from 'semantic-ui-react';''



class EditUserForm extends Component{

  state = {
    username:'',
    password:'',
    email:'',
    profileImage:'',
    id: ''
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

  passwordChanged = (event) => {
    this.setState({ password: event.target.value })
  }

  emailChanged = (event) => {
    this.setState({ email: event.target.value })
  }

  profileImageChanged = (event) => {
    this.setState({ profileImage: event.target.value })
  }

  editBtnClicked = () => {
    this.props.editUser(this.state)
  }

  render(){
    return (
      <div className="editForm">
        <Form>
          <Input onChange={this.usernameChanged} fluid label='Username' value={this.state.username} placeholder='username' />
          <br />
          <Input  onChange={this.passwordChanged} fluid label='Password' type='password' value={this.state.password} placeholder='password' />
          <br />
          <Input onChange={this.emailChanged} fluid label='Email' value={this.state.email} placeholder='email' />
          <br />
          <Input onChange={this.profileImageChanged} fluid label='Profile Image Url' value={this.state.profileImage} placeholder='profileImage' />
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
