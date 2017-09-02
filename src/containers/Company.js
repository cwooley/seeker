import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveCompany } from '../actions/companies.js'
import { Image, Item, Label } from 'semantic-ui-react';

class Company extends Component {

  getLogoUrl(){
    let url = `http://logo.clearbit.com/${this.props.company.name}.com`
    //TODO make fetch request top clearbit for logo, and if it 404's then feed in a link to a default image
    
    return url
  }

  setActiveCompany = () => {
    console.log("Logo Clicked.")
    this.props.setActiveCompany(this.props.company)
    console.log(this.props.state)
  }


  render(){
    return(
      <Item>
      <Item.Image src={this.getLogoUrl()} onClick={this.setActiveCompany}/>
      <Item.Content>
        <Item.Header >{this.props.company.name}</Item.Header>
        <Item.Meta>
          <span >Last contact two weeks ago.</span>
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
