var path = require("path");


module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/survey", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("../static/:resource", function(req, res){
    res.sendFile(path.join(__dirname, "../static/" + req.params.resource));
});

};
