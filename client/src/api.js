import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001');

// function startQuiz(cb) {
//   socket.on('quiz', quiz => cb(null, quiz));
//   socket.emit('startQuiz', 1000);
// }

function subscribeToConnect(cb) {
  socket.on('subscribe', usernames => {
    console.log('inside subscribetoConnect api.js');
    cb(usernames);
    // console.log(usernames);
  });
  // setInterval(() => {
    socket.emit('subscribeToConnect', 'working');
  // }, 1000);
}

export { subscribeToConnect };
