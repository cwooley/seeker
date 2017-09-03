import React, { Component } from 'react';
import { Feed, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteInteraction } from '../actions/companies.js'
import ReactTimeAgo from 'react-time-ago'
import javascriptTimeAgo from 'javascript-time-ago'
javascriptTimeAgo.locale(require('javascript-time-ago/locales/en'))
require('javascript-time-ago/intl-messageformat-global')
require('intl-messageformat/dist/locale-data/en')


class Interaction extends Component {

  makeDate() {
    let date = Date.parse(this.props.interaction.created_at)
    return date
  }

  trashClicked = () => {
    this.props.deleteInteraction(this.props.interaction.id)
  }

  render(){
    return(
      <Feed.Event>
            <Feed.Label>
              <img src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png' alt='' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                {this.props.interaction.kind}
                <Feed.Date><ReactTimeAgo locale="en-GB" >{this.makeDate()}</ReactTimeAgo></Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                {this.props.interaction.status}
              </Feed.Extra>
              <Feed.Like>
                <Icon name='trash' onClick={this.trashClicked}/>
              </Feed.Like>
            </Feed.Content>
          </Feed.Event>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteInteraction }, dispatch)
}

export default connect(null, mapDispatchToProps)(Interaction);
