import React, { Component } from 'react';

import { subscribeToConnect } from './../src/api';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernames: [],
    }

    subscribeToConnect((usernames) => {
      this.setState({usernames})
    });

  }

  render() {
    const userArr = [];
    this.state.usernames.forEach((user, index) => {
      userArr.push(<li key={index} className="userName">{user}</li>);
    });
    const number = this.state.usernames.filter(username => username !== null).length;

    return (
      <div>
        <div id="total">{number === 1 ? `${number} user on` : `${number} users on`}</div>
        <ul id="user-list">{userArr}</ul>
      </div>
    )
  }
}

export default UserList;