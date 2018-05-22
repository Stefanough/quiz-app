import React, { Component } from 'react';

import { subscribeToConnect } from './../src/api';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernames: [],
    }
    subscribeToConnect((usernames) => {
      console.log('subscribeToConnect: ', usernames);
      this.setState({usernames})
    });
  }

  render() {
    console.log('this.state: ', this.state);
    return (
      <div>{this.state.usernames}</div>
    )
  }
}

export default UserList;