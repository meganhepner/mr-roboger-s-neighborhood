//Business Logic
function MrRobo(number){
  
  let indices = [];
  let array = number.split('');
  // let element = "1";
  let index = array.indexOf("1");
 

  // while (index != -1){
  //   indices.push(index);
  //   index = str.indexOf(element, index+1);
  // }

  if (index !== -1){
    array[index] = "Beep!";
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