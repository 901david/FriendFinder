

var friendsData = require("../data/friends.js");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  app.post("/api/friends", function(req, res) {
    let yourMatch = [];
    let newFriend = req.body;
    let userScores = newFriend.scores;
    let finalUserCompatScores = [];
      for (let i = 0; i < friendsData.length; i++) {
        let tempCompare = friendsData[i].scores;
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
              console.log("Your match is: " + friendsData[yourMatch[0].name] + " The difference between your scores was: " + yourMatch[1]);
            };
            indexOfMin(finalUserCompatScores);
          }
        };
        checkAll();
      }
      friendsData.push(newFriend);
    res.json(friendsData[yourMatch[0]]);
  });

};
