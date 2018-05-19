// --------------- 3rd party modules ---------------

const app = require("express")();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const path = require("path");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const fs = require("fs");

// --------------- local imports ---------------

const cookieParser = require("cookie-parser");
const Player = require("./model/player");
const Game = require("./model/game");
const database = require("./database.js");

// local variables ---------------
const port = process.env.PORT || 3001;

// --------------- routers ---------------

app.use(cookieParser());

app.get("/", function(req, res) {
  // res.send("hello world!");
  res.sendFile(path.join(__dirname + "./../client/index.html"));
});

app.get("/build/bundle.js", function(req, res) {
  // res.send("hello world!");
  res.sendFile(path.join(__dirname + "./../build/bundle.js"));
});

app.get("/game/:gameID", Game.getGame, (req, res) => {
  const gameID = req.params.id;
  res.json(res.locals.game);
});

app.post("/game", Game.createGame, (req, res) => {
  res.json(res.locals.game);
});

app.post("/player", jsonParser, Player.createPlayer, (req, res) => {
  if (res.locals.player) {
    // res.cookie("playerID", res.locals.player.player); // TODO
    res.json(res.locals.user);
  } else {
    res.status(404);
    res.send("No database configured for USER!");
  }
});

app.get("/quiz/:id", (req, res) => {
  const quizID = req.params.id;

  if (quizID !== "0") {
    res.status(404);
    res.send(`Quiz ${quizID} not found!`);
    return;
  }

  const sampleQuiz = JSON.parse(
    fs.readFileSync("./server/model/quiz-demo.json", "utf-8")
  );

  res.json(sampleQuiz);
});

// io.on("connection", function(socket) {
//   socket.on("chat message", function(msg) {
//   });
// });

database.connect(err => {
  console.log("connected?");
  console.log(`err: ${err}`);
});

server.listen(port, () => {
  console.log(`listening on PORT:${port}…`);
});
