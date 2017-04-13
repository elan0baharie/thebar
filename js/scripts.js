//U.I.

var Game = function (req) {
  this.plyrNm = "";
  this.req = req;
  this.spot1 = "";
  this.spot2 = "";
  this.spot3 = "";
  this.wOrL = "";
  this.upgrade = false;
  this.bank = -7;
  this.happyGuest=0;
  this.sadGuest=0;
  this.upgradeTest = function () {
    if(this.wOrL === "Victory") {
      if(this.upgrade === true) {
      this.bank = this.bank + 2;
      this.wOrL === "";
    }

    } else {
      return}
  }
  this.detectBank = function () {
    var bnkDtct = this.bank;

    if(bnkDtct >= 100) {

      alert("You are now eligible for our bar upgrade");
    } else {
      return;
    }


  }
};



custImage = function(param){
 var order = Math.round(Math.random() * 12);
 $(".customerPic").attr("src", ("img/legoorder" + order + ".png"));
}

// function newbar(){
//   if (this.bank >= 3) {
//     $("script").prepend('<link href="css/styles2.css" rel="stylesheet" type="text/css">');
//   }
// }




var Customer = function (){
  var requestArray= ["Manhattan", "Margarita", "Moscow Mule", "Gin Martini", "Pinot Noir", "Chardonnay", "Vodka Martini", "Gin and Tonic","Dark and Stormy", "Cabernet", "Old Fashion", "Daiquiri", "Beer", "7 and 7"];
  this.createReq = function () {
    var randomIndex = Math.round((Math.random() * 13));
    return requestArray[randomIndex];
  };
  this.tempReqHold="";
  this.statement= function(){
    if(this.tempReqHold==="Manhattan"){
      return "Manhattan up...Please!";
    } else if (this.tempReqHold==="Margarita"){
      return "\"Margarita rocks and salt.\"";
    } else if (this.tempReqHold==="Moscow Mule"){
      return " \"I need a Moscow Mule. You have the copper mugs right?\"";
    } else if (this.tempReqHold==="Gin Martini"){
      return " \"Gin Martini and don't bruise it.\"";
    } else if (this.tempReqHold==="Pinot Noir"){
      return "\"Do you have a light bodied red wine?\"";
    } else if (this.tempReqHold==="Chardonnay"){
      return "\"Can I get a white wine that is bold and buttery?\"";
    } else if (this.tempReqHold==="Vodka Martini"){
      return "\"Vodka Martini please. Shaken not stirred.\"";
    } else if (this.tempReqHold==="Gin and Tonic"){
      return "\"One G and T please.\"";
    } else if (this.tempReqHold==="Dark and Stormy"){
    return "\"Please one Dark and Stormy.\"";
    } else if (this.tempReqHold==="Cabernet"){
    return "\"Get me the boldest red wine you have.\"";
    } else if (this.tempReqHold==="Old Fashion"){
    return "\"Do you know how to make an Old Fashion?\"";
    } else if (this.tempReqHold==="Daiquiri"){
    return "\"I see a little sun. Get me a Daiquiri.\"";
    } else if (this.tempReqHold==="Beer"){
    return "\"I need a beer.\"";
    } else if (this.tempReqHold==="7 and 7"){
      return "\"7 and 7. Light ice.\"";
}
}
}







