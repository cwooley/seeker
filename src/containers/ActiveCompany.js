import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Feed, Icon, Item, Label, Header, Grid } from 'semantic-ui-react'
import Interaction from '../containers/Interaction'
import ContactsList from '../components/ContactsList'
import ActionPane from './ActionsPane'

class ActiveCompany extends Component {

  activeCompany(){
    if (this.props.activeCompanyId){
      return this.props.companies.find(company => company.id === this.props.activeCompanyId)
    }

  }

  makeInteractionFeed(){
    if (this.props.activeCompanyId){
      return this.activeCompany().interactions.map((interaction, index) => <Interaction interaction={interaction} key={index} /> )
    }
  }

  getLogoUrl(){
    //TODO make fetch request top clearbit for logo, and if it 404's then feed in a link to a default image
    if(this.props.activeCompanyId){
      let url = `http://logo.clearbit.com/${this.activeCompany().name}.com`
      fetch(url)
      .catch(err => {
                      console.log("caught url")
                      url =  'https://image.freepik.com/free-vector/placeholder-logo-template_1061-220.jpg'
                    })
      .then(resp =>  console.log("didn't catch")  )
      return url
    }
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
                <Item.Image src={this.getLogoUrl()} />
                <Header size='huge'>{this.activeCompany().name}</Header>
                <Item.Content>
                  <Item.Description></Item.Description>
                  <Item.Extra>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="8" >
              <Feed className="activeCompanyFeed">
                {this.makeInteractionFeed()}
              </Feed>
            </Grid.Column>
            <Grid.Column width="8" >
              <ContactsList contacts={this.activeCompany().contacts}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="16" >
              <ActionPane />
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
