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
        numbers[1] = " Beep!";
        console.log(numbers);
       }
        // let index = numbers.indexOf("1");
        // numbers[index] = " Beep!";
        // console.log(numbers);
     };
    };

     
      
      // for (let i =0; i < numbers.length; i++){
      //   let index = numbers.indexOf("2");
      //   numbers[index] = " Boop!";
      // };
    
      // for (let i =0; i < numbers.length; i++){
      //   let index = numbers.indexOf("3");
      //   numbers[index] = " Won't you be my neighbor?";
      // };




//User Logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    const reply = MrRobo(number);
    $("#result").text(reply);
    });
  });