//Business Logic
function MrRobo(number){
  if (number.includes("3")){
    return "Won't you be my neighbor";
    } else if (number.includes("2")){
      return "Boop!"
    } else if (number.includes(1)){
      return "Beep!"
    } else {
      const number = parseInt($("input#number").val());
      let numbers = [0];
      count = 0;
        while (count < number){
        count = count+1;
        numbers.push(count);
      }
        numbers[1] = " Beep!";
        numbers[2] = " Boop!";
        numbers[3] = "Won't you be my neighbor?"
        return numbers;
    };
  };

//User Logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    const reply = MrRobo(number);
    $("#result").text(reply);
    });
  });