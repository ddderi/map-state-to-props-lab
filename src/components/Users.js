import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    const userss = this.props.user.map((user, index) => {return <li key={index} >{user.username}</li>})
    console.log(this.props.user)
    return (
      <div>
        <ul>
          Users!
          <ul>
          {userss}
          </ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          <p>Number total of user in the database : {this.props.numberOfUsers}</p>
        </ul>
      </div>
    )
  }
}


// NEED TO RETURN THE PROPS FROM THE STORE AND RETRIEVE IT HERE WITH PROPS
//add mapStateToProps here
const mapSateToProps = (state) => {
  return { user: state.users,
            numberOfUsers: state.users.length
  }
}

// NEED TO CONNECT THE COMPONENT WITH THE STORE

export default connect(mapSateToProps)(Users)
// connect this component to Redux
// export default Users
