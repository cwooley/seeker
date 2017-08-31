import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Feed, Icon, Item, Label, Header } from 'semantic-ui-react'
import Interaction from '../components/Interaction'

class ActiveCompany extends Component {

  makeInteractionFeed(){
    if (this.props.activeCompany){
      return this.props.activeCompany.interactions.map((interaction, index) => <Interaction interaction={interaction} key={index} /> )
    }
  }

  getLogoUrl(){
    //TODO make fetch request top clearbit for logo, and if it 404's then feed in a link to a default image
    if(this.props.activeCompany){
      let url = `http://logo.clearbit.com/${this.props.activeCompany.name}.com`
      return url
    }
  }

  render(){
    console.log('props', this.props)
    return (
      <div className="ActiveCompany">
        <Item.Group divided >
          <Item>
            <Item.Image src={this.getLogoUrl()} />
            <Header size='huge'>{this.props.activeCompany.name}</Header>
            <Item.Content>
              <Item.Description></Item.Description>
              <Item.Extra>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Feed>
          {this.makeInteractionFeed()}
        </Feed>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  console.log('ACTIVECOMPANY', state.company)
  return ({activeCompany: state.company.activeCompany})
}

export default connect(mapStateToProps)(ActiveCompany)
