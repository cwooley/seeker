import React, { Component } from 'react';
import Contact from '../containers/Contact';
import { List } from 'semantic-ui-react';

export default class ContactsList extends Component {
  makeContacts = () => {
    if (this.props.contacts){
      return this.props.contacts.map((contact, index) => <Contact contact={contact} key={index}/>)
    }
  }
  render(){
    return (
      <List className="activeCompanyFeed vertDividerLeft" divided verticalAlign='middle'>
        {this.makeContacts()}
      </List>
    )
  }
}
