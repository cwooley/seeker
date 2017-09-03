import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Item, Progress, Statistic, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { fetchJWT, fetchUserData} from '../actions/users.js'

class UserProfile extends Component{

  componentDidMount(){
    this.props.fetchUserData()
  }

  getNumCompanies(){
    if(this.props.user.companies){
      return this.props.user.companies.length
    }
  }

  getNumApplications(){
    if(this.props.user.companies){
      let counter = 0
      this.props.user.companies.forEach(company => {
        company.interactions.forEach(interaction => {
          if (interaction.kind === "Application") counter++
        })
      })
      return counter
    }
  }

  getNumInterviews(){
    if(this.props.user.companies){
      let counter = 0
      this.props.user.companies.forEach(company => {
        company.interactions.forEach(interaction => {
          if (interaction.kind === "Interview") counter++
        })
      })
      return counter
    }
  }

  getDailyProgressPercent(){
    let counter = 0;
    // Groan.
    let todaysDate = new Date()
    if (this.props.user.companies){
      this.props.user.companies.forEach(company =>{
        company.interactions.forEach(interaction => {
          // please dont judge me for this...
          let arr = interaction.created_at.split('T')[0].split('-')
          let matchString = [arr[1],arr[2],arr[0]].map(str => str.replace(/^0+/, "")).join('/')
          if (matchString === todaysDate.toLocaleDateString() && interaction.kind === "Application"){
            counter++;
          }
          console.log(matchString, todaysDate.toLocaleDateString())
        })
      })
      // Eventually switch in DailyAppGoal for 5 here
      return counter/5 * 100
    }

  }

  editBtnClicked = () =>{
    window.location = 'http://localhost:3001/edit'
  }
  render(){
    console.log(this.props.user)
    return (
      <div className="userProfile">
        <Item.Group>
          <Item>
            <Item.Image size='small' src={this.props.user.profile_image_url} />
            <Item.Content>
              <h1>{this.props.user.username}</h1>
              <Item.Description>
                <p>{this.props.user.email}</p>
              </Item.Description>
            <br />
              <p><Button content='Edit' color="purple" icon='edit' labelPosition='left' onClick={this.editBtnClicked}/></p>
            </Item.Content>
          </Item>
        </Item.Group>
        <h3>Daily Application Goal: 5 </h3>
        <Progress percent={this.getDailyProgressPercent()} color='green' />
        <Statistic.Group>
          <Statistic label='Companies' value={this.getNumCompanies()} />
          <Statistic label='Applications' value={this.getNumApplications()} />
          <Statistic label='Interviews' value={this.getNumInterviews()} />
        </Statistic.Group>

      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return ({user: state.user})
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchJWT, fetchUserData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
