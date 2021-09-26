require('dotenv').config();

const express = require('express');
const app = express();

const topGames = require('./routes/twitch-stats-route');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/twitch', topGames);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT);