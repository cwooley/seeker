import React, { Component } from 'react';
import Contact from './Contact';
import { List } from 'semantic-ui-react';

export default class ContactsList extends Component {
  makeContacts = () => {
    if (this.props.contacts){
      return this.props.contacts.map((contact, index) => <Contact contact={contact} key={index}/>)
    }
  }
  render(){
    console.log('Contact List Props', this.props)
    return (
      <List divided verticalAlign='middle'>
        {this.makeContacts()}
      </List>
    )
  }
}
