const db = require("./../database");

const createPlayer = (req, res, next) => {
  // TODO: save created game as the value of the res.locals.game key
  // req.body will have the key quizID which should be saved to the game model
  const query = `INSERT INTO player(displayName) VALUES($1) RETURNING *`;

  // TODO: change with correct value
  const values = [req.body.displayName];

  // console.log

  // callback
  db.query(query, values, (dbErr, dbRes) => {
    if (dbErr) {
      // handle error
      res.status(500);
      res.send("Internal error (saving to database)");
    } else {
      const player = dbRes.rows[0];
      res.locals.player = player;
      next();
    }
  });
};

const getPlayer = (req, res, next) => {
  const query = `SELECT * FROM player WHERE playerId = ${req.params.playerID}`;
  db.query(query, (dbErr, dbRes) => {
    if (dbErr) {
      // handle error
      res.status(500);
      res.send("Internal error (saving to database)");
    } else {
      const player = dbRes.rows[0];
      res.locals.player = player;
      next();
    }
  });
};

module.exports = {
  createPlayer,
  getPlayer
};
