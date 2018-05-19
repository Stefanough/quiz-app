const db = require("./../database");

const createGame = (req, res, next) => {
  // TODO: save created game as the value of the res.locals.game key
  // req.body will have the key quizID which should be saved to the game model
  const query = `INSERT INTO game(quizId) VALUES($1) RETURNING *`;
  const values = [0]; // hard-coded quizID

  // callback
  db.query(query, values, (dbErr, dbRes) => {
    if (dbErr) {
      // handle error
      res.status(500);
      res.send("Internal error (saving to database)");
    } else {
      const game = dbRes.rows[0];
      res.locals.game = game;
      res.locals.gameID = game.gameid;
      next();
    }
  });
};

const getGame = (req, res, next) => {
  const query = `SELECT * FROM game WHERE gameId = ${req.params.gameID}`;
  db.query(query, (dbErr, dbRes) => {
    if (dbErr) {
      // handle error
      res.status(500);
      res.send("Internal error (saving to database)");
    } else {
      const game = dbRes.rows[0];
      res.locals.game = game;
      next();
    }
  });
};

const joinGame = (req, res, next) => {
  const query = `INSERT INTO playerGame(playerIdJoin, gameIdJoin) VALUES($1, $2) RETURNING *`;
  const gameID = res.locals.gameID;
  const values = [req.cookies.playerID, gameID];

  // callback
  db.query(query, values, (dbErr, dbRes) => {
    if (dbErr) {
      // handle error
      res.status(500);
      res.send("Internal error (saving to database)");
    } else {
      const playerGame = dbRes.rows[0];
      res.locals.playerGame = playerGame;
      next();
    }
  });
};

module.exports = { createGame, joinGame, getGame };
