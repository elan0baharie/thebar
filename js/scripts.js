//U.I.




var Inventory = function(req, spot1, spot2, spot3) {
  this.req = req;
  this.spot1 = spot1;
  this.spot2 = spot2;
  this.spot3 = spot3;
  var bourbon = ["Bourbon", "Rye"];


  // document.getElementById("trns-form").reset();

  return;
};


//B.L.

$(document).ready(function() {
  var newInventory = new Inventory();

//Spirit Buttons

  $("#brbnBtn").click(function(event){
    event.preventDefault();
    $("#firstSpot").val("");
    var spirVl = $("#brbnBtn").val();
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

  $("#chryBtn").click(function(event){
    event.preventDefault();
    $("#thirdSpot").val("");
    var altVl = $("#chryBtn").val();
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





//Submit Button
  $("#trns-form").submit(function(event) {
    event.preventDefault();

    var reqTest1 = $("#firstSpot").val();
    var reqTest2 = $("#secondSpot").val();
    var reqTest3 = $("#thirdSpot").val();

    newInventory.spot1 = reqTest1;
    newInventory.spot2 = reqTest2;
    newInventory.spot3 = reqTest3;
    console.log(newInventory.spot1);
  });

});// Doc Ready
