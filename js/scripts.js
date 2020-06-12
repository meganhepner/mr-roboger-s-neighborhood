//Business Logic
function MrRobo(number){
  
  let numbers = [];
  let str = number.split('');
  numbers.push(str);
  return numbers;


}


//User Logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    const reply = MrRobo(number);
    $("#result").text(reply);
    });
  });