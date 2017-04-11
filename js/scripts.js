//U.I.

var Game = function (req, spot1, spot2, spot3) {
  this.plyrNm = "";
  this.req = "";
  this.ingredientOne= "";
  this.ingredientTwo= "";
  this.ingredientThree= "";
  this.spot1 = "";
  this.spot2 = "";
  this.spot3 = "";
  this.bank = 0;




};
var Customer = function ( ){
  var requestArray=["Manhattan","Margarita","Moscow Mule","Gin Martini","Pinot Noir","Chardonnay"];
  this.randomIndex = function(){
  return Math.round((Math.random() * 5));
  };
  this.createReq = function () {
    return requestArray[this.randomIndex()];
  };

}



Game.prototype.reqLib = function () {

  if(this.req === "Manhattan") {

    if(this.spot1 !== "Bourbon" || this.spot2 !== "Sweet Vermouth" || this.spot3 !== "Cherry") {
      return;
    } else if (this.spot1 === "Bourbon" && this.spot2 === "Sweet Vermouth" && this.spot2 === "Cherry") {
      this.bank + 10;
      console.log("Victory Condition");
      return;
    }
  }//End of Manhattan Test
  else if (this.req === "Margarita") {
    if(this.spot1 !== "Tequila" || this.spot2 !== "TripleSec" || this.spot3 !== "Lime Juice") {
      return;
    } else if (this.spot1 === "Tequila" && this.spot2 === "TripleSec" && this.spot3 === "Lime Juice") {
    console.log("Victory Condition");
      this.bank + 10;
      return;
    }
  }//End of Margarita Test
  else if (this.req === "Moscow Mule") {
    if(this.spot1 !== "Vodka" || this.spot2 !== "Ginger Beer" || this.spot3 !== "Lime Juice") {
      return;
    } else if (this.spot1 === "Vodka" && this.spot2 === "Ginger Beer" && this.spot3 === "Lime Juice") {
    console.log("Victory Condition");
      this.bank + 10;
      return;
    }
  }//End of Moscow Test
  else if (this.req === "Gin Martini") {
    if(this.spot1 !== "Gin" || this.spot2 !== "Dry Vermouth" || this.spot3 !== "Twist") {
      console.log("Nope");
      return;
    } else if (this.spot1 === "Gin" && this.spot2 === "Dry Vermouth" && this.spot3 === "Twist") {
    console.log("Victory Condition");
      this.bank + 10;
      return;
    }



  }//End of Gin Martini Test
  else if (this.req === "Pinot Noir") {
    if(this.spot3 !== "Pinot Noir") {
      console.log("This is not what I had in mind");
    } else if(this.spot1 !== "" || this.spot2 !== "" && this.spot3 === "Pinot Noir") {
      console.log("I just want the wine by itself. How do you mess this up?");
    } else if(this.spot1 === "" && this.spot2 === "" && this.spot3 === "Pinot Noir") {
      console.log("This is perfect");
      console.log("Victory Condition");
      this.bank + 10;
      return;
    }
  }//End of Pinot Noir Test
  else if (this.req === "Chardonnay") {
    if(this.spot3 !== "Chardonnay") {
      console.log("This is not what I had in mind");
    } else if(this.spot1 !== "" || this.spot2 !== "" && this.spot3 === "Chardonnay") {
      console.log("I just want the wine by itself. How do you mess this up?");
    } else if(this.spot1 === "" && this.spot2 === "" && this.spot3 === "Chardonnay") {
      console.log("This is perfect");
      console.log("Victory Condition");
      this.bank + 10;
      return;
    }
  }//End of Chardonnay Test
  else if (this.bank === 0) {
    return;
  }



}//End of Request Library Test Function

//B.L.

$(document).ready(function() {
  var newGame = new Game();
  var newCustomer = new Customer();
//Spirit Buttons

  $("#brbnBtn").click(function(event){
    event.preventDefault();
    $("#firstSpot").val("");
    var spirVl = $("#brbnBtn").val();
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
  $("#vodBtn").click(function(event){
    event.preventDefault();
    $("#firstSpot").val("");
    var spirVl = $("#vodBtn").val();
    console.log(spirVl);
    $("#firstSpot").val(spirVl);
  });
  $("#rumBtn").click(function(event){
    event.preventDefault();
    $("#firstSpot").val("");
    var spirVl = $("#rumBtn").val();
    console.log(spirVl);
    $("#firstSpot").val(spirVl);
  });

// below is column 2 mixers
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
  $("#gingBtn").click(function(event){
    event.preventDefault();
    $("#secondSpot").val("");
    var mxVl = $("#gingBtn").val();
    console.log(mxVl);
    $("#secondSpot").val(mxVl);
  });
// below is column 3 and 4
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
  $("#tonicBtn").click(function(event){
    event.preventDefault();
    $("#thirdSpot").val("");
    var altVl = $("#tonicBtn").val();
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
  $("#sodaBtn").click(function(event){
    event.preventDefault();
    $("#thirdSpot").val("");
    var altVl = $("#sodaBtn").val();
    console.log(altVl);
    $("#thirdSpot").val(altVl);
  });
//Player info submit

$("#playerInfoForm").submit(function(event) {
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

    newGame.spot1 = reqTest1;
    newGame.spot2 = reqTest2;
    newGame.spot3 = reqTest3;
    // newGame.reqLib();
    var test = newCustomer.createReq();
    console.log(test);

  });

});// Doc Ready
