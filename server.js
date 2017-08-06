// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
var friendArray = [{name: "Mike", photo: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwicjJXHmcPVAhVChlQKHZIuARYQjRwIBw&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMichael_Jordan&psig=AFQjCNHZuFmWTGXlVXtqW_dCwhN-iFQ40w&ust=1502129218641098", scores: [5, 2, 1, 4, 3, 1, 5, 4, 2, 2]},
{name: "Crystal", photo: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiVytC7mcPVAhXlzVQKHUKzCC8QjRwIBw&url=http%3A%2F%2Fcatsplat.deviantart.com%2Fart%2FCrystal-Headshot-672214104&psig=AFQjCNHIM264LPcmG7eNL03B8WTnuN653g&ust=1502129190888781", scores: [4, 2, 3, 5, 1, 4, 5, 2, 5, 2]},
{name: "Mitch", photo: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiN2qWumcPVAhVqj1QKHRWHDHgQjRwIBw&url=http%3A%2F%2Fwww.gossiprocks.com%2Fforum%2Fmiscellaneous%2F141752-david-hasselhoff-dons-his-red-baywatch-trunks-again.html&psig=AFQjCNHmRMtRwY230ygIcAqb1aOKDC9YOA&ust=1502129166427872", scores: [2, 5, 1, 1, 5, 1, 5, 1, 5, 5]},
{name: "Olga", photo: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwii9_OdmcPVAhXKr1QKHRs8ATMQjRwIBw&url=http%3A%2F%2Fwww.themakeupgallery.info%2Fcharacter%2Fplain%2Ffugly%2Fdodge.htm&psig=AFQjCNF8LEEzVijpTxS1R8-XxE6H5ouveA&ust=1502129133417638", scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]},
{name: "Hector", photo: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjfiaHUmcPVAhXKiFQKHclCC5AQjRwIBw&url=http%3A%2F%2Fmoviecharactersinsouthpark.blogspot.com%2F&psig=AFQjCNHsNVcEGo3rsl7lBaW-AhxN_sUBQg&ust=1502129247039084", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]}];
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});
app.get("/survey", function(req, res) {

  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
  res.json(friendArray);
});

app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newFriend = req.body;
  console.log(newFriend);
  friendArray.push(newFriend);
  // We then display the JSON to the users
  res.json(newFriend);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
