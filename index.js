const express = require('express');
const app = express();
const cors = require('cors');

const topGames = require('./routes/twitch-stats-route');
const news = require('./routes/news-route');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/twitch', topGames);
app.use('/news', news);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT);