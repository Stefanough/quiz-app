import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001');

// function startQuiz(cb) {
//   socket.on('quiz', quiz => cb(null, quiz));
//   socket.emit('startQuiz', 1000);
// }

function subscribeToConnect(cb) {

  socket.on('subscribe', usernames => {
    cb(usernames);
  });

  socket.on('user-left', usernames => {
    cb(usernames);
  })
  
  socket.emit('subscribeToConnect', 'working');
}

export { subscribeToConnect };
