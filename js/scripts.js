//U.I.

var Game = function (req) {
  this.plyrNm = "";
  this.req = req;
  this.spot1 = "";
  this.spot2 = "";
  this.spot3 = "";
  this.bank = -7;




};
var Customer = function (){
  var requestArray= ["Manhattan", "Margarita", "Moscow Mule", "Gin Martini", "Pinot Noir", "Chardonnay", "Vodka Martini", "Gin and Tonic"];
  this.createReq = function () {
    var randomIndex = Math.round((Math.random() * 7));
    return requestArray[randomIndex];
  };
  this.tempReqHold="";
  this.statement= function(){
    if (this.tempReqHold==="Manhattan"){
      return "Manhattan up...Please!";
  }else if (this.tempReqHold==="Margarita"){
    return "Margarita rocks and some salt";
  }else if (this.tempReqHold==="Moscow Mule"){
    return " I need a Moscow Mule please. You have the copper mugs right?";
  }else if (this.tempReqHold==="Gin Martini"){
    return " Gin Marini please. Don't bruise it.";
  }else if (this.tempReqHold==="Pinot Noir"){
    return "Can I have a light bodied red wine?";
  }else if (this.tempReqHold==="Chardonnay"){
    return " Can I get a white wine that is oaky and buttery?";
  }else if (this.tempReqHold==="Vodka Martini"){
    return "Vodka Martini shaken not stirred.";
  }else if (this.tempReqHold==="Gin and Tonic"){
    return " One G and T please.";
}
}
}



Game.prototype.reqLib = function () {

  if(this.req === "Manhattan") {

    if(this.spot1 !== "Bourbon" || this.spot2 !== "Sweet Vermouth" || this.spot3 !== "Cherry") {
      return;
    } else if (this.spot1 === "Bourbon" && this.spot2 === "Sweet Vermouth" && this.spot3 === "Cherry") {
      this.bank = this.bank + 10;
      console.log("Victory Condition");
      return;
    }
  }//End of Manhattan Test
  else if (this.req === "Margarita") {
    if(this.spot1 !== "Tequila" || this.spot2 !== "Triple Sec" || this.spot3 !== "Lime Juice") {
      console.log("Nope");
      return;
    } else if (this.spot1 === "Tequila" && this.spot2 === "Triple Sec" && this.spot3 === "Lime Juice") {
      console.log("Victory Condition");
      this.bank = this.bank + 10;
      return;
    }
  }//End of Margarita Test
  else if (this.req === "Moscow Mule") {
    if(this.spot1 !== "Vodka" || this.spot2 !== "Ginger Beer" || this.spot3 !== "Lime Juice") {
      return;
    } else if (this.spot1 === "Vodka" && this.spot2 === "Ginger Beer" && this.spot3 === "Lime Juice") {
    console.log("Victory Condition");
      this.bank = this.bank + 10;
      return;
    }
  }//End of Moscow Test
  else if (this.req === "Gin Martini") {
    if(this.spot1 !== "Gin" || this.spot2 !== "Dry Vermouth" || this.spot3 !== "Twist") {
      console.log("Nope");
      return;
    } else if (this.spot1 === "Gin" && this.spot2 === "Dry Vermouth" && this.spot3 === "Twist") {
    console.log("Victory Condition");
      this.bank = this.bank + 10;
      return;
    }
  }//End of Gin Martini Test
  else if (this.req === "Vodka Martini") {
    if(this.spot1 !== "Vodka" || this.spot2 !== "Dry Vermouth" || this.spot3 !== "Twist") {
      console.log("Nope");
      return;
    } else if (this.spot1 === "Vodka" && this.spot2 === "Dry Vermouth" && this.spot3 === "Twist") {
    console.log("Victory Condition");
      this.bank = this.bank + 10;
      return;
    }
  }//End of Vodka Martini Test
  else if (this.req === "Pinot Noir") {
    if(this.spot3 !== "Pinot Noir") {
      console.log("This is not what I had in mind");
    } else if(this.spot1 !== "" || this.spot2 !== "" && this.spot3 === "Pinot Noir") {
      console.log("I just want the wine by itself. How do you mess this up?");
    } else if(this.spot1 === "" && this.spot2 === "" && this.spot3 === "Pinot Noir") {
      console.log("This is perfect");
      console.log("Victory Condition");
      this.bank = this.bank + 10;
      return;
    }
  }//End of Pinot Noir Test
  else if (this.req === "Gin and Tonic") {
    if((this.spot3 !== "Tonic" && this.spot1 === "Gin") || (this.spot3 === "Tonic" && this.spot1 !== "Gin")) {
      console.log("This is not what I had in mind");
    } else if(this.spot1 === "Gin" && this.spot2 === "" && this.spot3 === "Tonic") {
      console.log("This is perfect");
      console.log("Victory Condition");
      this.bank = this.bank + 10;
      return;
    }
  }//End of Gin and Tonic Test
  else if (this.req === "Chardonnay") {
    if(this.spot3 !== "Chardonnay") {
      console.log("This is not what I had in mind");
    } else if(this.spot1 !== "" || this.spot2 !== "" && this.spot3 === "Chardonnay") {
      console.log("I just want the wine by itself. How do you mess this up?");
    } else if(this.spot1 === "" && this.spot2 === "" && this.spot3 === "Chardonnay") {
      console.log("This is perfect");
      console.log("Victory Condition");
      this.bank = this.bank + 10;
      return;
    }
  }//End of Chardonnay Test



}//End of Request Library Test Function

//B.L.

$(document).ready(function() {
  var newGame = new Game();
  var newCustomer = new Customer();
//Spirit Buttons
  $(".primary button").click(function(event){
    event.preventDefault();
    $("#firstSpot").val("");
    var spirVl = $(this).val();
    $("#firstSpot").val(spirVl);
  });

// below is column 2 mixers
  $(".secondary button").click(function(event){
    event.preventDefault();
    $("#secondSpot").val("");
    var mxVl = $(this).val();
    console.log(mxVl);
    $("#secondSpot").val(mxVl);
  });

// below is column 3 and 4
  $(".thirdFourth button").click(function(event){
    event.preventDefault();
    $("#thirdSpot").val("");
    var altVl = $(this).val();
    console.log(altVl);
    $("#thirdSpot").val(altVl);
  });

//Player info submit

$("#playerInfoForm").submit(function(event) {
  event.preventDefault();
  $("#header1").hide();
  $(".playerInput").hide();
  $(".header2").show();
  $(".mainGame, .back ").show();
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
    newGame.reqLib();

  });
//Next Customer Button
  $("#guestBtn").click(function(event) {
    event.preventDefault();
    newGame.req = "";
    $("#firstSpot").val("");
    $("#secondSpot").val("");
    $("#thirdSpot").val("");
    newGame.req = newCustomer.createReq();
    newCustomer.tempReqHold = newGame.req;
    var result= newCustomer.statement();
    $("#bank").text("$" + newGame.bank);
    console.log(result);
    $("h3.orderStatement").text(result);

  });

});// Doc Ready
