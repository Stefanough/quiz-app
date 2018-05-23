import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001');

// function startQuiz(cb) {
//   socket.on('quiz', quiz => cb(null, quiz));
//   socket.emit('startQuiz', 1000);
// }

function subscribeToConnect(cb) {
  socket.on('userBroadcast', usernames => {
      console.log('inside subscribeToConnect api.js');
      cb(usernames);
  })
  socket.emit('subscribeToConnect')
}

export { subscribeToConnect };
