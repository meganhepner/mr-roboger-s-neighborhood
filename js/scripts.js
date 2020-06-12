//Business Logic
function MrRobo(number){
  let numbers = [];
  
 console.log(number);
}


//User Logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#number").val());
    const reply = MrRobo(number);
    $("#result").text(reply);
    });
  });