Game.prototype.reqLib = function () {

  if(this.req === "Manhattan") {

    if(this.spot1 !== "Bourbon" || this.spot2 !== "Sweet Vermouth" || this.spot3 !== "Cherry") {
      this.bank= this.bank-10;
      this.sadGuest=this.sadGuest+1;

      return "\"You Suck!\"";
    } else if (this.spot1 === "Bourbon" && this.spot2 === "Sweet Vermouth" && this.spot3 === "Cherry") {
      this.bank = this.bank + 10;
      this.happyGuest= this.happyGuest+1;
      this.wOrL = "Victory";
      return "\"What an awesome Manhattan!\"";
    }
  }//End of Manhattan Test
  else if (this.req === "Margarita") {
    if(this.spot1 !== "Tequila" || this.spot2 !== "Triple Sec" || this.spot3 !== "Lime Juice") {
      this.bank = this.bank-10;
      this.sadGuest= this.sadGuest+1;
      return "\"Learn how to bartend!\"";
    } else if (this.spot1 === "Tequila" && this.spot2 === "Triple Sec" && this.spot3 === "Lime Juice") {
      this.wOrL = "Victory";
      this.bank = this.bank + 10;
      this.happyGuest= this.happyGuest+1;
      return"\"Good Job.\"";
    }
  }//End of Margarita Test
  else if (this.req === "Moscow Mule") {
    if(this.spot1 !== "Vodka" || this.spot2 !== "Ginger Beer" || this.spot3 !== "Lime Juice") {
      this.bank= this.bank-10;
      this.sadGuest=this.sadGuest+1;
      return "\"Wow...That is completely not what I wanted\"";
    } else if (this.spot1 === "Vodka" && this.spot2 === "Ginger Beer" && this.spot3 === "Lime Juice") {
    this.bank = this.bank + 10;
    this.happyGuest= this.happyGuest+1;
      return"\"That is the best Moscow Mule i've ever had\"";
    }
  }//End of Moscow Test
  else if (this.req === "Gin Martini") {
    if(this.spot1 !== "Gin" || this.spot2 !== "Dry Vermouth" || this.spot3 !== "Twist") {
      this.bank = this.bank - 10;
      this.sadGuest= this.sadGuest+1;
      return "\"Disgusting!\"";
    } else if (this.spot1 === "Gin" && this.spot2 === "Dry Vermouth" && this.spot3 === "Twist") {
    this.wOrL = "Victory";
    this.bank = this.bank + 10;
    this.happyGuest= this.happyGuest+1;
      return"\" MMMMMMMMM!\"";
    }
  }//End of Gin Martini Test
  else if (this.req === "Vodka Martini") {
    if(this.spot1 !== "Vodka" || this.spot2 !== "Dry Vermouth" || this.spot3 !== "Twist") {
      this.bank = this.bank -10;
      this.sadGuest= this.sadGuest+1;
      return "\"Horrible.\"";
    } else if (this.spot1 === "Vodka" && this.spot2 === "Dry Vermouth" && this.spot3 === "Twist") {
    this.wOrL = "Victory";
    this.bank = this.bank + 10;
    this.happyGuest= this.happyGuest+1;
      return"\"Just like James Bond... Awesome!\"";
    }
  }//End of Vodka Martini Test
  else if (this.req === "Pinot Noir") {
    if(this.spot3 !== "Pinot Noir") {
      this.bank = this.bank -10;
      this.sadGuest= this.sadGuest+1;
      return "\"Not What I was looking for\"";
    } else if(this.spot1 !== "" || this.spot2 !== "" && this.spot3 === "Pinot Noir") {
      this.bank = this.bank -10;
      this.sadGuest= this.sadGuest+1;
      return "\"Just the wine by itself please.\"";
    } else if(this.spot1 === "" && this.spot2 === "" && this.spot3 === "Pinot Noir") {
      this.wOrL = "Victory";
      this.bank = this.bank + 10;
      this.happyGuest= this.happyGuest+1;
      return"\"That's it\"";
    }
  }//End of Pinot Noir Test
  else if (this.req === "Gin and Tonic") {
    if((this.spot3 !== "Tonic" && this.spot1 === "Gin") || (this.spot3 === "Tonic" && this.spot1 !== "Gin")) {
      this.bank = this.bank - 10;
      this.sadGuest= this.sadGuest+1;
      return"\"How does someone screw up a Gin and Tonic\"";
    } else if(this.spot1 === "Gin" && this.spot2 === "" && this.spot3 === "Tonic") {
      this.wOrL = "Victory";
      this.bank = this.bank + 10;
      this.happyGuest= this.happyGuest+1;
      return "\"That hits the spot\"";
    }
  }//End of Gin and Tonic Test
  else if (this.req === "Chardonnay") {
    if(this.spot3 !== "Chardonnay") {
      this.bank = this.bank - 10;
      this.sadGuest= this.sadGuest+1;
      return "\"Get me some water instead\"";
    } else if(this.spot1 !== "" || this.spot2 !== "" && this.spot3 === "Chardonnay") {
      this.bank = this.bank - 10;
      this.sadGuest= this.sadGuest+1;
      return "\"Not exactly it\"";
    } else if(this.spot1 === "" && this.spot2 === "" && this.spot3 === "Chardonnay") {
      this.wOrL = "Victory";
      this.bank = this.bank + 10;
      this.happyGuest= this.happyGuest+1;

      return"\"Perfect!\"";
    }
  }//End of Chardonnay Test
  else if(this.req === "Dark and Stormy") {

    if(this.spot1 !== "Rum" || this.spot2 !== "Ginger Beer" || this.spot3 !== "Lime Juice") {
      this.bank= this.bank-10;
      this.sadGuest=this.sadGuest +1;

      return "\"Yuck. I would call this Off the Mark & Stormy!\"";
    } else if (this.spot1 === "Rum" && this.spot2 === "Ginger Beer" && this.spot3 === "Lime Juice") {
      this.wOrL = "Victory";
      this.bank = this.bank + 10;
      this.happyGuest= this.happyGuest+1;
      return "\"Wow that is refreshing\"";
    }
  } else if (this.req === "Cabernet") {
    if(this.spot3 !== "Cabernet") {
      this.bank = this.bank - 10;
      this.sadGuest= this.sadGuest+1;
      return "\"No good Buddy.\"";
    } else if(this.spot1 !== "" || this.spot2 !== "" && this.spot3 === "Cabernet") {
      this.bank = this.bank - 10;
      this.sadGuest= this.sadGuest+1;
      return "\"Not exactly it\"";
    } else if(this.spot1 === "" && this.spot2 === "" && this.spot3 === "Cabernet") {
      this.wOrL = "Victory";
      this.bank = this.bank + 10;
      this.happyGuest= this.happyGuest+1;

      return"\"Bold and Red. Exactly what I wanted\"";
    }
  }//End of Chardonnay Test
  else if(this.req === "Old Fashion") {

    if(this.spot1 !== "Bourbon" || this.spot2 !== "Simple Syrup" || this.spot3 !== "Cherry") {
      this.bank= this.bank-10;
      this.sadGuest=this.sadGuest +1;

      return "\"Horrible.You probably like pinneaple on your pizza too.\"";
    } else if (this.spot1 === "Bourbon" && this.spot2 === "Simple Syrup" && this.spot3 === "Cherry") {
      this.wOrL = "Victory";
      this.bank = this.bank + 10;
      this.happyGuest= this.happyGuest+1;
      return "\"Nice. Just like my papa used to make.\"";
    }
  }
  else if (this.req === "Daiquiri") {
    if(this.spot1 !== "Rum" || this.spot2 !== "Simple Syrup" || this.spot3 !== "Lemon") {
      this.bank= this.bank-10;
      this.sadGuest=this.sadGuest +1;

      return "\"Jimmy Buffet would be ashamed of you\"";
      } else if (this.spot1 === "Rum" && this.spot2 === "Simple Syrup" && this.spot3 === "Lemon") {
        this.wOrL = "Victory";
        this.bank = this.bank + 10;
        this.happyGuest= this.happyGuest+1;
        return "\"It's like I'm on the islands.\"";
      }
  }//End of Daiquiri Test
  else if (this.req === "Beer") {
    if(this.spot3 !== "Beer") {
      this.bank = this.bank - 10;
      this.sadGuest= this.sadGuest+1;
      return "\"Get me some water instead\"";
    } else if(this.spot2 !== "" && this.spot3 === "Beer") {
      this.bank = this.bank - 10;
      this.sadGuest= this.sadGuest+1;
      return "\"Just the beer. Like a glass with some beer.\"";
    } else if(this.spot1 === "" && this.spot2 === "" && this.spot3 === "Beer") {
      this.wOrL = "Victory";
      this.bank = this.bank + 10;
      this.happyGuest= this.happyGuest+1;

      return"\"Thanks Mucho!\"";
    } else if(this.spot1 === "Bourbon" && this.spot2 === "" && this.spot3 === "Beer") {
      this.wOrL = "Victory";
      this.bank = this.bank + 15;
      this.happyGuest= this.happyGuest+1;

      return"\"Beer and a shot!? That's whats up!\"";
    }
  }//End of Beer Test
  else if (this.req === "7 and 7") {
    if((this.spot3 !== "Soda" && this.spot1 === "Bourbon") || (this.spot3 === "Soda" && this.spot1 !== "Bourbon")) {
      this.bank = this.bank - 10;
      this.sadGuest= this.sadGuest+1;
      return"\"How does someone screw up a Whiskey and Seven?\"";
    } else if(this.spot1 === "Bourbon" && this.spot2 === "" && this.spot3 === "Soda") {
      this.wOrL = "Victory";
      this.bank = this.bank + 10;
      this.happyGuest= this.happyGuest+1;
      return "\"That hits the spot\"";
    }
  }









}//End of Request Library Test Function

