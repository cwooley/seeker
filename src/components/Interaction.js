import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react'

export default class Interaction extends Component {

  render(){
    return(
      <Feed.Event>
            <Feed.Label>
              <img src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                {this.props.interaction.kind}
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                {this.props.interaction.status}
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
    )
  }
}
