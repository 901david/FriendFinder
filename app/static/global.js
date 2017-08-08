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
    if ((nameArg === "") || (linkArg === "") || (!(linkArg.includes("/") && (linkArg.includes("."))))) {
      alert("Invalid input.  Try Again.");
    }
    else if (($("#q1").val() === "") || ($("#q2").val() === "") || ($("#q3").val() === "") || ($("#q4").val() === "") || ($("#q5").val() === "") || ($("#q6").val() === "") || ($("#q7").val() === "") || ($("#q8").val() === "") || ($("#q9").val() === "") || ($("#q10").val() === "")) {
        alert("You didn't fill out all of your scores");
    }
    else {
      let tempFriend = new NewFriend(nameArg, linkArg, scoreArg);
      var currentURL = window.location.origin;
      $.ajax({
        url: currentURL + "/api/friends",
        method: "POST",
        data: tempFriend
      }).done(function(response) {
        $("#matchHolder").empty();
        console.log(response);
        $("#showOverOrNot").removeClass("displayNone").addClass("displayBlock");
        $("#closeThisThanks").removeClass("displayNone").addClass("displayBlock");
        $("#matchHolder").append("<p>Here is your Match!!</p><p>Name: " + response.name + "</p><img src=" + response.photo + " class='img-responsive'>");
      });
    }

  });
  $("#closeThisThanks").click(()=>{
    $("#showOverOrNot").removeClass("displayBlock").addClass("displayNone");
    $("#closeThisThanks").removeClass("displayBlock").addClass("displayNone");
  });
});
