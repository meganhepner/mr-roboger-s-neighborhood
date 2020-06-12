//Business Logic
function MrRobo(number){
   let array = number.split('');

  for (let i =0; i < array.length; i++){
    let index = array.indexOf("1");
    array[index] = " Beep!";
 };
  
  for (let i =0; i < array.length; i++){
    let index = array.indexOf("2");
    array[index] = " Boop!";
  };

  for (let i =0; i < array.length; i++){
    let index = array.indexOf("3");
    array[index] = " Won't you be my neighbor?";
  };

  return array;

 
  

  //  if (number.indexOf("1") > -1){
  //   let index = number.indexOf
  // ;
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