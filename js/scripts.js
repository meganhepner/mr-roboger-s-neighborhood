//Business Logic
function MrRobo(number){
  let numbers = "";
  for (i = 0; i <= number; i ++){
    numbers = ((numbers + i) + ", ");
  }
  return numbers;
}

function MrRoboReply(numbers){
  let reply = [];
  array = numbers.split(", ");
  for(i = 0; i <= array.length-1; i++){
    if (array[i].includes(3)){
      reply.push("Won't you be my neighbor?");
    } else if (array[i].includes(2)){
      reply.push("Boop!")
    } else if (array[i].includes(1)){
      reply.push("Beep!")
    } else 
      reply.push(array[i]);
  }
  return reply
}

// //User Logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    const array = MrRobo(number);
    const reply = MrRoboReply(array);
    $("#result").text(reply);
    });
  });
