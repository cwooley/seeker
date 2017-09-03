import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Item, Progress } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { fetchJWT, fetchUserData} from '../actions/users.js'

class UserProfile extends Component{

  componentDidMount(){
    this.props.fetchUserData()
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
  render(){
    console.log(this.props.user)
    return (
      <div>
        <Item.Group>
          <Item>
            <Item.Image size='small' src={this.props.user.profile_image_url} />
            <Item.Content>
              <Item.Header>{this.props.user.username}</Item.Header>
              <Item.Description>
                <p>{this.props.user.email}</p>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        <h3>Daily Application Goal:</h3>
        <Progress percent={this.getDailyProgressPercent()} color='green' />
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
