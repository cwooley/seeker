import React, {Component} from 'react';
import { Button, Image, List, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {deleteContact} from '../actions/companies.js'

class Contact extends Component {

  trashClicked = () => {
    this.props.deleteContact(this.props.contact.id)
  }


  render(){
    const baseURL = 'https://www.gravatar.com/avatar/'
    const crypto = require('crypto');
    const md5 = crypto.createHash('md5').update(this.props.contact.email).digest("hex");
    const gravatarURL = baseURL + md5
    return (
      <List.Item>
        <List.Content floated='right'>
          <Icon name='trash' onClick={this.trashClicked} />
        </List.Content>
          <Image avatar src={gravatarURL} />
        <List.Content>
          <List.Header>{this.props.contact.name}</List.Header>
          <List.Description>Email: <a href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${this.props.contact.email}&tf=1`} target="_blank" >{this.props.contact.email}</a></List.Description>
          <List.Description>Phone: {this.props.contact.phone_number}</List.Description>
        </List.Content>
      </List.Item>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteContact }, dispatch)
}

export default connect(null, mapDispatchToProps)(Contact);
