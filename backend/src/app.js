const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

// call our api
const welcome = (req, res) => {
  res.send("Welcome to our favourite game list !");
};

app.get("/", welcome);

const gamesHandlers = require("./gamesHandlers");

app.get("/api/games", gamesHandlers.getGames);
app.get("/api/games/:id", gamesHandlers.getGameById);

app.post("/api/games", gamesHandlers.postGame);

app.put("/api/games/:id", gamesHandlers.updateGame);

app.delete("/api/games/:id", gamesHandlers.deleteGame);

// ready to export
module.exports = app;
