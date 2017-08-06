
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
app.get("/survey", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});
