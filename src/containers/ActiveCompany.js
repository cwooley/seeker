import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Feed, Icon, Item, Label, Header, Grid } from 'semantic-ui-react'
import Interaction from '../containers/Interaction'
import ContactsList from '../components/ContactsList'
import ActionPane from './ActionsPane'

class ActiveCompany extends Component {

  activeCompany(){
    if (this.props.companies){
      if (this.props.activeCompanyId !== 0){
        return this.props.companies.find(company => company.id === this.props.activeCompanyId)
      } else return this.props.companies[0]
    }
  }

  makeInteractionFeed(){
    console.log('making interactions', this.props.activeCompanyId)
      return this.activeCompany().interactions.map((interaction, index) => <Interaction interaction={interaction} key={index} /> )

  }

  getLogoUrl(){
    //TODO make fetch request top clearbit for logo, and if it 404's then feed in a link to a default image
    console.log(this.activeCompany().name)
    return `http://logo.clearbit.com/${this.activeCompany().name}.com?size=200`
  }

  render(){
    console.log('props', this.props)
    return (
      <div className="activeCompanyContainer">
        { this.activeCompany() &&
        <Grid>
          <Grid.Row>
            <Item.Group divided >
              <Item className="activeCompany">
                <div className="companyImageContainerActive">
                  <Item.Image src={this.getLogoUrl()} />
                </div>
                <div className="activeCompanyContents">
                  <Header size='huge'>{this.activeCompany().name}</Header>
                  <Item.Content>
                    <Item.Description></Item.Description>
                    <Item.Extra>
                    </Item.Extra>
                  </Item.Content>
                </div>
              </Item>
            </Item.Group>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="8" >
              <h3 className="activeCompanyHeader" >Interaction History </h3>
              <Feed className="activeCompanyFeed">
                {this.makeInteractionFeed()}
              </Feed>
            </Grid.Column>
            <Grid.Column width="8" >
              <h3>Contacts </h3>
              <ContactsList contacts={this.activeCompany().contacts}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="16" >
              <ActionPane activeCompany={this.activeCompany()}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      }
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  console.log('ACTIVECOMPANY', state.company)
  console.log('companies', state.user.companies)
  return ({activeCompanyId: state.company.id, companies: state.user.companies})
}

export default connect(mapStateToProps)(ActiveCompany)
