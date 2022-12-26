const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(helmet());

const port = +process.env.GLOBI_PORT || 80;

app.get("/player", (_, response) => {
    const players = [];
    const nofPlayers = +process.env.GLOBI_NOF_PLAYERS;
    const playerPrefix = process.env.GLOBI_PLAYER_PREFIX || '';
    const playerPostfix = process.env.GLOBI_PLAYER_POSTFIX || '';
    for (let index = 0; index < nofPlayers; ++index) {
        const player = "" + playerPrefix + Math.round(Math.random() * 100000) + playerPostfix;
        players.push(player);
    }
    response.json(players);
});

app.get("/version", (_, response) => {
    response.json({ version: 4.0 });
});

app.listen(port);