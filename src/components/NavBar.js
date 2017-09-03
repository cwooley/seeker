import React, { Component} from 'react';
import { Menu, Segment } from 'semantic-ui-react'


export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    window.location = `http://localhost:3001/${name}`
        }


  render() {
    const { activeItem } = this.state

    return (

        <Segment inverted   className="navBar">
          <Menu inverted secondary  className="navBar">
            <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
            <Menu.Item name='main' active={activeItem === 'main'} onClick={this.handleItemClick} />
          </Menu>
        </Segment>

    )
  }
}
