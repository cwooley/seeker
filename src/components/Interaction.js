import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react'
import ReactTimeAgo from 'react-time-ago'
import javascriptTimeAgo from 'javascript-time-ago'
javascriptTimeAgo.locale(require('javascript-time-ago/locales/en'))
require('javascript-time-ago/intl-messageformat-global')
require('intl-messageformat/dist/locale-data/en')


export default class Interaction extends Component {

  makeDate() {
    let date = Date.parse(this.props.interaction.created_at)
    return date
  }

  render(){
    return(
      <Feed.Event>
            <Feed.Label>
              <img src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                {this.props.interaction.kind}
                <Feed.Date><ReactTimeAgo locale="en-GB" >{this.makeDate()}</ReactTimeAgo></Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                {this.props.interaction.status}
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
    )
  }
}
