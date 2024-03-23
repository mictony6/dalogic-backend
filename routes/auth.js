var express = require('express');
var router = express.Router();
let playerName;

router.post('/' ,(req, res) => {
  console.log("Player name is ", req.body['playerName']);
  playerName = req.body['playerName'];
})
router.get('/player-name', (req, res) => {
  res.send({
    playerName:playerName
  })
})
module.exports = router