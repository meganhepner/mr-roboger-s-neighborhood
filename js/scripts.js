//Business Logic
function MrRobo(number){

  let array = [0];
  count = 0;
  if (number.includes("3")){
    return "Won't you be my neighbor";
    } else if (number.includes("2")){
      return "Boop!"
    } else if (number.includes(1)){
      return "Beep!"
    }
// //   } else {
// //     while (count < number){
// //     count = count+1;
// //     array.push(count);
// //     console.log(array);
// //   };
};



//   for (let i = 0; i <= number; i++){

//     array.push(+1);
//   }
// }

  

//   for (let i =0; i < numbers.length; i++){
//     let index = numbers.indexOf("1");
//     numbers[index] = " Beep!";
//  };
  
//   for (let i =0; i < numbers.length; i++){
//     let index = numbers.indexOf("2");
//     numbers[index] = " Boop!";
//   };

//   for (let i =0; i < numbers.length; i++){
//     let index = numbers.indexOf("3");
//     numbers[index] = " Won't you be my neighbor?";
//   };

// //   return numbers;
// }
  





//User Logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    const reply = MrRobo(number);
    $("#result").text(reply);
    });
  });