import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUserData} from '../actions/users.js'


class EditUserForm extends Component{
  render(){
    return (
      <div className="editForm">
        Edit User Form
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return ({user: state.user})
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm)
