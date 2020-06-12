//Business Logic
function MrRobo(number){
  
  let indices = [];
  let str = number;
  // let str = [number.split('')];
  let element = "1";
  let index = str.indexOf(element);
 

  while (index != -1){
    indices.push(index);
    index = str.indexOf(element, index+1);
  }
  
console.log(indices);
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