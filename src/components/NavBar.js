import React, { Component} from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name }) 

  logoutClicked = () => {
    localStorage.clear();
    window.location = 'https://seek-r.herokuapp.com/'
  }


  render() {
    const { activeItem } = this.state

    return (

        <Segment inverted   className="navBar">
          <Menu inverted secondary  className="navBar">
            <Link to={`/main`} ><Menu.Item name='main' active={activeItem === 'main'} onClick={this.handleItemClick} /></Link>
            <Link to={`/profile`} >  <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} /></Link>
            <Link to={`/`} ><Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.logoutClicked} /></Link>
          </Menu>
        </Segment>

    )
  }
}
