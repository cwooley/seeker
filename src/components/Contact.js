import React, {Component} from 'react';
import { Button, Image, List } from 'semantic-ui-react'

export default class Contact extends Component {
  render(){
    const baseURL = 'https://www.gravatar.com/avatar/'
    const crypto = require('crypto');
    const md5 = crypto.createHash('md5').update(this.props.contact.email).digest("hex");
    const gravatarURL = baseURL + md5
    return (
      <List.Item>
        <List.Content floated='right'>
          <Button>Trash</Button>
        </List.Content>
          <Image avatar src={gravatarURL} />
        <List.Content>
          <List.Header>{this.props.contact.name}</List.Header>
          <List.Description>Email: {this.props.contact.email}</List.Description>
          <List.Description>Phone: {this.props.contact.phone_number}</List.Description>
        </List.Content>
      </List.Item>
    )
  }
}
