//U.I.

var Game = function (req, spot1, spot2, spot3) {
  this.req = "";
  this.spot1 = "";
  this.spot2 = "";
  this.spot3 = "";






  // document.getElementById("trns-form").reset();

  return;
};

Game.prototype.reqLib = function () {


  if(this.req === "Manhattan") {

    if(this.spot1 !== "Bourbon" || this.spot2 !== "Sweet Vermouth" || this.spot3 !== "Cherry") {
      console.log("Not manny");
      return;
    } else if (this.spot1 === "Bourbon" && this.spot2 === "Sweet Vermouth" && this.spot2 === "Cherry") {
      console.log("Manny!");
      return;
    }
  }//End of Manhattan Test
  else if (this.req === "") {
    return false;
  }
}//End of Request Library Test Function

//B.L.

$(document).ready(function() {
  var newGame = new Game();

//Spirit Buttons

  $("#brbnBtn").click(function(event){
    event.preventDefault();
    $("#firstSpot").val("");
    var spirVl = $("#brbnBtn").val();
    console.log(spirVl);
    $("#firstSpot").val(spirVl);
  });
  $("#ginBtn").click(function(event){
    event.preventDefault();
    $("#firstSpot").val("");
    var spirVl = $("#ginBtn").val();
    console.log(spirVl);
    $("#firstSpot").val(spirVl);
  });
  $("#teqBtn").click(function(event){
    event.preventDefault();
    $("#firstSpot").val("");
    var spirVl = $("#teqBtn").val();
    console.log(spirVl);
    $("#firstSpot").val(spirVl);
  });

  $("#swtVrBtn").click(function(event){
    event.preventDefault();
    $("#secondSpot").val("");
    var mxVl = $("#swtVrBtn").val();
    console.log(mxVl);
    $("#secondSpot").val(mxVl);
  });

  $("#trpSecBtn").click(function(event){
    event.preventDefault();
    $("#secondSpot").val("");
    var mxVl = $("#trpSecBtn").val();
    console.log(mxVl);
    $("#secondSpot").val(mxVl);
  });
  $("#dryVrBtn").click(function(event){
    event.preventDefault();
    $("#secondSpot").val("");
    var mxVl = $("#dryVrBtn").val();
    console.log(mxVl);
    $("#secondSpot").val(mxVl);
  });

  $("#chryBtn").click(function(event){
    event.preventDefault();
    $("#thirdSpot").val("");
    var altVl = $("#chryBtn").val();
    console.log(altVl);
    $("#thirdSpot").val(altVl);
  });
  $("#limeJuiceBtn").click(function(event){
    event.preventDefault();
    $("#thirdSpot").val("");
    var altVl = $("#limeJuiceBtn").val();
    console.log(altVl);
    $("#thirdSpot").val(altVl);
  });
  $("#twistBtn").click(function(event){
    event.preventDefault();
    $("#thirdSpot").val("");
    var altVl = $("#twistBtn").val();
    console.log(altVl);
    $("#thirdSpot").val(altVl);
  });

  $("#pNBtn").click(function(event){
    event.preventDefault();
    $("#thirdSpot").val("");
    var rdWnVl = $("#pNBtn").val();
    console.log(rdWnVl);
    $("#thirdSpot").val(rdWnVl);
  });

  $("#chardBtn").click(function(event){
    event.preventDefault();
    $("#thirdSpot").val("");
    var rdWnVl = $("#chardBtn").val();
    console.log(rdWnVl);
    $("#thirdSpot").val(rdWnVl);
  });
  $("#beerBtn").click(function(event){
    event.preventDefault();
    $("#thirdSpot").val("");
    var rdWnVl = $("#beerBtn").val();
    console.log(rdWnVl);
    $("#thirdSpot").val(rdWnVl);
  });
//Player info submit
$(".playerForm").submit(function(event) {
  event.preventDefault();
  $("#header1").hide();
  $(".playerInput").hide();
  $(".header2").show();
  var avatarInput = $("input:radio[name=thisradio]:checked").val();
  var playerNameInput = $("#playerNameInput").val();
  $(".playerName").text(playerNameInput);
  $("." + avatarInput).show();
  console.log(avatarInput);
});
//Submit Button
  $("#trns-form").submit(function(event) {
    event.preventDefault();

    var reqTest1 = $("#firstSpot").val();
    var reqTest2 = $("#secondSpot").val();
    var reqTest3 = $("#thirdSpot").val();

    console.log(newGame.spot1);
    newGame.spot1 = reqTest1;
    newGame.spot2 = reqTest2;
    newGame.spot3 = reqTest3;
    newGame.reqLib();
    console.log(newGame.req);
  });

});// Doc Ready
