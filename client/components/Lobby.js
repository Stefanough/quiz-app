import React from 'react';

import UserList from './UserList.js';

const Lobby = (props) => {
  // Get other users from socket connection


  return (
    <div id="lobby">
      <UserList />
      <button type="button" name="start-quiz" onClick={() => {props.showQuiz(); }}>Start Quiz</button>
    </div>
  );
};

export default Lobby;
