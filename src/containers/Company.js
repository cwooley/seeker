import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveCompany } from '../actions/companies.js'
import { Item, Label } from 'semantic-ui-react';
import ReactTimeAgo from 'react-time-ago'
import javascriptTimeAgo from 'javascript-time-ago'
javascriptTimeAgo.locale(require('javascript-time-ago/locales/en'))
require('javascript-time-ago/intl-messageformat-global')
require('intl-messageformat/dist/locale-data/en')

class Company extends Component {

  getLogoUrl(){
    let url = `http://logo.clearbit.com/${this.props.company.name}.com`
    //TODO make fetch request top clearbit for logo, and if it 404's then feed in a link to a default image
    axios.get(url).catch((err) => {
      console.log("Axios get failed.")
      return 'https://images.freecreatives.com/wp-content/uploads/2015/04/logo033.png'
    }
  )
    return url
  }

  makeLastContact(){
    if (this.props.company.interactions){
      let length = this.props.company.interactions.length
      if (length === 0 ){
        return 'never'
      }
      let lastContactDate = Date.parse(this.props.company.interactions[length-1].created_at)
      return <ReactTimeAgo locale="en-GB" >{lastContactDate}</ReactTimeAgo>
    }
  }


  setActiveCompany = () => {
    console.log("Logo Clicked.")
    this.props.setActiveCompany(this.props.company)
    console.log(this.props.state)
  }


  render(){
    return(
      <Item>
        <Item.Image src={this.getLogoUrl()} alt="company_logo" onClick={this.setActiveCompany}/>
      <Item.Content>
        <Item.Header >{this.props.company.name}</Item.Header>
        <Item.Meta>
          <span >Last contact: {this.makeLastContact()}</span>
        </Item.Meta>
        <Item.Description></Item.Description>
        <Item.Extra>
          <Label icon='edit' content='Edit' />
        </Item.Extra>
      </Item.Content>
    </Item>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setActiveCompany }, dispatch)
}



export default connect(null, mapDispatchToProps)(Company);