//B.L.

$(document).ready(function() {
  var newGame = new Game();
  var newCustomer = new Customer();
  // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item").click(function(){
        $("#myCarousel").carousel(1);
    });

    // Enable Carousel Controls
    $(".left").click(function(event){
        event.preventDefault();
        $("#myCarousel").carousel("prev");
    });
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
// Begin game button
$("#start").click(function(event){
  event.preventDefault();
  $(".playerInput").show();
  // $("script").prepend('<link href="css/styles2.css" rel="stylesheet" type="text/css">')
});
//Player info submit

$("#playerInfoForm").submit(function(event) {
  event.preventDefault();
  $("#header1").hide();
  $(".playerInput").hide();
  $(".header2").show();
  $(".mainGame, .back ").show();
  $(".welcomeStory").hide();
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
    var outPut = newGame.reqLib();
    newGame.upgradeTest();
    newGame.detectBank();
    $("h3.orderStatement").text(outPut);

    $("#bank").text("$" + newGame.bank);

    $("h2.happyCount").text(newGame.happyGuest);
    $("h2.sadCount").text(newGame.sadGuest);
    $("#trns-form button").prop("disabled", true);

  });
//Next Customer Button
  $("#guestBtn").click(function(event) {
    event.preventDefault();
    newGame.req = "";
    custImage();
    $("#firstSpot").val("");
    $("#secondSpot").val("");
    $("#thirdSpot").val("");
    newGame.req = newCustomer.createReq();
    newCustomer.tempReqHold = newGame.req;
    var result= newCustomer.statement();

    $("#trns-form button").prop("disabled", false);
    $("h3.orderStatement").text(result);

    // console.log(newbar());
    // newbar();

  });
// this is the upgrade avatar button- not in play until level up
  $("#playerUpgradeForm").submit(function(event) {
    event.preventDefault();
    $("#header1").hide();
    $(".lego").hide()
    $(".playerInput").hide();
    $(".header2").show();
    $(".mainGame, .back ").show();
    $(".welcomeStory").hide();
    var avatarInput = $("input:radio[name=upradio]:checked").val();
    var playerNameInput = $("#playerNameInput").val();
    $(".playerName").text(playerNameInput);
    $("." + avatarInput).show();
    console.log(avatarInput);
  });
  $("#trigger").click(function(event){
    event.preventDefault();
    newGame.upgrade = true;
    newGame.bank = newGame.bank - 100;
    $(".welcomeStory").show();
    $(".playerUpgrade").show();
    $("#upgradeHeader").show();
    $("script").prepend('<link href="css/styles2.css" rel="stylesheet" type="text/css">')
    $(".bottombar").attr("src", ("img2/silverbar.jpg"));
  });

});// Doc Ready
