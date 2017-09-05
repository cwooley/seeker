import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContact, addInteraction } from '../actions/companies.js'
import { Input, Menu, Segment, Button, TextArea, Radio } from 'semantic-ui-react'
import '../app.css'

class ActionPane extends Component{
  state = { activeItem: 'Contacts',
            interactionType: '',
            interactionStatus: '',
            contactName: '',
            contactPhone: '',
            contactEmail: '',
            contactPosition: ''
            }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  nameChanged = (event) => {
    this.setState({ contactName: event.target.value })
  }

  phoneChanged = (event) => {
    this.setState({ contactPhone: event.target.value })
  }

  emailChanged = (event) => {
    this.setState({ contactEmail: event.target.value })
  }

  positionChanged = (event) => {
    this.setState({ contactPosition: event.target.value })
  }

  statusTextChanged = (event) => {
    this.setState({ interactionStatus: event.target.value })
  }

  radioChanged = (event, { value }) => {
    console.log(value)
    this.setState({interactionType: value})
  }

  contactBtnClicked = () => {
    let info = {...this.state}
    info.company_id = this.props.activeCompanyId
    this.setState({
              interactionType: '',
              interactionStatus: '',
              contactName: '',
              contactPhone: '',
              contactEmail: '',
              contactPosition: ''
              })
    this.props.addContact(info)
  }

  interactionBtnClicked = () => {
    let info = {...this.state}
    info.company_id = this.props.activeCompanyId
    this.setState({
              interactionType: '',
              interactionStatus: '',
              contactName: '',
              contactPhone: '',
              contactEmail: '',
              contactPosition: ''
              })
    this.props.addInteraction(info)
  }


  fillInTabs = () => {
    if (this.state.activeItem === 'Contacts'){
      return(
        <div>
          <Input onChange={this.nameChanged} fluid label='name' value={this.state.contactName} placeholder='Elon Musk' />
          <br />
          <Input onChange={this.phoneChanged} fluid label='phone' value={this.state.contactPhone} placeholder='908 956 5267' />
          <br />
          <Input onChange={this.emailChanged} fluid label='email' value={this.state.contactEmail} placeholder='elon@tesla.com' />
          <br />
          <Input onChange={this.positionChanged} fluid label='position' value={this.state.contactPosition} placeholder='CEO' />
          <br />
          <center><Button color='purple' onClick={this.contactBtnClicked.bind(this)} >Submit</Button></center>
        </div>
      )
    } else if (this.state.activeItem === 'Interactions') {
      return (
        <div>
          <Radio label='Application' name='radioGroup' value='Application' checked={this.state.interactionType === 'Application'} onChange={this.radioChanged} />
          <Radio label='Follow-up' name='radioGroup' value='Follow-up' checked={this.state.interactionType === 'Follow-up'} onChange={this.radioChanged} />
          <Radio label='Interview' name='radioGroup' value='Interview' checked={this.state.interactionType === 'Interview'} onChange={this.radioChanged} />
          <br />
          <br />
          <TextArea onChange={this.statusTextChanged} className="interactionTextArea" value={this.state.interactionStatus} autoHeight placeholder='Try adding multiple lines' style={{ minHeight: 100 }} />
          <br />
          <center><Button color='violet' onClick={this.interactionBtnClicked} >Submit</Button></center>
        </div>
      )
    }
  }

  render(){
    const { activeItem } = this.state
    return (
      <div className="actionsPane">
        <Menu attached='top' tabular>
          <Menu.Item name='Contacts' active={activeItem === 'Contacts'} onClick={this.handleItemClick} />
          <Menu.Item name='Interactions' active={activeItem === 'Interactions'} onClick={this.handleItemClick} />
        </Menu>
        <Segment attached='bottom'>
          {this.fillInTabs()}
        </Segment>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return ({activeCompanyId: state.company.id})
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addContact, addInteraction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPane)
