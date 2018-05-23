import React from 'react';

// Imported Components
import UserList from './UserList.js';
import ChatForm from './ChatForm.js';
import ChatWindow from './ChatWindow.js';

const Lobby = (props) => {
  // Get other users from socket connection
  return (
    <div id="lobby">
      <UserList />
      <button type="button" name="start-quiz" onClick={() => { props.showQuiz(); }}>Start Quiz</button>
      <div>
        <ChatForm />
      </div>
    </div>
  );
};

export default Lobby;
