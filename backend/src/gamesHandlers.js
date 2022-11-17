const database = require("../database");

const getGames = (req, res) => {
  database
    .query("select * from games")
    .then(([games]) => {
      res.json(games);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getGameById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("select * from games where id = ?", [id])
    .then(([games]) => {
      if (games[0] != null) {
        res.json(games[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postGame = (req, res) => {
  const {
    name,
    released,
    metacritic,
    description,
    author,
    opinion,
    developer,
    code,
    picture,
  } = req.body;

  database
    .query(
      "INSERT INTO games(name, released, metacritic, description, author, opinion, developer, code, picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        released,
        metacritic,
        description,
        author,
        opinion,
        developer,
        code,
        picture,
      ]
    )
    .then(([result]) => {
      res.location(`/api/games/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the games");
    });
};

const updateGame = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const {
    name,
    released,
    metacritic,
    description,
    author,
    opinion,
    developer,
    code,
    picture,
  } = req.body;

  database
    .query(
      "update games set name = ?, released = ?, metacritic = ?, description = ?, author = ?, opinion = ?, developer = ?, code = ?, picture = ? where id = ?",
      [
        name,
        released,
        metacritic,
        description,
        author,
        opinion,
        developer,
        code,
        picture,
        id,
      ]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the game");
    });
};

const deleteGame = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM games WHERE id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows) res.sendStatus(204);
      else res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getGames,
  getGameById,
  postGame,
  updateGame,
  deleteGame,
};
