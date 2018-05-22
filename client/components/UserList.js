import React, { Component } from 'react';

import { subscribeToConnect } from './../src/api';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernames: [],
    }

    subscribeToConnect((usernames) => this.setState({usernames}))
  }

  render() {
    return (
      <div>{this.state.usernames}</div>
    )
  }
}

export default UserList;