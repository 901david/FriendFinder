function NewFriend (nameArg, linkArg, scoresArg) {
  this.name = nameArg;
  this.link = linkArg;
  this.scores = scoresArg;
};
$(document).ready(function () {
  $("#submit").click(function () {
    let nameArg  = $("#name").val().trim();
    let linkArg = $("#photo").val().trim();
    let scoreArg = [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(),];
    if ((nameArg === "") || (linkArg === "")) {
      console.log("Invalid input");
    }
    else {
      let tempFriend = new NewFriend(nameArg, linkArg, scoreArg);
      var currentURL = window.location.origin;
      $.ajax({
        url: currentURL + "/api/friends",
        method: "POST",
        data: tempFriend
      }).done(function(response) {
        console.log(response);
        $("#showOverOrNot").removeClass("displayNone").addClass("displayBlock");
        $("#matchHolder").append("<img src='" + response.photo + "' alt='Your Match'><p>Here is your Match!!</p><p>Name: " + response.name + "'</p>");
      });
    }

  });
});
