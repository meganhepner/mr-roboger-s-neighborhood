//Business Logic
function MrRobo(number){
  

  let str = number.split('');
  if(str.includes("1")){
    console.log('yay');
  }
  


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