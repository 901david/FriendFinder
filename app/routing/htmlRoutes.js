var path = require("path");
var express = require('express');

module.exports = function(app) {
  //   app.get("static/:resource", function(req, res){
  //     console.log(path.join(__dirname, "app/static/" + req.params.resource));
  //     res.sendFile(path.join(__dirname, "app/static/" + req.params.resource));
  // });
  app.use(express.static(path.join(__dirname, "../static")));
  console.log(path.join(__dirname, "../static"));
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/survey", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


};
