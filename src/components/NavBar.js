import React, { Component} from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { activeItem } = this.state

    return (

        <Segment inverted   className="navBar">
          <Menu inverted secondary  className="navBar">
            <Link to={`/main`} ><Menu.Item name='main' active={activeItem === 'main'} onClick={this.handleItemClick} /></Link>
            <Link to={`/profile`} >  <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} /></Link>
          </Menu>
        </Segment>

    )
  }
}
