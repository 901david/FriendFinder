// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var htmlRouter = require('app/routing/htmlRoutes.js');
// var apiRouter = require('app/routing/apiRoutes.js');

// Sets up the Express App
// =============================================================
var app = express();
var router = express.Router();
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
  let yourMatch = [];
  let newFriend = req.body;
  let userScores = newFriend.scores;
  let finalUserCompatScores = [];
    for (let i = 0; i < friendArray.length; i++) {
      let tempCompare = friendArray[i].scores;
      let userCompatScoresArray = [];
      let userFinalCompatScore;
      let finalUserTempScore = 0;
      let startNum = 0;
      let tempQ;
      console.log("User Scores: " + userScores);
      console.log("Compare TO: " + tempCompare);
      function checkAll () {
        if (!(startNum > 9)) {
          console.log("User compat scores array: " + userCompatScoresArray);
          tempQ = Math.abs(userScores[startNum] - tempCompare[startNum]);
          console.log("temp Q: " + tempQ);
          userCompatScoresArray.push(tempQ);
          startNum++;
          checkAll();
        }
        else {
          for (let i = 0; i < userCompatScoresArray.length; i++) {
            finalUserTempScore = finalUserTempScore + parseInt(userCompatScoresArray[i]);
          }
          console.log("Final User Temp Score: " + finalUserTempScore);
          finalUserCompatScores.push(finalUserTempScore);
          console.log("All users in Array: " + finalUserCompatScores);
          function indexOfMin(arr) {
            var min = arr[0];
            var minIndex = 0;
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    minIndex = i;
                    min = arr[i];
                }
              }
            yourMatch = [minIndex, min];
            console.log("Your match is: " + friendArray[yourMatch[0].name] + " The difference between your scores was: " + yourMatch[1]);
          };
          indexOfMin(finalUserCompatScores);
        }
      };
      checkAll();
    }
  res.json(friendArray[yourMatch[0]]);
});

// app.use('/', htmlRouter);
// app.use('/survey', htmlRouter);
// app.use('/api/friends', apiRouter);
// app.post('/api/friends', apiRouter);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
