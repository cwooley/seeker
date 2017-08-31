import React, { Component } from 'react';

class UserProfile extends Component{

  render(){
    return (
      <div>
        ActiveCompany
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return ({user: state.user})
}

export default connect(mapStateToProps)(UserProfile)
