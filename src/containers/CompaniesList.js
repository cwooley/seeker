import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeNewCompany } from '../actions/companies.js'
import Company from './Company';
import { Item } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'


class CompanyList extends Component {

  state = {
    term: ''
  }

  searchChanged = (event) => {
    this.setState({ term: event.target.value })
  }

  newCompanyClicked = () => {
    this.props.makeNewCompany(this.state.term)
    //this.setState({ term: '' })
  }

  makeCompanies(){
    if (this.props.companies){
      let filteredCompanies = this.props.companies.filter(company => company.name.includes(this.state.term))
      return filteredCompanies.map((company, index) => <Company company={company} key={index} />)
    }
  }

  render(){
    return(
      <div>
        <Input placeholder='Search...' value={this.state.term} action={{ onClick: this.newCompanyClicked, color: 'purple', labelPosition: 'left', icon: 'sticky note outline', content: 'New' }} onChange={this.searchChanged} fluid />
        <Item.Group divided >
          {this.makeCompanies()}
        </Item.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({companies: state.user.companies})
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ makeNewCompany }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)
