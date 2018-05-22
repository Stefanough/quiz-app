import React, { Component } from 'react';
const io = require("socket.io");

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>This is a user list.</div>
    )
  }
}

export default UserList;