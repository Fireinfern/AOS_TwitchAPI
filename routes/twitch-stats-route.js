const { default: axios } = require('axios');

const router = require('express').Router();

const AUTH = process.env.AUTH;
const CLIENTID = process.env.CLIENTID;

const TwitchURL = "https://api.twitch.tv/helix"

router.get('/top-games', async (req, res) => {
    try{
        let response = await axios.get(TwitchURL + '/games/top?first=5',
            {
                headers: {
                    "Authorization": 'Bearer ' + AUTH,
                    "Client-Id": CLIENTID
                }
            });
        if(response.status != 200) throw new Error("Bad Connection");
        res.json(response.data);
    }
    catch(err){
        console.error(err);
    }
});

router.get('/top-streams', async (req, res) => {
    try {
        let response = await axios.get(TwitchURL + '/streams?first=5',
        {
            headers: {
                "Authorization": 'Bearer ' + AUTH,
                "Client-Id": CLIENTID
            }
        });
        if(response.status != 200) throw new Error("Bad Connection");
        res.json(response.data);
    }
    catch(err) {
        console.error(err);
    }
});

module.exports = router;