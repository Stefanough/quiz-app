import React from 'react';

import UserList from './UserList.js';

const Lobby = (props) => {
  // Get other users from socket connection
  return (
    <div id="lobby">
    <div id="game-description">
      What is your Myers-Briggs taco type?
      <button id="start-quiz" type="button" name="start-quiz" onClick={() => {props.showQuiz(); }}>Start Quiz</button>
      </div>
      <UserList />
    </div>
  );
};

export default Lobby;
