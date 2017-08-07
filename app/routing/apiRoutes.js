var express = require('express');
var router = express.Router();

router.get("/api/friends", function(req, res) {
  res.json(friendArray);
});

router.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newFriend = req.body;
  console.log(newFriend);
  friendArray.push(newFriend);
  // We then display the JSON to the users
  res.json(newFriend);
});


module.exports = router;
