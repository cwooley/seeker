import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveCompany, deleteCompany } from '../actions/companies.js'
import { Item, Label } from 'semantic-ui-react';
import ReactTimeAgo from 'react-time-ago'
import javascriptTimeAgo from 'javascript-time-ago'
javascriptTimeAgo.locale(require('javascript-time-ago/locales/en'))
require('javascript-time-ago/intl-messageformat-global')
require('intl-messageformat/dist/locale-data/en')

class Company extends Component {

  getLogoUrl(){
    return `http://logo.clearbit.com/${this.props.company.name}.com`
  }

  makeLastContact(){
    if (this.props.company.interactions){
      let length = this.props.company.interactions.length
      if (length === 0 ){
        return 'never'
      }
      let lastContactDate = Date.parse(this.props.company.interactions[length-1].created_at)
      console.log("last contact date", lastContactDate)
      return <ReactTimeAgo locale="en-GB" >{lastContactDate}</ReactTimeAgo>
    }
  }


  setActiveCompany = () => {
    this.props.setActiveCompany(this.props.company.id)
  }

  trashClicked = () => {
    this.props.deleteCompany(this.props.company.id)
  }

  render(){
    return(
      <Item className='itemActive'>
        <div className="companyImageContainer" onClick={this.setActiveCompany}>
          <Item.Image src={this.getLogoUrl()} alt="" />
        </div>
      <Item.Content className="companyContents">
        <Item.Header >{this.props.company.name}</Item.Header>
        <Item.Meta>
          <span >Last contact: {this.makeLastContact()}</span>
        </Item.Meta>
        <Item.Description></Item.Description>
        <Item.Extra>
          <Label icon='trash'content='delete' onClick={this.trashClicked}/>
        </Item.Extra>
      </Item.Content>
    </Item>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setActiveCompany, deleteCompany }, dispatch)
}



export default connect(null, mapDispatchToProps)(Company);
